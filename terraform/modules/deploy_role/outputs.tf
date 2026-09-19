output "role_arn" {
  description = "GitHub Actions が引き受ける役割の ARN"
  value       = aws_iam_role.deploy.arn
}
