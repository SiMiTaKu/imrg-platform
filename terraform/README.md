# imrg.work のインフラ（Terraform）

サイトの配信（S3 + CloudFront）と、GitHub Actions から配るための権限を Terraform で管理する。

## 全体像

```
Route53（imrg.work / www.imrg.work）
  └─ CloudFront（証明書は ACM／us-east-1）
       ├─ ビューワーリクエスト関数  www を外す・末尾スラッシュを付ける・index.html を返す
       └─ S3（非公開。OAC 経由でのみ読める）
GitHub Actions（main への push でビルド）→ S3 へ同期 → CloudFront のキャッシュを捨てる
```

- リージョンは **ap-northeast-1（東京）**。CloudFront の証明書だけ **us-east-1**（そこにしか置けない）
- 環境は **prod だけ**。PR プレビューと develop 環境は費用を抑えるため作らない
- 認証情報は Terraform にも GitHub にも置かない。GitHub Actions は **OpenID Connect** で一時的に権限を借りる

## なぜ Amplify から移したか

|              | Amplify                                    | S3 + CloudFront                                    |
| ------------ | ------------------------------------------ | -------------------------------------------------- |
| ビルド       | 有料（約 $0.01/分）                        | GitHub Actions（無料枠の範囲）                     |
| 配信         | $0.15/GB                                   | $0.085/GB＋**毎月 1TB の恒久無料枠**               |
| ルーティング | コンソールで管理（コードと二重管理だった） | CloudFront Functions でコード管理                  |
| 状態のロック | ―                                          | S3 のロックファイル（DynamoDB を使わないので無料） |

## ディレクトリ

```
terraform/
├── .terraform-version   tfenv が読む版（1.15.9）
├── modules/
│   ├── state_backend/   Terraform の状態ファイルを置く S3
│   ├── static_site/     S3・CloudFront・関数・証明書・DNS レコード
│   └── deploy_role/     GitHub Actions が引き受ける IAM の役割（OpenID Connect）
└── envs/
    └── prod/            本番の実行単位
```

## 初回の手順

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

- プロファイルは `imrg`（`aws configure --profile imrg`）。`variables.tf` の既定で読む
- 証明書の検証に DNS を使うため、`terraform apply` は Route53 の反映を待って数分かかる

## 配り方

`main` への push で `.github/workflows/deploy.yml` が動く。GitHub の Secrets に次の3つを入れる。
値は `terraform output` で出る。

| 名前                             | 中身                         |
| -------------------------------- | ---------------------------- |
| `AWS_DEPLOY_ROLE_ARN`            | `deploy_role_arn`            |
| `AWS_SITE_BUCKET`                | `site_bucket_name`           |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | `cloudfront_distribution_id` |

ワークフローは、ハッシュ付きの資産（`_app/immutable`）を先に置いてから HTML を置き、
最後に `/_app/version.json` が新しいビルドになるまで確かめる。

## Amplify からの切り替え

1. `terraform apply` で作る（この時点ではまだ Route53 は Amplify を向いている）
2. `terraform output cloudfront_domain_name` のドメインを直接開き、表示・転送・404 を確かめる
3. Route53 のレコードが CloudFront を指すように切り替える（`module.site` の `aws_route53_record.site`）
4. 数日おいて問題がなければ Amplify のアプリ（`d3fj0jchd8ri0z`）を消し、`amplify.yml` を削る

### Amplify の設定のうち、引き継いだもの・落としたもの

| Amplify の設定                              | 移行先                                                                                 |
| ------------------------------------------- | -------------------------------------------------------------------------------------- |
| `customHeaders`（HSTS ほか5つ）             | CloudFront のレスポンスヘッダーポリシー                                                |
| `/_app/immutable/**/*` の長期キャッシュ     | 配信時に `Cache-Control` を付けて S3 へ置く                                            |
| 既定の `no-cache, no-store`                 | `public, max-age=0, must-revalidate`＋配信ごとにキャッシュを捨てる方式に変更           |
| `/oshimitsu/content_type/<*>` の書き換え4件 | **落とした。** 転送先の `content_type/index.html` はビルド結果に無く、動いていなかった |
