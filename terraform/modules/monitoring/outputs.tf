output "topic_arn" {
  description = "異常を知らせる SNS トピックの ARN"
  value       = aws_sns_topic.alerts.arn
}
