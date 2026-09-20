# GitHub Actions に、鍵を置かずに一時的な権限を渡すための登録。
# アカウントに1つだけしか作れないので、すでにあるときは create_oidc_provider = false にして読むだけにする
resource "aws_iam_openid_connect_provider" "github" {
  count = var.create_oidc_provider ? 1 : 0

  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
  tags            = var.tags
}

data "aws_iam_openid_connect_provider" "github" {
  count = var.create_oidc_provider ? 0 : 1

  url = "https://token.actions.githubusercontent.com"
}

locals {
  repository_owner = split("/", var.github_repository)[0]
  repository_name  = split("/", var.github_repository)[1]

  allowed_subjects = flatten([
    for name in var.allowed_environments : [
      "repo:${local.repository_owner}/${local.repository_name}:environment:${name}",
      "repo:${local.repository_owner}@*/${local.repository_name}@*:environment:${name}",
    ]
  ])

  oidc_provider_arn = var.create_oidc_provider ? aws_iam_openid_connect_provider.github[0].arn : data.aws_iam_openid_connect_provider.github[0].arn
}

data "aws_iam_policy_document" "assume" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"

    principals {
      type        = "Federated"
      identifiers = [local.oidc_provider_arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    # 決めたリポジトリの決めた環境からだけ引き受けられる。
    # このリポジトリの OpenID Connect は、sub に所有者とリポジトリの ID を埋め込む
    # （例: repo:SiMiTaKu@34091968/imrg-platform@1373814129:environment:staging）。
    # ID の付かない形も将来のために許しておく
    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = local.allowed_subjects
    }
  }
}

# IAM の description は ASCII しか受け付けないため、ここだけ英語で書く
resource "aws_iam_role" "deploy" {
  name               = var.role_name
  description        = "Deploy the static site from GitHub Actions"
  assume_role_policy = data.aws_iam_policy_document.assume.json
  tags               = var.tags
}

# できることは、サイトのバケットへの読み書きとキャッシュの破棄だけに絞る
data "aws_iam_policy_document" "deploy" {
  statement {
    sid       = "ListSiteBucket"
    actions   = ["s3:ListBucket"]
    resources = [var.bucket_arn]
  }

  statement {
    sid       = "WriteSiteObjects"
    actions   = ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"]
    resources = ["${var.bucket_arn}/*"]
  }

  statement {
    sid       = "ListReleasesBucket"
    actions   = ["s3:ListBucket"]
    resources = [var.releases_bucket_arn]
  }

  statement {
    sid       = "ReadWriteReleases"
    actions   = ["s3:GetObject", "s3:PutObject"]
    resources = ["${var.releases_bucket_arn}/*"]
  }

  statement {
    sid       = "InvalidateCache"
    actions   = ["cloudfront:CreateInvalidation", "cloudfront:GetInvalidation"]
    resources = [var.distribution_arn]
  }
}

resource "aws_iam_role_policy" "deploy" {
  name   = "${var.role_name}-policy"
  role   = aws_iam_role.deploy.id
  policy = data.aws_iam_policy_document.deploy.json
}
