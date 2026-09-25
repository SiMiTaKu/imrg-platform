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
  description = "ステージングのドメイン"
  type        = string
  default     = "stg.imrg.work"
}

variable "hosted_zone_id" {
  description = "Route53 のホストゾーン ID（本番と同じ imrg.work のもの）"
  type        = string
}

variable "github_repository" {
  description = "配信を行うリポジトリ（owner/repo）"
  type        = string
  default     = "SiMiTaKu/imrg-platform"
}

variable "basic_auth" {
  description = "ステージングを見るときの合言葉。null にすると誰でも見られる"
  type = object({
    username = string
    password = string
  })
  sensitive = true
}

variable "guest_basic_auth" {
  description = <<-EOT
    運営の合言葉に加えて通す、一時的な合言葉の一覧。
    外の人に期間を切って見てもらうときに足し、用が済んだら外して apply する
  EOT
  type = list(object({
    note     = string
    username = string
    password = string
  }))
  default   = []
  sensitive = true
}
