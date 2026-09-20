# AWS の片づけ手順

Terraform（Phase 4）で作り直す前に、これまでの作業で残ったものを消す。

2026年9月20日に費用の内訳を確かめ、**消すべきものが分かった状態**で書いてある。
上から順に進めれば終わる。所要時間の目安は30分。

---

## 0. 何にお金がかかっているか

| サービス                 | 月額            | どうする                                               |
| ------------------------ | --------------- | ------------------------------------------------------ |
| Route 53                 | $0.50           | **消さない。** ホストゾーン1つ分の固定費               |
| RDS                      | $0.11           | **消す。** 静的なサイトにデータベースは要らない        |
| Amplify                  | $0.07〜**1.83** | **移行後に消す。** 9月に増えたのはビルドが多かったため |
| Tax                      | 上の約10%       | 上に連動する                                           |
| S3・DynamoDB・CloudWatch | $0.00           | 無料枠に収まっているが、**中身は残っている**           |

3月から8月までは月 $0.76〜0.80で落ち着いていた。9月はAmplifyの設定を何度も変えたため $2.65に増えた。

**片づけと移行を終えたあとの見込みは月 $0.56 前後**（Route 53 $0.50＋S3 $0.01＋税）。
CloudFrontは毎月1TBまで無料枠があるので、このサイトの通信量では0ドルのまま。

> 金額そのものは小さい。それでも消すのは、**使っていないものが残っていると、
> 何が動いているのか分からなくなる**ため。Terraformで作り直す前がいちばん片づけやすい。

## 1. 消してはいけないもの

先にこれを読む。次の4つは、消すとサイトが止まるか、元に戻せない。

| 消さないもの                         | 理由                                                                                                           |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Amplify のアプリ `d3fj0jchd8ri0z`    | **いま imrg.work を配っている本体。** 新しい構成に切り替えて数日たってから消す                                 |
| Route53 のホストゾーン `imrg.work`   | 消すとドメインの設定が全部消える。作り直しても**ネームサーバーが変わる**ため、ドメイン側の登録もやり直しになる |
| いま使われている証明書               | 棚卸しの「使用中」の数が1以上のものは、CloudFrontかAmplifyが使っている                                         |
| CloudTrail のログ置き場（Phase 0-8） | 記録を残すために作った。残す                                                                                   |

迷ったら消さない。**止めるだけにして数日おく。** 問題が出なければ消す。

## 2. RDS の残りものを消す（月 $0.11）

静的なサイトにデータベースは要らない。それでも毎月かかっているので、何が残っているかを確かめて消す。

$0.11という額から、**動いているインスタンスではない**（動いていれば月10ドル以上になる）。
スナップショットか、インスタンスを消したあとも残っている自動バックアップの可能性が高い。

```bash
# 何が残っているか（全リージョンを見る）
for region in $(aws ec2 describe-regions --profile imrg --query 'Regions[].RegionName' --output text); do
  echo "-- $region --"
  aws rds describe-db-instances --profile imrg --region "$region" \
    --query 'DBInstances[].[DBInstanceIdentifier,DBInstanceClass,DBInstanceStatus]' --output text
  aws rds describe-db-snapshots --profile imrg --region "$region" --snapshot-type manual \
    --query 'DBSnapshots[].[DBSnapshotIdentifier,AllocatedStorage,SnapshotCreateTime]' --output text
  aws rds describe-db-instance-automated-backups --profile imrg --region "$region" \
    --query 'DBInstanceAutomatedBackups[].[DBInstanceIdentifier,AllocatedStorage,Status]' --output text
done
```

見つかったものに応じて消す。

```bash
# スナップショット
aws rds delete-db-snapshot --profile imrg --region <リージョン> \
  --db-snapshot-identifier <名前>

# インスタンスを消したあとに残っている自動バックアップ
aws rds delete-db-instance-automated-backup --profile imrg --region <リージョン> \
  --dbi-resource-id <リソースID>

# まだインスタンスが残っているとき（最後のスナップショットは取らない）
aws rds delete-db-instance --profile imrg --region <リージョン> \
  --db-instance-identifier <名前> --skip-final-snapshot --delete-automated-backups
```

**中身に心当たりがない場合でも、消す前にスナップショットの名前と作成日を控えておく。**
何のために作ったものかを思い出す手がかりになる。

## 3. 金額が $0.00 のものを確かめる

請求に名前が出ているということは、**使った実績がある**。
無料枠に収まっているだけで、中身は残っている。

```bash
# DynamoDB のテーブル（今回の Terraform では使わない。ロックは S3 のロックファイルで行う）
for region in ap-northeast-1 us-east-1; do
  aws dynamodb list-tables --profile imrg --region "$region" --output text
done

# S3 バケットの一覧と大きさ
./terraform/scripts/aws-audit.sh 2>/dev/null | sed -n '/3. S3 バケット/,/4\./p'

# CloudWatch のロググループ（保存期間が None のものはずっと残る）
for region in ap-northeast-1 us-east-1; do
  aws logs describe-log-groups --profile imrg --region "$region" \
    --query 'logGroups[].[logGroupName,retentionInDays,storedBytes]' --output text
done
```

- **DynamoDB のテーブル** … 以前Terraformのロック用に作ったものなら、今回は使わないので消す
- **S3 バケット** … 古い静的ホスティングやログの置き場が残っていることが多い
- **ロググループ** … 消さずに保存期間を決めるのがよい

```bash
# DynamoDB のテーブルを消す
aws dynamodb delete-table --profile imrg --region <リージョン> --table-name <名前>

# S3 は中身を空にしないと消せない。まず中身を見る
aws s3 ls s3://<バケット名>/ --profile imrg --recursive --human-readable --summarize | tail -5
aws s3 rm s3://<バケット名>/ --profile imrg --recursive
aws s3api delete-bucket --profile imrg --bucket <バケット名>

# ロググループは期間を決める
aws logs put-retention-policy --profile imrg --region ap-northeast-1 \
  --log-group-name <名前> --retention-in-days 30
```

版（バージョニング）を有効にしたバケットが消えないときは、コンソールの **バケットを空にする** が早い。

## 4. 使っていない IAM のアクセスキーを消す

費用はかからないが、**漏れると被害が大きい。** 棚卸しの「7」で最終使用が「なし」か
半年以上前のものを見つけたら消す。

```bash
# まず無効にして数日おく（使われていたらエラーが出るので気づける）
aws iam update-access-key --profile imrg --user-name <ユーザー名> \
  --access-key-id <鍵のID> --status Inactive

# 数日たって問題がなければ消す
aws iam delete-access-key --profile imrg --user-name <ユーザー名> --access-key-id <鍵のID>
```

## 5. 使っていない証明書と古い CloudFront

棚卸しの `length(InUseBy)` が `0` の証明書は、どこからも使われていない。
ただし**これから使う `imrg.work` の証明書は消さない**。

```bash
aws acm delete-certificate --profile imrg --region us-east-1 --certificate-arn <ARN>
```

CloudFrontの配信はいきなり消せない。**無効化 → 反映を待つ（15分ほど）→ 削除**の順になる。
コンソールのほうが手順は短い。配信を選んで「無効化」し、状態が `Deployed` に戻ってから「削除」する。

## 6. Amplify を消す（移行が終わってから）

**ここが金額としてはいちばん大きい（9月は $1.83）。**
ただし新しい構成に切り替えて数日、問題が出なかったら行う。

1. Amplifyのコンソールで、アプリ `d3fj0jchd8ri0z` の**ブランチの自動ビルドを止める**
2. 1週間おく
3. アプリを削除する
4. リポジトリーの `amplify.yml` を消す（`docs/TODO.md` の6-6もここで済む）
5. GitHubの設定から、Amplifyが付けたwebhookとアプリの連携を外す

## 7. 片づけたあとに確かめる

```bash
# もう一度棚卸しして、消したものが消えているか
./terraform/scripts/aws-audit.sh > ~/aws-audit-after.txt
diff ~/aws-audit.txt ~/aws-audit-after.txt

# サイトが開くか
curl -sI https://imrg.work/ | head -1
```

翌月の請求で、**RDSの行が消えている**ことを確かめる。
移行まで終われば、Amplifyの行も消えて月 $0.56前後に落ち着く。

## 棚卸しのやり直し

アカウントにあるものを一覧するスクリプトがある。**読むだけで、何ひとつ変えない。**

```bash
cd ~/imrg/imrg-platform
./terraform/scripts/aws-audit.sh > ~/aws-audit.txt
open -R ~/aws-audit.txt
```

出力にはアカウントIDが入るので、リポジトリーには入れずホームディレクトリーに置く。

費用の項目が空になるときは、rootでログインして
**アカウント設定 → IAM ユーザー/ロールによる請求情報へのアクセス** を有効にする。
