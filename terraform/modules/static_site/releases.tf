# 配ったビルドをそのまま取っておく入れ物。
# 戻すときは、ここから取り出して配り直す（作り直さないので、そのときの中身と必ず同じものが出る）
resource "aws_s3_bucket" "releases" {
  bucket = "${var.bucket_name}-releases"
  tags   = var.tags
}

resource "aws_s3_bucket_public_access_block" "releases" {
  bucket = aws_s3_bucket.releases.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "releases" {
  bucket = aws_s3_bucket.releases.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "releases" {
  bucket = aws_s3_bucket.releases.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "releases" {
  bucket = aws_s3_bucket.releases.id

  rule {
    id     = "expire-old-releases"
    status = "Enabled"

    filter {
      prefix = "builds/"
    }

    expiration {
      days = var.release_retention_days
    }
  }
}
