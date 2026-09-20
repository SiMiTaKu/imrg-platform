variable "role_name" {
  description = "GitHub Actions が引き受ける役割の名前"
  type        = string
}

variable "github_repository" {
  description = "この役割を使えるリポジトリ（owner/repo）"
  type        = string
}

variable "allowed_refs" {
  description = "この役割を使えるブランチやタグ（例: refs/heads/main）"
  type        = list(string)
}

variable "bucket_arn" {
  description = "書き込みを許す S3 バケットの ARN"
  type        = string
}

variable "releases_bucket_arn" {
  description = "配ったビルドを取っておく S3 バケットの ARN"
  type        = string
}

variable "distribution_arn" {
  description = "キャッシュの破棄を許す CloudFront の配信の ARN"
  type        = string
}

variable "create_oidc_provider" {
  description = "GitHub の OpenID Connect の登録をこのモジュールで作るか。すでにあるなら false"
  type        = bool
  default     = true
}

variable "tags" {
  description = "すべてのリソースに付けるタグ"
  type        = map(string)
  default     = {}
}
