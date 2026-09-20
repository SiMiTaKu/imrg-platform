locals {
  tags = {
    Project     = "imrg-platform"
    Environment = "prod"
    ManagedBy   = "terraform"
  }
}

# Terraform の状態ファイルの置き場。ここだけは先に作る必要がある
module "state_backend" {
  source = "../../modules/state_backend"

  bucket_name = "imrg-platform-terraform-state"
  tags        = local.tags
}

# S3 + CloudFront でサイトを配る
module "site" {
  source = "../../modules/static_site"

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }

  site_domain    = var.site_domain
  hosted_zone_id = var.hosted_zone_id
  bucket_name    = "${replace(var.site_domain, ".", "-")}-site"
  # 切り替えの直前まで false にしておき、CloudFront のドメインで確かめてから true にする
  attach_domain = var.attach_domain
  tags          = local.tags
}

# GitHub Actions がサイトを配るための役割
module "deploy_role" {
  source = "../../modules/deploy_role"

  role_name            = "imrg-platform-deploy"
  github_repository    = var.github_repository
  allowed_environments = ["production"]
  bucket_arn           = module.site.bucket_arn
  releases_bucket_arn  = module.site.releases_bucket_arn
  distribution_arn     = module.site.distribution_arn
  create_oidc_provider = var.create_github_oidc_provider
  tags                 = local.tags
}

# 壊れたときに気付けるようにする。CloudFront と証明書のメトリクスは us-east-1 にしか無い
module "monitoring" {
  source = "../../modules/monitoring"

  providers = {
    aws = aws.us_east_1
  }

  name_prefix        = "imrg-work"
  notification_email = var.notification_email
  distribution_id    = module.site.distribution_id
  certificate_arn    = module.site.certificate_arn
  tags               = local.tags
}
