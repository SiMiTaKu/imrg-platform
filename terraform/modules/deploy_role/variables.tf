variable "role_name" {
  description = "GitHub Actions が引き受ける役割の名前"
  type        = string
}

variable "github_repository" {
  description = "この役割を使えるリポジトリ（owner/repo）"
  type        = string
}

variable "allowed_environments" {
  description = <<-EOT
    この役割を使える GitHub の環境の名前（例: production）。

    ワークフローの job が environment を指定していると、OpenID Connect の sub は
    ブランチ名ではなく `repo:<owner>/<repo>:environment:<名前>` になる。
    環境ごとに許す相手を分けられるので、ブランチで絞るより確かめやすい
  EOT
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
