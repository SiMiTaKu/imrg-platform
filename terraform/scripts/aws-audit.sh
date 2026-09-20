#!/usr/bin/env bash
# AWS アカウントにあるものを一覧する。読むだけで、何も作らず何も消さない。
#
#   ./terraform/scripts/aws-audit.sh > ~/aws-audit.txt
#
# 出力にはアカウント ID やドメインが入るため、リポジトリーには置かない。
set -uo pipefail

PROFILE="${AWS_PROFILE:-imrg}"
aws() { command aws --profile "$PROFILE" --output text "$@" 2>/dev/null; }

# 進み具合は端末へ出す。ファイルへ流しても混ざらない
section() {
  printf '\n\n===== %s =====\n' "$1"
  printf '  %s\n' "$1" >&2
}

printf '調査日時: %s\n' "$(date '+%Y-%m-%d %H:%M:%S')"
printf 'プロファイル: %s\n' "$PROFILE"
printf 'アカウント: %s\n' "$(aws sts get-caller-identity --query Account)"

section '1. 直近3か月の費用（サービス別）'
start=$(date -v-3m '+%Y-%m-01' 2>/dev/null || date -d '3 months ago' '+%Y-%m-01')
end=$(date '+%Y-%m-%d')
# 金額は文字列で返るため、JMESPath では大小を比べられない。整形は python に任せる
command aws --profile "$PROFILE" --output json ce get-cost-and-usage \
  --time-period "Start=$start,End=$end" \
  --granularity MONTHLY \
  --metrics UnblendedCost \
  --group-by Type=DIMENSION,Key=SERVICE 2>/dev/null \
  | python3 -c '
import json, sys

try:
    data = json.load(sys.stdin)
except Exception:
    print("（費用を取れなかった。root で「IAM ユーザーによる請求情報へのアクセス」を有効にするか、")
    print("  このユーザーに ce:GetCostAndUsage の権限を付ける）")
    sys.exit()

for period in data["ResultsByTime"]:
    rows = [(g["Keys"][0], float(g["Metrics"]["UnblendedCost"]["Amount"])) for g in period["Groups"]]
    rows = sorted([r for r in rows if r[1] >= 0.005], key=lambda r: -r[1])
    total = sum(value for _, value in rows)
    print("")
    print(period["TimePeriod"]["Start"] + "  合計 $" + format(total, ".2f"))
    for name, value in rows:
        print("    $" + format(value, "6.2f") + "  " + name)
'

section '2. Amplify のアプリ'
aws amplify list-apps --region ap-northeast-1 \
  --query 'apps[].[appId,name,defaultDomain,createTime]'

section '3. CloudFormation のスタック（まとめて消すならここが単位）'
for region in ap-northeast-1 us-east-1; do
  printf -- '-- %s --\n' "$region"
  aws cloudformation describe-stacks --region "$region" \
    --query 'Stacks[].[StackName,StackStatus,CreationTime]'
done

section '4. S3 バケット（作成日・リージョン・おおよその大きさ）'
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

section '5. CloudFront の配信'
aws cloudfront list-distributions \
  --query 'DistributionList.Items[].[Id,DomainName,Aliases.Items[0],Status,Enabled,Comment]'

section '6. 証明書（us-east-1 と ap-northeast-1）'
for region in us-east-1 ap-northeast-1; do
  printf -- '-- %s --\n' "$region"
  for arn in $(aws acm list-certificates --region "$region" --query 'CertificateSummaryList[].CertificateArn'); do
    aws acm describe-certificate --region "$region" --certificate-arn "$arn" \
      --query 'Certificate.[DomainName,Status,NotAfter,length(InUseBy)]'
  done
done

section '7. Route53 のゾーンとレコード数'
for zone in $(aws route53 list-hosted-zones --query 'HostedZones[].Id'); do
  aws route53 get-hosted-zone --id "$zone" \
    --query 'HostedZone.[Id,Name,ResourceRecordSetCount]'
done

section '8. IAM ユーザーとアクセスキー（最終使用日）'
for user in $(aws iam list-users --query 'Users[].UserName'); do
  printf '%s（作成: %s）\n' "$user" "$(aws iam list-users --query "Users[?UserName=='$user'].CreateDate")"
  for key in $(aws iam list-access-keys --user-name "$user" --query 'AccessKeyMetadata[].AccessKeyId'); do
    used=$(aws iam get-access-key-last-used --access-key-id "$key" --query 'AccessKeyLastUsed.[LastUsedDate,ServiceName]')
    printf '    鍵 %s  最終使用: %s\n' "$key" "${used:-なし}"
  done
done

section '9. IAM のロールとポリシー（AWS 管理のものは除く）'
aws iam list-roles --query 'Roles[?!starts_with(Path, `/aws-service-role/`)].[RoleName,CreateDate]'
printf -- '-- 自分で作ったポリシー --\n'
aws iam list-policies --scope Local --query 'Policies[].[PolicyName,AttachmentCount,CreateDate]'

section '10. Lambda の関数'
for region in ap-northeast-1 us-east-1; do
  printf -- '-- %s --\n' "$region"
  aws lambda list-functions --region "$region" --query 'Functions[].[FunctionName,Runtime,LastModified]'
done

section '11. 認証・API・テーブル（Amplify が裏で作るもの）'
for region in ap-northeast-1 us-east-1; do
  printf -- '-- %s --\n' "$region"
  printf 'Cognito: %s\n' "$(aws cognito-idp list-user-pools --region "$region" --max-results 50 --query 'UserPools[].[Id,Name]')"
  printf 'AppSync: %s\n' "$(aws appsync list-graphql-apis --region "$region" --query 'graphqlApis[].[apiId,name]')"
  printf 'DynamoDB: %s\n' "$(aws dynamodb list-tables --region "$region" --query 'TableNames')"
  printf 'Secrets Manager: %s\n' "$(aws secretsmanager list-secrets --region "$region" --query 'SecretList[].Name')"
  printf 'ECR: %s\n' "$(aws ecr describe-repositories --region "$region" --query 'repositories[].repositoryName')"
done

section '12. CloudWatch のロググループ（保存期間が「なし」＝ずっと残るもの）'
for region in ap-northeast-1 us-east-1; do
  printf -- '-- %s --\n' "$region"
  command aws --profile "$PROFILE" --output json logs describe-log-groups --region "$region" 2>/dev/null \
    | python3 -c '
import json, sys

try:
    groups = json.load(sys.stdin)["logGroups"]
except Exception:
    sys.exit()

forever = [g for g in groups if "retentionInDays" not in g]
total = sum(g.get("storedBytes", 0) for g in groups)
print("  全部で " + str(len(groups)) + " 個 / 合計 " + format(total / 1024 / 1024, ".2f") + " MB")
print("  うち保存期間なし: " + str(len(forever)) + " 個")
for group in sorted(forever, key=lambda g: -g.get("storedBytes", 0))[:10]:
    print("    " + group["logGroupName"] + "  " + str(group.get("storedBytes", 0)) + " バイト")
if len(forever) > 10:
    print("    …ほか " + str(len(forever) - 10) + " 個")
'
done

section '13. 使っていないのに料金がかかるもの（全リージョン）'
# リージョンごとに並べて調べる。順に回すと数分かかる
tmp=$(mktemp -d)
for region in $(aws ec2 describe-regions --query 'Regions[].RegionName'); do
  (
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
    # 動いていなくても、スナップショットと自動バックアップには料金がかかる
    db_snapshots=$(aws rds describe-db-snapshots --region "$region" --snapshot-type manual \
      --query 'DBSnapshots[].[DBSnapshotIdentifier,AllocatedStorage,SnapshotCreateTime]')
    db_cluster_snapshots=$(aws rds describe-db-cluster-snapshots --region "$region" --snapshot-type manual \
      --query 'DBClusterSnapshots[].[DBClusterSnapshotIdentifier,AllocatedStorage,SnapshotCreateTime]')
    db_backups=$(aws rds describe-db-instance-automated-backups --region "$region" \
      --query 'DBInstanceAutomatedBackups[].[DBInstanceIdentifier,AllocatedStorage,Status]')
    nats=$(aws ec2 describe-nat-gateways --region "$region" \
      --filter Name=state,Values=available --query 'NatGateways[].NatGatewayId')

    if [ -n "$instances$volumes$addresses$snapshots$databases$db_snapshots$db_cluster_snapshots$db_backups$nats" ]; then
      {
        printf -- '-- %s --\n' "$region"
        [ -n "$instances" ] && printf 'EC2:\n%s\n' "$instances"
        [ -n "$volumes" ] && printf '外れたままのディスク（課金される）:\n%s\n' "$volumes"
        [ -n "$addresses" ] && printf '割り当てていない固定IP（課金される）:\n%s\n' "$addresses"
        [ -n "$snapshots" ] && printf 'EBS のスナップショット:\n%s\n' "$snapshots"
        [ -n "$databases" ] && printf 'RDS:\n%s\n' "$databases"
        [ -n "$db_snapshots" ] && printf 'RDS のスナップショット（課金される）:\n%s\n' "$db_snapshots"
        [ -n "$db_cluster_snapshots" ] && printf 'RDS クラスターのスナップショット（課金される）:\n%s\n' "$db_cluster_snapshots"
        [ -n "$db_backups" ] && printf 'RDS の自動バックアップ（インスタンスが無くても残る。課金される）:\n%s\n' "$db_backups"
        [ -n "$nats" ] && printf 'NAT ゲートウェイ（高い）:\n%s\n' "$nats"
      } > "$tmp/$region"
    fi
  ) &
done
wait
cat "$tmp"/* 2>/dev/null || printf '（見つからなかった）\n'
rm -rf "$tmp"

printf '\n\n以上。消す前に docs/aws-cleanup.md の「消してはいけないもの」を読むこと。\n'
