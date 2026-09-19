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
