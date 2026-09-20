# imrg.work のインフラ（Terraform）

サイトの配信（S3 + CloudFront）と、GitHub Actionsから配るための権限をTerraformで管理する。

## 全体像

```
Route53（imrg.work / www.imrg.work / stg.imrg.work）
  └─ CloudFront（証明書は ACM／us-east-1）
       ├─ ビューワーリクエスト関数  合言葉・www を外す・末尾スラッシュを付ける・index.html を返す
       └─ S3（非公開。OAC 経由でのみ読める）
GitHub Actions（push でビルド）→ S3 へ同期 → CloudFront のキャッシュを捨てる
```

- リージョンは **ap-northeast-1（東京）**。CloudFrontの証明書だけ **us-east-1**（そこにしか置けない）
- 長く使える認証情報はどこにも置かない。GitHub Actionsは **OpenID Connect** で一時的に権限を借りる

## 2つの環境

PRごとのプレビューは作らない（PRの数だけ増えて管理が増える）。
代わりに、**本番と同じ作りのステージングを1つだけ**置く。

|                  | 本番（prod）                 | ステージング（stg）                 |
| ---------------- | ---------------------------- | ----------------------------------- |
| URL              | `https://imrg.work/`         | `https://stg.imrg.work/`            |
| 配るきっかけ     | `main` への push             | `develop` への push＋手で選んで実行 |
| 見られる人       | だれでも                     | 合言葉を知っている人だけ            |
| 検索             | 載る                         | `X-Robots-Tag: noindex` で載せない  |
| `www`            | 本体へ転送する               | 使わない                            |
| エッジの範囲     | PriceClass_200（日本を含む） | PriceClass_100（北米と欧州）        |
| ビルドの取り置き | 90日                         | しない                              |
| 監視・アラート   | あり                         | なし                                |

ステージングを足しても、かかるお金はほぼ変わらない。S3が88MBで月数円、
CloudFrontは見る人が自分たちだけなので無料枠（毎月1TB）に収まる。

検索に載せない指定は、**本番と同じ中身が別のURLで見つかると本番の順位が下がる**のを防ぐため。
合言葉（Basic認証）と合わせて二重にしている。

### 手で選んで配る

GitHubの **Actions → Deploy (staging) → Run workflow** で、配りたいブランチを選ぶ。
コマンドからでもよい。

```bash
gh workflow run deploy-staging.yml --ref feature/なにか
```

## なぜ Amplify から移したか

|              | Amplify                                    | S3 + CloudFront                                    |
| ------------ | ------------------------------------------ | -------------------------------------------------- |
| ビルド       | 有料（約 $0.01/分）                        | GitHub Actions（無料枠の範囲）                     |
| 配信         | $0.15/GB                                   | $0.085/GB＋**毎月 1TB の恒久無料枠**               |
| ルーティング | コンソールで管理（コードと二重管理だった） | CloudFront Functions でコード管理                  |
| 状態のロック | ―                                          | S3 のロックファイル（DynamoDB を使わないので無料） |

## ディレクトリー

```
terraform/
├── .terraform-version   tfenv が読む版（1.15.9）
├── modules/
│   ├── state_backend/   Terraform の状態ファイルを置く S3
│   ├── static_site/     S3・CloudFront・関数・証明書・DNS レコード・リリースの保管庫
│   ├── monitoring/      通知先（SNS）と CloudWatch のアラーム
│   └── deploy_role/     GitHub Actions が引き受ける IAM の役割（OpenID Connect）
├── scripts/
│   └── aws-audit.sh     アカウントにあるものを一覧する（読むだけ）
└── envs/
    ├── prod/            本番の実行単位（状態ファイルの置き場もここが作る）
    └── stg/             ステージングの実行単位
```

## 初回の手順

作る前に、これまでの作業で残ったものを片づける。手順は [docs/aws-cleanup.md](../docs/aws-cleanup.md)。

```bash
cd terraform/envs/prod
cp terraform.tfvars.example terraform.tfvars   # ホストゾーン ID を書く

# 1. 状態ファイルの置き場を作る
#    versions.tf の backend "s3" ブロックを一時的にコメントにしてから実行する
terraform init
terraform apply -target=module.state_backend

# 2. backend のコメントを戻し、状態を S3 へ移す
terraform init -migrate-state

# 3. 残りを作る
terraform apply
```

続けてステージングを作る。**本番を先に作ること**（状態ファイルの置き場と、
GitHubのOpenID Connectの登録は本番側が作り、ステージングはそれを使う）。

```bash
cd ../stg
cp terraform.tfvars.example terraform.tfvars   # ホストゾーン ID と合言葉を書く
terraform init
terraform apply
```

- プロファイルは `imrg`（`aws configure --profile imrg`）。`variables.tf` の既定で読む
- 証明書の検証にDNSを使うため、`terraform apply` はRoute53の反映を待って数分かかる

## 配り方

配る手順は2つの環境で共通。[\_deploy.yml](../.github/workflows/_deploy.yml) に1つだけ書いてある。
`deploy.yml`（本番）と `deploy-staging.yml`（ステージング）は、配り先を決めて呼ぶだけ。

ハッシュ付きの資産（`_app/immutable`）を先に置いてからHTMLを置き、キャッシュを捨て、
最後に `/_app/version.json` が新しいビルドになるまで確かめる。

### GitHub の設定

**Settings → Environments** に `production` と `staging` を作り、それぞれに同じ名前で
別の値を入れる。値は各環境で `terraform output` を実行すると出る。

| 名前                             | 中身                         |
| -------------------------------- | ---------------------------- |
| `AWS_DEPLOY_ROLE_ARN`            | `deploy_role_arn`            |
| `AWS_SITE_BUCKET`                | `site_bucket_name`           |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | `cloudfront_distribution_id` |
| `AWS_RELEASES_BUCKET`            | `releases_bucket_name`       |

`staging` にはもう1つ、配り終えたあとの確認で使う合言葉を入れる。

| 名前              | 中身                                         |
| ----------------- | -------------------------------------------- |
| `SITE_BASIC_AUTH` | `<利用者名>:<合言葉>`（tfvars に書いたもの） |

`production` には、**必要なら承認者（Required reviewers）を設定する**。
設定すると本番へ配る前に手で承認する一手間が入る。

## 戻し方（ロールバック）

配ったビルドは、そのまま `<バケット>-releases` の `builds/<コミット>.tar.gz` に取ってある（90日）。
**作り直さずに、そのとき配ったものをそのまま戻せる。**

```bash
# 1. いま何が公開されているかを見る
aws s3 cp s3://imrg-work-site-releases/current.txt - --profile imrg

# 2. 戻せる版の一覧（新しい順）
aws s3 ls s3://imrg-work-site-releases/builds/ --profile imrg | sort -r | head

# 3. 戻す。GitHub の Actions → Deploy → Run workflow で、
#    release に戻したいコミットを入れる（コマンドからでもよい）
gh workflow run deploy.yml -f release=<コミット>
```

1〜2分で戻る。作り直さないので、依存の更新で中身が変わってしまう心配がない。

戻したあとは、原因を直した変更を `main` へ入れて、ふつうに配り直す。
`main` を巻き戻す必要はない。`revert` のコミットを積むほうが、あとから履歴を追える。

| 困りごと                        | やること                                                                |
| ------------------------------- | ----------------------------------------------------------------------- |
| 配った内容がおかしい            | 上の手順で前のコミットへ戻す                                            |
| ファイルを1つだけ壊した・消した | サイトのバケットは版を取ってある（30日）。S3 の画面から前の版を戻す     |
| 90日より前の版に戻したい        | そのコミットを `gh workflow run deploy.yml`（`release` なし）で作り直す |
| 設定（CloudFront など）を壊した | `git revert` して `terraform apply`                                     |

## 監視

| 見張るもの                                  | 仕組み                                                                    | 知らせ先      |
| ------------------------------------------- | ------------------------------------------------------------------------- | ------------- |
| サイトが開くか・転送・404・証明書の残り日数 | GitHub Actions（30分ごと。[uptime.yml](../.github/workflows/uptime.yml)） | GitHub の通知 |
| CloudFront の 5xx（1%超が10分続く）         | CloudWatch アラーム                                                       | メール（SNS） |
| CloudFront の 4xx（25%超が15分続く）        | CloudWatch アラーム                                                       | メール（SNS） |
| 証明書の残り日数（20日を切る）              | CloudWatch アラーム                                                       | メール（SNS） |
| 使いすぎ・不審な増え方                      | 予算のアラートとコスト異常検知（Phase 0 で設定済み）                      | メール        |

- CloudWatchのアラームは10個まで無料枠の範囲。3個なので費用はかからない
- `terraform apply` のあと、SNSから確認のメールが届く。**本文のリンクを開いて承認するまで通知は来ない**
- 死活監視をお金をかけずに行うため、Route53のヘルスチェック（$0.50/月）ではなくGitHub Actionsを使っている

## Amplify からの切り替え

1. `terraform apply` で作る（この時点ではまだRoute53はAmplifyを向いている）
2. `terraform output cloudfront_domain_name` のドメインを直接開き、表示・転送・404を確かめる
3. Route53のレコードがCloudFrontを指すように切り替える（`module.site` の `aws_route53_record.site`）
4. 数日おいて問題がなければAmplifyのアプリ（`d3fj0jchd8ri0z`）を消し、`amplify.yml` を削る

### Amplify の設定のうち、引き継いだもの・落としたもの

| Amplify の設定                              | 移行先                                                                                 |
| ------------------------------------------- | -------------------------------------------------------------------------------------- |
| `customHeaders`（HSTS ほか5つ）             | CloudFront のレスポンスヘッダーポリシー                                                |
| `/_app/immutable/**/*` の長期キャッシュ     | 配信時に `Cache-Control` を付けて S3 へ置く                                            |
| 既定の `no-cache, no-store`                 | `public, max-age=0, must-revalidate`＋配信ごとにキャッシュを捨てる方式に変更           |
| `/oshimitsu/content_type/<*>` の書き換え4件 | **落とした。** 転送先の `content_type/index.html` はビルド結果に無く、動いていなかった |
