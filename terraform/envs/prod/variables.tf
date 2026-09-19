variable "region" {
  description = "主に使うリージョン"
  type        = string
  default     = "ap-northeast-1"
}

variable "profile" {
  description = "使う AWS の資格情報のプロファイル名"
  type        = string
  default     = "imrg"
}

variable "site_domain" {
  description = "サイトのドメイン"
  type        = string
  default     = "imrg.work"
}

variable "hosted_zone_id" {
  description = "Route53 のホストゾーン ID"
  type        = string
}

variable "github_repository" {
  description = "配信を行うリポジトリ（owner/repo）"
  type        = string
  default     = "SiMiTaKu/imrg-platform"
}

variable "create_github_oidc_provider" {
  description = "GitHub の OpenID Connect の登録を作るか。アカウントにすでにあるなら false"
  type        = bool
  default     = true
}
