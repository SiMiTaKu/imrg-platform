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

**ユーザープールを消しても、トリガーのLambdaとIDプールは道連れにならない。** 3つとも消す。

```bash
# 1. ユーザープール（amplify_backend_manager_d1o1ui2gd5pshh。アプリ自体はもう無い）
aws cognito-idp delete-user-pool --profile imrg --region ap-northeast-1 \
  --user-pool-id ap-northeast-1_HwYeR5W0G

# 2. IDプール（ユーザープールとは別物。一覧の出しかたも違う）
aws cognito-identity list-identity-pools --profile imrg --region ap-northeast-1 \
  --max-results 20 --query 'IdentityPools[].[IdentityPoolId,IdentityPoolName]' --output text
aws cognito-identity delete-identity-pool --profile imrg --region ap-northeast-1 \
  --identity-pool-id '<上で出たID>'

# 3. トリガーだったLambda 4個
for fn in custom-message create-auth-challenge verify-auth-challenge define-auth-challenge; do
  aws lambda delete-function --profile imrg --region ap-northeast-1 \
    --function-name "amplify-login-$fn-0e598321"
done
```

`ap-northeast-1_HwYeR5W0G-*` のIAMロール3個も同じ時期のもの。次で消す。

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

### 使われていない IAM のロールとポリシー

アプリを消してもロールは残る。棚卸しで残っていたのは次のとおり。

| ロール                              | 由来                              |
| ----------------------------------- | --------------------------------- |
| `amplify-login-lambda-0e598321`     | 上のCognitoに紐づくLambda用       |
| `ap-northeast-1_HwYeR5W0G-*`（3個） | 同じく上のCognito用               |
| `hello-world-python-role-wwly8c3u`  | 2023年3月のチュートリアル         |
| `my-s3-function-role`               | 同上                              |
| `cdk-hnb659fds-*`（10個）           | 次の「CDKの置き場」で一緒に消える |

**ポリシーが付いていると消せない。** 外してから消す。

```bash
for role in amplify-login-lambda-0e598321 ap-northeast-1_HwYeR5W0G-authRole \
            ap-northeast-1_HwYeR5W0G_Full-access ap-northeast-1_HwYeR5W0G_Manage-only \
            hello-world-python-role-wwly8c3u my-s3-function-role; do
  for arn in $(aws iam list-attached-role-policies --profile imrg --role-name "$role" \
    --query 'AttachedPolicies[].PolicyArn' --output text); do
    aws iam detach-role-policy --profile imrg --role-name "$role" --policy-arn "$arn"
  done
  for name in $(aws iam list-role-policies --profile imrg --role-name "$role" \
    --query 'PolicyNames' --output text); do
    aws iam delete-role-policy --profile imrg --role-name "$role" --policy-name "$name"
  done
  aws iam delete-role --profile imrg --role-name "$role"
done
```

ロールを消したら、付き先がなくなったポリシーを消す。
**ARNは名前から組み立てず、一覧から取る。** Lambdaのコンソールが作ったものは
`policy/` ではなく `policy/service-role/` の下にあるため、組み立てると失敗する。

```bash
for arn in $(aws iam list-policies --profile imrg --scope Local \
  --query 'Policies[?starts_with(PolicyName, `AWSLambdaBasicExecutionRole`) && AttachmentCount==`0`].Arn' \
  --output text); do
  aws iam delete-policy --profile imrg --policy-arn "$arn"
done
```

**`imrg-site-admin` は今使っているものなので残す。**

### CDK の置き場

`CDKToolkit` のスタック（ap-northeast-1とus-east-1）と、そこから作られた
S3 `cdk-hnb659fds-assets-630738285493-ap-northeast-1`（26MB）、
ECR `cdk-hnb659fds-container-assets-*`、`cdk-hnb659fds-*` のIAMロール10個。

これはAmplify Gen2が裏で使っていたもの。**手順3を終えたあと**、CDKを自分で使う予定が無ければ消す。

```bash
aws cloudformation delete-stack --profile imrg --region ap-northeast-1 --stack-name CDKToolkit
aws cloudformation delete-stack --profile imrg --region us-east-1 --stack-name CDKToolkit
```

**S3バケットはスタックを消しても残る**（消さない設定で作られている）。
しかも版（バージョニング）が有効なので、`aws s3 rm --recursive` では中身が消えない。
「オブジェクト0件」に見えても、版と削除マーカーが残っていると削除できない。

いちばん楽なのは**コンソールの「バケットを空にする」→「削除」**。
コマンドでやるなら次のようにする。

```bash
bucket=cdk-hnb659fds-assets-630738285493-ap-northeast-1

for round in 1 2 3 4 5; do
  aws s3api list-object-versions --profile imrg --bucket "$bucket" --max-keys 1000 --output json > /tmp/versions.json
  count=$(python3 -c '
import json
data = json.load(open("/tmp/versions.json"))
items = [{"Key": o["Key"], "VersionId": o["VersionId"]}
         for key in ("Versions", "DeleteMarkers")
         for o in data.get(key) or []]
json.dump({"Objects": items[:1000], "Quiet": True}, open("/tmp/delete.json", "w"))
print(len(items))
')
  echo "$round 回目: 残り $count 件"
  [ "$count" = "0" ] && break
  aws s3api delete-objects --profile imrg --bucket "$bucket" --delete file:///tmp/delete.json > /dev/null
done

aws s3api delete-bucket --profile imrg --region ap-northeast-1 --bucket "$bucket"
```

> zshでは `--query "{Objects: $key[]...}"` のように**ダブルクォートの中に `[]` を書くと、
> 配列の添字と解釈されて壊れる**（`zsh: invalid subscript`）。上のようにpythonへ渡すのが安全。

## 5. 使っていない IAM のアクセスキーを消す

費用はかからないが、**これがいちばん危ない。**

見つかったのは `takumi-shimizu-iam-amplify`（鍵 `AKIAZFWXOOO2ZXU3CC6C`、最終使用2025-07-30）。
旧Amplify用に作ったもので、1年以上使われていない。
それなのに **`AdministratorAccess` が付いたまま、鍵が有効だった。**
漏れればアカウントを丸ごと操作される。

### すぐ消すか、無効にして様子を見るか

「無効にして数日おく」のは、**まだ何かが使っている恐れがある**ときの用心。
次の2つが当てはまるなら、待たずに消してよい。

- その鍵を使っていた相手（この場合は旧Amplify）を、もう消してある
- 最終使用が古い（数か月以上前）

どちらか怪しいなら、先に無効化する。まだ使われていればエラーが出るので気づける。

```bash
aws iam update-access-key --profile imrg --user-name <ユーザー名> \
  --access-key-id <鍵のID> --status Inactive
```

### 消す

ユーザーは、付いているものを全部外さないと消せない。

```bash
user=takumi-shimizu-iam-amplify

# 何が付いているかを見る
aws iam list-attached-user-policies --profile imrg --user-name $user --output text
aws iam list-user-policies --profile imrg --user-name $user --output text
aws iam list-groups-for-user --profile imrg --user-name $user --output text
aws iam list-mfa-devices --profile imrg --user-name $user --output text
aws iam get-login-profile --profile imrg --user-name $user --output text

# 外して消す（無いものは飛ばしてよい）
aws iam detach-user-policy --profile imrg --user-name $user \
  --policy-arn arn:aws:iam::aws:policy/AdministratorAccess
aws iam delete-access-key --profile imrg --user-name $user --access-key-id <鍵のID>
aws iam delete-user --profile imrg --user-name $user
```

## 6. Amplify（現役）を消す（移行が終わってから）

**金額としてはここがいちばん大きい（9月は $1.83）。**
ただし新しい構成に切り替えて数日、問題が出なかったら行う。

1. Amplifyのコンソールで、アプリ `d3fj0jchd8ri0z` の**ブランチの自動ビルドを止める**
2. 1週間おく
3. アプリを削除する
4. リポジトリーの `amplify.yml` を消す（`docs/TODO.md` の6-6もここで済む）
5. GitHubの設定から、Amplifyが付けたwebhookとアプリの連携を外す
6. 残るAmplify用のIAMロールとポリシーを消す

最後の6つは、`amplify.amazonaws.com` が引き受けるロール。

- `amplifyconsole-backend-role`
- `AmplifyConsoleServiceRole-AmplifyRole`
- `AmplifySSRLoggingRole-*`（3つ）と、対になる `AmplifySSRLoggingPolicy-*`（3つ）

いまのアプリを調べると `iamServiceRoleArn` は `None`、`platform` は `WEB`（静的なサイト）なので、
**実際にはどれも使われていない。** それでも移行が終わるまでは残しておく。
Amplifyの削除とまとめて片づけるほうが、取り違えが起きない。

```bash
# 使っていないことの確かめ方
aws amplify get-app --profile imrg --region ap-northeast-1 --app-id d3fj0jchd8ri0z \
  --query 'app.[iamServiceRoleArn,platform]' --output text
```

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
