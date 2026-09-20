# 知らせる先。CloudFront と証明書のメトリクスは us-east-1 にしか無いため、
# このモジュールは us-east-1 に向けたプロバイダーで呼ぶ
resource "aws_sns_topic" "alerts" {
  name = "${var.name_prefix}-alerts"
  tags = var.tags
}

resource "aws_sns_topic_subscription" "email" {
  topic_arn = aws_sns_topic.alerts.arn
  protocol  = "email"
  endpoint  = var.notification_email
}

locals {
  # CloudFront のメトリクスは、リージョンに Global を指定して取る
  distribution_dimensions = {
    DistributionId = var.distribution_id
    Region         = "Global"
  }
}

# 配信元やエッジの異常。人が触っていないのに壊れたときに気付くためのもの
resource "aws_cloudwatch_metric_alarm" "server_error_rate" {
  alarm_name        = "${var.name_prefix}-5xx"
  alarm_description = "CloudFront が 5xx を返す割合が高い。配信元（S3）か関数の異常を疑う"

  namespace           = "AWS/CloudFront"
  metric_name         = "5xxErrorRate"
  dimensions          = local.distribution_dimensions
  statistic           = "Average"
  period              = 300
  evaluation_periods  = 2
  threshold           = 1
  comparison_operator = "GreaterThanThreshold"
  # 誰も見に来ていない時間帯は数字が出ない。それは異常ではない
  treat_missing_data = "notBreaching"

  alarm_actions = [aws_sns_topic.alerts.arn]
  ok_actions    = [aws_sns_topic.alerts.arn]
  tags          = var.tags
}

# 配信に失敗してファイルが消えたときは、4xx の割合が跳ね上がる
resource "aws_cloudwatch_metric_alarm" "client_error_rate" {
  alarm_name        = "${var.name_prefix}-4xx"
  alarm_description = "CloudFront が 4xx を返す割合が高い。配信でファイルが欠けた可能性がある"

  namespace           = "AWS/CloudFront"
  metric_name         = "4xxErrorRate"
  dimensions          = local.distribution_dimensions
  statistic           = "Average"
  period              = 300
  evaluation_periods  = 3
  threshold           = 25
  comparison_operator = "GreaterThanThreshold"
  treat_missing_data  = "notBreaching"

  alarm_actions = [aws_sns_topic.alerts.arn]
  tags          = var.tags
}

# 証明書は DNS で自動更新されるが、Route53 のレコードを消すと更新に失敗する。
# 失効するとサイト全体が開けなくなるため、余裕をもって知らせる
resource "aws_cloudwatch_metric_alarm" "certificate_expiry" {
  alarm_name        = "${var.name_prefix}-certificate-expiry"
  alarm_description = "証明書の残り日数が少ない。自動更新に失敗している可能性がある"

  namespace           = "AWS/CertificateManager"
  metric_name         = "DaysToExpiry"
  dimensions          = { CertificateArn = var.certificate_arn }
  statistic           = "Minimum"
  period              = 86400
  evaluation_periods  = 1
  threshold           = 20
  comparison_operator = "LessThanThreshold"
  treat_missing_data  = "breaching"

  alarm_actions = [aws_sns_topic.alerts.arn]
  tags          = var.tags
}
