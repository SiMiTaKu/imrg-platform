# AWS の片づけ手順

Terraform（Phase 4）で作り直す前に、これまでの作業で残ったものを消す。

2026年9月20日に棚卸しをして、**何が残っているかを確かめた状態**で書いてある。
名前はすべて実際に見つかったもの。上から順に進めれば終わる。所要時間の目安は30分。

---

## 0. 分かったこと

毎月かかっているのは、Route 53（$0.50）とRDSのスナップショット（$0.11）とAmplify（$0.07〜1.83）だけ。
**消してお金が減るのはRDSのスナップショットひとつ**で、残りは費用ゼロのまま放置されている残骸。

| サービス                 | 月額            | どうする                                           |
| ------------------------ | --------------- | -------------------------------------------------- |
| Route 53                 | $0.50           | **残す。** ホストゾーン1つ分の固定費               |
| RDS                      | $0.11           | **消す。** 3年前のチュートリアルのスナップショット |
| Amplify                  | $0.07〜**1.83** | 古いほうは今すぐ消す。今のものは移行後             |
| S3・DynamoDB・CloudWatch | $0.00           | 無料枠に収まっているが、**残骸は残っている**       |

片づけと移行を終えたあとの見込みは**月 $0.56 前後**（Route 53 $0.50＋S3 $0.01＋税）。

残骸の正体は、ほとんどが**2023年から2024年に試したAmplifyのチュートリアル**。
`d1o1ui2gd5pshh` `d295caw51lipy2` `d7q1eopfj7aj0` `src-owner-sandbox` `reacttutorial` といった、
すでに存在しないアプリの名前がログやロールに残っている。

> 金額そのものは小さい。それでも消すのは、**使っていないものが残っていると、
> 何が動いているのか分からなくなる**ため。Terraformで作り直す前がいちばん片づけやすい。

## 1. 消してはいけないもの

| 消さないもの                                                | 理由                                                                      |
| ----------------------------------------------------------- | ------------------------------------------------------------------------- |
| Amplify のアプリ `d3fj0jchd8ri0z`（imrg-platform）          | **いま imrg.work を配っている本体。** 移行して数日たってから消す（手順5） |
| Route53 のホストゾーン `imrg.work`（Z09326151SBEIRMAZRJNN） | 消すとドメインの設定が全部消える。作り直しても**ネームサーバーが変わる**  |
| S3 `aws-cloudtrail-logs-630738285493-8be90f19`              | Phase 0-8 で作った記録の置き場。残す                                      |
| IAM ユーザー `admin`                                        | いま使っているユーザー。`imrg` プロファイルの鍵はこれ                     |

迷ったら消さない。**止めるだけにして数日おく。** 問題が出なければ消す。

## 2. RDS のスナップショットを消す（月 $0.11）

棚卸しで見つかったのはこれ1つ。**動いているデータベースは無い。**

```
rds-mysql-10mintutorial-snapshot   20GB   2023-10-21 作成   ap-northeast-1
```

名前のとおり、AWSの「10分チュートリアル」をやったときの残骸。3年近く放置されている。
毎月かかる $0.11はこれ。

```bash
aws rds delete-db-snapshot --profile imrg --region ap-northeast-1 \
  --db-snapshot-identifier rds-mysql-10mintutorial-snapshot
```

`rds-monitoring-role` というIAMロールも同じ時期のもの。スナップショットを消したあとに消してよい。

## 3. 古い Amplify のアプリをまとめて消す

`d2e38588w4qs62`（**svelte-kit-to-amplify**、2023年6月作成）が残っている。
今のサイトとは無関係の試作。

**バラバラに消さず、Amplifyのアプリから消す。** 下にあるものは、
CloudFormationのスタックとしてつながっているため、アプリを消せば連鎖して片づく。

```
Amplify アプリ d2e38588w4qs62
└─ CloudFormation スタック amplify-d2e38588w4qs62-develop-branch-b1d7cb87da
   ├─ auth179371D7        → Cognito ユーザープール ap-northeast-1_2EkeZCzet
   ├─ data7552DF31        → AppSync amplifyData
   │                        DynamoDB Todo-jbmunnw2wvhgbc35xw6opya2ca-NONE
   ├─ AmplifyTableManager → Lambda 6個
   └─ TodoNestedStack     → IAM ロール TodoIAMRolecfd440-...
```

```bash
# 1. アプリを消す（つながっているスタックも消える）
aws amplify delete-app --profile imrg --region ap-northeast-1 --app-id d2e38588w4qs62

# 2. 5分ほどおいて、スタックが消えたか確かめる
aws cloudformation describe-stacks --profile imrg --region ap-northeast-1 \
  --query 'Stacks[].[StackName,StackStatus]' --output text
```

スタックが `DELETE_FAILED` で残ったら、中身を手で消してからスタックを消す。
S3バケット `amplify-d2e38588w4qs62-de-amplifydataamplifycodege-mludx9javuhp` が
空でないと失敗することがある。

## 4. つながりが切れて残ったもの

アプリを消しても、**作ったアプリ自体がもう無いもの**は残る。棚卸しで見つかったのは次の3つ。

### すでに無いアプリの Cognito

```bash
# amplify_backend_manager_d1o1ui2gd5pshh。アプリ d1o1ui2gd5pshh はもう存在しない
aws cognito-idp delete-user-pool --profile imrg --region ap-northeast-1 \
  --user-pool-id ap-northeast-1_HwYeR5W0G
```

これに紐づく `amplify-login-*` のLambda 4個と、`ap-northeast-1_HwYeR5W0G-*` のIAMロール3個も
同じ時期のもの。

### 存在しないアプリのログ 117個（合計 1.13MB）

`d1o1ui2gd5pshh` `d295caw51lipy2` `d7q1eopfj7aj0` `src-owner-sandbox` `reacttutorial` など、
消えたアプリのログがすべて**保存期間なし**で残っている。
5GBまで無料なので費用はかからないが、一覧が読めなくなるので消す。

```bash
# まず何が消えるかを見る（lambda と amplify のものだけに絞る）
aws logs describe-log-groups --profile imrg --region ap-northeast-1 \
  --query 'logGroups[].logGroupName' --output text | tr '\t' '\n' \
  | grep -E '^/aws/(lambda/amplify-|amplify/)'

# よければ消す
aws logs describe-log-groups --profile imrg --region ap-northeast-1 \
  --query 'logGroups[].logGroupName' --output text | tr '\t' '\n' \
  | grep -E '^/aws/(lambda/amplify-|amplify/)' \
  | while read name; do
      aws logs delete-log-group --profile imrg --region ap-northeast-1 --log-group-name "$name"
    done
```

`/aws/lambda/hello-world-python` と `/aws/lambda/my-s3-function` も
2023年3月のチュートリアルの残骸。同じく消してよい。

### CDK の置き場

`CDKToolkit` のスタック（ap-northeast-1とus-east-1）と、そこから作られた
S3 `cdk-hnb659fds-assets-630738285493-ap-northeast-1`（26MB）、
ECR `cdk-hnb659fds-container-assets-*`、`cdk-hnb659fds-*` のIAMロール10個。

これはAmplify Gen2が裏で使っていたもの。**手順3を終えたあと**、CDKを自分で使う予定が無ければ消す。

```bash
# 先に S3 を空にする（空でないとスタックが消せない）
aws s3 rm s3://cdk-hnb659fds-assets-630738285493-ap-northeast-1/ --profile imrg --recursive

aws cloudformation delete-stack --profile imrg --region ap-northeast-1 --stack-name CDKToolkit
aws cloudformation delete-stack --profile imrg --region us-east-1 --stack-name CDKToolkit
```

## 5. 使っていない IAM のアクセスキーを消す

費用はかからないが、**漏れると被害が大きい。**

```
takumi-shimizu-iam-amplify   鍵 AKIAZFWXOOO2ZXU3CC6C   最終使用 2025-07-30
```

1年以上使われていない。旧Amplify用に作ったもの。

```bash
# まず無効にして数日おく（使われていたらエラーが出るので気づける）
aws iam update-access-key --profile imrg --user-name takumi-shimizu-iam-amplify \
  --access-key-id AKIAZFWXOOO2ZXU3CC6C --status Inactive

# 数日たって問題がなければ、鍵とユーザーを消す
aws iam delete-access-key --profile imrg --user-name takumi-shimizu-iam-amplify \
  --access-key-id AKIAZFWXOOO2ZXU3CC6C
aws iam delete-user --profile imrg --user-name takumi-shimizu-iam-amplify
```

ユーザーを消すとき、ポリシーが付いていると失敗する。
`aws iam list-attached-user-policies --user-name ...` で確かめて、先に切り離す。

## 6. Amplify（現役）を消す（移行が終わってから）

**金額としてはここがいちばん大きい（9月は $1.83）。**
ただし新しい構成に切り替えて数日、問題が出なかったら行う。

1. Amplifyのコンソールで、アプリ `d3fj0jchd8ri0z` の**ブランチの自動ビルドを止める**
2. 1週間おく
3. アプリを削除する
4. リポジトリーの `amplify.yml` を消す（`docs/TODO.md` の6-6もここで済む）
5. GitHubの設定から、Amplifyが付けたwebhookとアプリの連携を外す

## 7. 片づけたあとに確かめる

```bash
./terraform/scripts/aws-audit.sh > ~/aws-audit-after.txt
diff ~/aws-audit.txt ~/aws-audit-after.txt

curl -sI https://imrg.work/ | head -1
```

翌月の請求で、**RDSの行が消えている**ことを確かめる。
移行まで終われば、Amplifyの行も消えて月 $0.56前後に落ち着く。

## 移行にあたって分かったこと

棚卸しで、**ACMに証明書が1つも無く、CloudFrontの配信も無い**ことが分かった。
Amplifyがドメインの証明書を内部で持っているため、外からは見えない。

つまりTerraformでは、`imrg.work` と `stg.imrg.work` の証明書を**新しく作ることになる**。
既存のものを取り込む必要はない。DNSでの検証に数分かかる。

## 棚卸しのやり直し

```bash
cd ~/imrg/imrg-platform
./terraform/scripts/aws-audit.sh > ~/aws-audit.txt
open -R ~/aws-audit.txt
```

**読むだけで、何ひとつ変えない。** 1分ほどで終わる（進み具合は画面に出る）。
出力にはアカウントIDが入るので、リポジトリーには入れずホームディレクトリーに置く。

費用の項目が空になるときは、rootでログインして
**アカウント設定 → IAM ユーザー/ロールによる請求情報へのアクセス** を有効にする。
