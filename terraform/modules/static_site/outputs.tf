output "bucket_name" {
  description = "サイトのファイルを置く S3 バケットの名前"
  value       = aws_s3_bucket.site.bucket
}

output "bucket_arn" {
  description = "同バケットの ARN"
  value       = aws_s3_bucket.site.arn
}

output "distribution_id" {
  description = "CloudFront の配信 ID（キャッシュの破棄に使う）"
  value       = aws_cloudfront_distribution.site.id
}

output "distribution_arn" {
  description = "CloudFront の配信の ARN"
  value       = aws_cloudfront_distribution.site.arn
}

output "distribution_domain_name" {
  description = "CloudFront が配る既定のドメイン"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "releases_bucket_name" {
  description = "配ったビルドを取っておく S3 バケットの名前"
  value       = aws_s3_bucket.releases.bucket
}

output "releases_bucket_arn" {
  description = "同バケットの ARN"
  value       = aws_s3_bucket.releases.arn
}

output "certificate_arn" {
  description = "CloudFront が使う証明書の ARN"
  value       = aws_acm_certificate.site.arn
}
