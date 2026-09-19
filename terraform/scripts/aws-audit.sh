#!/usr/bin/env bash
# AWS アカウントにあるものを一覧する。読むだけで、何も作らず何も消さない。
#
#   ./terraform/scripts/aws-audit.sh > ~/aws-audit.txt
#
# 出力にはアカウント ID やドメインが入るため、リポジトリーには置かない。
set -uo pipefail

PROFILE="${AWS_PROFILE:-imrg}"
aws() { command aws --profile "$PROFILE" --output text "$@" 2>/dev/null; }

section() { printf '\n\n===== %s =====\n' "$1"; }

printf '調査日時: %s\n' "$(date '+%Y-%m-%d %H:%M:%S')"
printf 'プロファイル: %s\n' "$PROFILE"
printf 'アカウント: %s\n' "$(aws sts get-caller-identity --query Account)"

section '1. 直近3か月の費用（サービス別・上位20）'
start=$(date -v-3m '+%Y-%m-01' 2>/dev/null || date -d '3 months ago' '+%Y-%m-01')
end=$(date '+%Y-%m-%d')
aws ce get-cost-and-usage \
  --time-period "Start=$start,End=$end" \
  --granularity MONTHLY \
  --metrics UnblendedCost \
  --group-by Type=DIMENSION,Key=SERVICE \
  --query 'ResultsByTime[].{月:TimePeriod.Start,明細:Groups[?Metrics.UnblendedCost.Amount>`0.01`].[Keys[0],Metrics.UnblendedCost.Amount]}' \
  || echo '（Cost Explorer の権限が無いか、有効になっていない）'

section '2. Amplify のアプリ'
aws amplify list-apps --region ap-northeast-1 \
  --query 'apps[].[appId,name,defaultDomain,createTime]'

section '3. S3 バケット（作成日・リージョン・おおよその大きさ）'
for bucket in $(aws s3api list-buckets --query 'Buckets[].Name'); do
  created=$(aws s3api list-buckets --query "Buckets[?Name=='$bucket'].CreationDate")
  region=$(aws s3api get-bucket-location --bucket "$bucket" --query LocationConstraint)
  size=$(aws cloudwatch get-metric-statistics \
    --namespace AWS/S3 --metric-name BucketSizeBytes \
    --dimensions "Name=BucketName,Value=$bucket" Name=StorageType,Value=StandardStorage \
    --start-time "$(date -v-2d '+%Y-%m-%dT%H:%M:%S' 2>/dev/null || date -d '2 days ago' '+%Y-%m-%dT%H:%M:%S')" \
    --end-time "$(date '+%Y-%m-%dT%H:%M:%S')" \
    --period 86400 --statistics Maximum \
    --region "${region:-us-east-1}" \
    --query 'Datapoints[-1].Maximum')
  printf '%s\t%s\t%s\t%s バイト\n' "$bucket" "${region:-us-east-1}" "$created" "${size:-0}"
done

section '4. CloudFront の配信'
aws cloudfront list-distributions \
  --query 'DistributionList.Items[].[Id,DomainName,Aliases.Items[0],Status,Enabled,Comment]'

section '5. 証明書（us-east-1 と ap-northeast-1）'
for region in us-east-1 ap-northeast-1; do
  printf -- '-- %s --\n' "$region"
  for arn in $(aws acm list-certificates --region "$region" --query 'CertificateSummaryList[].CertificateArn'); do
    aws acm describe-certificate --region "$region" --certificate-arn "$arn" \
      --query 'Certificate.[DomainName,Status,NotAfter,length(InUseBy)]'
  done
done

section '6. Route53 のゾーンとレコード数'
for zone in $(aws route53 list-hosted-zones --query 'HostedZones[].Id'); do
  aws route53 get-hosted-zone --id "$zone" \
    --query 'HostedZone.[Id,Name,ResourceRecordSetCount]'
done

section '7. IAM ユーザーとアクセスキー（最終使用日）'
for user in $(aws iam list-users --query 'Users[].UserName'); do
  printf '%s（作成: %s）\n' "$user" "$(aws iam list-users --query "Users[?UserName=='$user'].CreateDate")"
  for key in $(aws iam list-access-keys --user-name "$user" --query 'AccessKeyMetadata[].AccessKeyId'); do
    used=$(aws iam get-access-key-last-used --access-key-id "$key" --query 'AccessKeyLastUsed.[LastUsedDate,ServiceName]')
    printf '    鍵 %s  最終使用: %s\n' "$key" "${used:-なし}"
  done
done

section '8. IAM のロールとポリシー（AWS 管理のものは除く）'
aws iam list-roles --query 'Roles[?!starts_with(Path, `/aws-service-role/`)].[RoleName,CreateDate]'
printf -- '-- 自分で作ったポリシー --\n'
aws iam list-policies --scope Local --query 'Policies[].[PolicyName,AttachmentCount,CreateDate]'

section '9. Lambda の関数'
for region in ap-northeast-1 us-east-1; do
  printf -- '-- %s --\n' "$region"
  aws lambda list-functions --region "$region" --query 'Functions[].[FunctionName,Runtime,LastModified]'
done

section '10. CloudWatch のロググループ（保存期間が「なし」＝ずっと残るもの）'
for region in ap-northeast-1 us-east-1; do
  printf -- '-- %s --\n' "$region"
  aws logs describe-log-groups --region "$region" \
    --query 'logGroups[].[logGroupName,retentionInDays,storedBytes]'
done

section '11. 使っていないのに料金がかかるもの（全リージョン）'
for region in $(aws ec2 describe-regions --query 'Regions[].RegionName'); do
  instances=$(aws ec2 describe-instances --region "$region" \
    --query 'Reservations[].Instances[?State.Name!=`terminated`].[InstanceId,State.Name,InstanceType]')
  volumes=$(aws ec2 describe-volumes --region "$region" \
    --filters Name=status,Values=available --query 'Volumes[].[VolumeId,Size,CreateTime]')
  addresses=$(aws ec2 describe-addresses --region "$region" \
    --query 'Addresses[?AssociationId==null].[PublicIp,AllocationId]')
  snapshots=$(aws ec2 describe-snapshots --region "$region" --owner-ids self \
    --query 'Snapshots[].[SnapshotId,VolumeSize,StartTime]')
  databases=$(aws rds describe-db-instances --region "$region" \
    --query 'DBInstances[].[DBInstanceIdentifier,DBInstanceClass,DBInstanceStatus]')
  nats=$(aws ec2 describe-nat-gateways --region "$region" \
    --filter Name=state,Values=available --query 'NatGateways[].NatGatewayId')

  if [ -n "$instances$volumes$addresses$snapshots$databases$nats" ]; then
    printf -- '-- %s --\n' "$region"
    [ -n "$instances" ] && printf 'EC2:\n%s\n' "$instances"
    [ -n "$volumes" ] && printf '外れたままのディスク（課金される）:\n%s\n' "$volumes"
    [ -n "$addresses" ] && printf '割り当てていない固定IP（課金される）:\n%s\n' "$addresses"
    [ -n "$snapshots" ] && printf 'スナップショット:\n%s\n' "$snapshots"
    [ -n "$databases" ] && printf 'RDS:\n%s\n' "$databases"
    [ -n "$nats" ] && printf 'NAT ゲートウェイ（高い）:\n%s\n' "$nats"
  fi
done

section '12. そのほか（DynamoDB・シークレット・コンテナ置き場）'
for region in ap-northeast-1 us-east-1; do
  printf -- '-- %s --\n' "$region"
  printf 'DynamoDB: %s\n' "$(aws dynamodb list-tables --region "$region" --query 'TableNames')"
  printf 'Secrets Manager: %s\n' "$(aws secretsmanager list-secrets --region "$region" --query 'SecretList[].Name')"
  printf 'ECR: %s\n' "$(aws ecr describe-repositories --region "$region" --query 'repositories[].repositoryName')"
done

printf '\n\n以上。消す前に docs/aws-cleanup.md の「消してはいけないもの」を読むこと。\n'
