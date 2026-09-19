variable "name_prefix" {
  description = "作るものの名前の頭に付ける文字列"
  type        = string
}

variable "notification_email" {
  description = "異常を知らせる宛先。設定すると確認のメールが届くので、本文のリンクを開いて承認する"
  type        = string
}

variable "distribution_id" {
  description = "見張る CloudFront の配信 ID"
  type        = string
}

variable "certificate_arn" {
  description = "期限を見張る証明書の ARN"
  type        = string
}

variable "tags" {
  description = "すべてのリソースに付けるタグ"
  type        = map(string)
  default     = {}
}
