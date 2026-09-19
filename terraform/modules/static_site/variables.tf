variable "site_domain" {
  description = "サイトのドメイン（例: imrg.work）"
  type        = string
}

variable "hosted_zone_id" {
  description = "Route53 のホストゾーン ID"
  type        = string
}

variable "bucket_name" {
  description = "サイトのファイルを置く S3 バケットの名前"
  type        = string
}

variable "price_class" {
  description = <<-EOT
    CloudFront が使うエッジの範囲。
    PriceClass_100 は北米と欧州だけで日本が入らないため、既定は日本を含む PriceClass_200 にする
  EOT
  type        = string
  default     = "PriceClass_200"
}

variable "tags" {
  description = "すべてのリソースに付けるタグ"
  type        = map(string)
  default     = {}
}
