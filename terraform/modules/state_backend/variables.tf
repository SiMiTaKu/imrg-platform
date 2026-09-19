variable "bucket_name" {
  description = "Terraform の状態ファイルを置く S3 バケットの名前"
  type        = string
}

variable "tags" {
  description = "すべてのリソースに付けるタグ"
  type        = map(string)
  default     = {}
}
