output "site_bucket_name" {
  description = "サイトのファイルを置く S3 バケットの名前"
  value       = module.site.bucket_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront の配信 ID"
  value       = module.site.distribution_id
}

output "cloudfront_domain_name" {
  description = "CloudFront が配る既定のドメイン。Route53 を切り替える前の動作確認に使う"
  value       = module.site.distribution_domain_name
}

output "deploy_role_arn" {
  description = "GitHub Actions に設定する役割の ARN"
  value       = module.deploy_role.role_arn
}

output "releases_bucket_name" {
  description = "配ったビルドを取っておく S3 バケットの名前"
  value       = module.site.releases_bucket_name
}
