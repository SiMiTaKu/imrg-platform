output "bucket_name" {
  description = "状態ファイルを置く S3 バケットの名前"
  value       = aws_s3_bucket.state.bucket
}
