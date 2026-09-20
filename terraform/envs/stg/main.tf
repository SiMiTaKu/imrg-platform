locals {
  tags = {
    Project     = "imrg-platform"
    Environment = "stg"
    ManagedBy   = "terraform"
  }
}

# 本番へ入れる前に確かめるための場所。
# 検索には載せず、合言葉で見る人を絞る。www も監視も要らない
module "site" {
  source = "../../modules/static_site"

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }

  site_domain    = var.site_domain
  hosted_zone_id = var.hosted_zone_id
  bucket_name    = "${replace(var.site_domain, ".", "-")}-site"
  enable_www     = false
  noindex        = true
  basic_auth     = var.basic_auth
  # 見るのは開発の間だけなので、いちばん安い範囲で配る
  price_class = "PriceClass_100"
  # 確かめ終わったものを取っておく必要は無いので、短くする
  release_retention_days = 14
  tags                   = local.tags
}

# GitHub Actions がステージングへ配るための役割。
# 本番と違い、どのブランチからでも配れる（確かめるための場所なので）
module "deploy_role" {
  source = "../../modules/deploy_role"

  role_name           = "imrg-platform-deploy-stg"
  github_repository   = var.github_repository
  allowed_refs        = ["refs/heads/*"]
  bucket_arn          = module.site.bucket_arn
  releases_bucket_arn = module.site.releases_bucket_arn
  distribution_arn    = module.site.distribution_arn
  # OpenID Connect の登録はアカウントに1つだけ。prod 側で作ったものを使う
  create_oidc_provider = false
  tags                 = local.tags
}
