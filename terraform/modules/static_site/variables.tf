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

variable "enable_www" {
  description = "www 付きの名前も受け取り、本体へ転送するか。ステージングでは要らない"
  type        = bool
  default     = true
}

variable "noindex" {
  description = "検索に載せないか。ステージングは true にして、本番と中身が重なるのを避ける"
  type        = bool
  default     = false
}

variable "basic_auth" {
  description = <<-EOT
    見る人を合言葉で絞るときに設定する。null なら誰でも見られる。
    CloudFront の関数に埋め込むため、AWS の画面からは中身が読める。本番には使わない
  EOT
  type = object({
    username = string
    password = string
  })
  default   = null
  sensitive = true
}

variable "create_dns_records" {
  description = <<-EOT
    ドメインを CloudFront へ向けるレコードを作るか。
    false にすると、配信の一式だけを先に作って CloudFront のドメインで確かめられる。
    確かめてから true にすると、そこで切り替わる
  EOT
  type        = bool
  default     = true
}

variable "price_class" {
  description = <<-EOT
    CloudFront が使うエッジの範囲。
    PriceClass_100 は北米と欧州だけで日本が入らないため、既定は日本を含む PriceClass_200 にする
  EOT
  type        = string
  default     = "PriceClass_200"
}

variable "release_retention_days" {
  description = "配ったビルドを取っておく日数。この日数を過ぎたものは戻せなくなる"
  type        = number
  default     = 90
}

variable "tags" {
  description = "すべてのリソースに付けるタグ"
  type        = map(string)
  default     = {}
}
