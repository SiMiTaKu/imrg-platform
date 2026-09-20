locals {
  origin_id = "s3-${var.bucket_name}"

  # 合言葉は Basic 認証の形（`Basic <利用者名:合言葉 を base64 にしたもの>`）で関数に埋め込む
  basic_auth_credential = var.basic_auth == null ? "null" : jsonencode("Basic ${base64encode("${var.basic_auth.username}:${var.basic_auth.password}")}")
}

resource "aws_cloudfront_function" "request" {
  name    = "${replace(var.site_domain, ".", "-")}-request"
  runtime = "cloudfront-js-2.0"
  comment = "www を外し、末尾スラッシュを付け、ディレクトリーの index.html を返す"
  publish = true

  code = templatefile("${path.module}/functions/request.js.tftpl", {
    site_domain           = var.site_domain
    basic_auth_credential = local.basic_auth_credential
  })
}

# S3 を非公開のまま CloudFront からだけ読めるようにする仕組み
resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "${var.bucket_name}-oac"
  description                       = "${var.site_domain} の配信元"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Amplify の customHeaders で入れていたものと同じ
resource "aws_cloudfront_response_headers_policy" "site" {
  name    = "${replace(var.site_domain, ".", "-")}-security-headers"
  comment = "HSTS・nosniff・Referrer-Policy・Permissions-Policy・X-Frame-Options"

  security_headers_config {
    strict_transport_security {
      access_control_max_age_sec = 31536000
      include_subdomains         = true
      override                   = true
    }

    content_type_options {
      override = true
    }

    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }

    frame_options {
      frame_option = "SAMEORIGIN"
      override     = true
    }
  }

  custom_headers_config {
    items {
      header   = "Permissions-Policy"
      value    = "camera=(), microphone=(), geolocation=()"
      override = true
    }

    # ステージングの中身が検索に載ると、本番と重なって順位を下げる
    dynamic "items" {
      for_each = var.noindex ? [1] : []

      content {
        header   = "X-Robots-Tag"
        value    = "noindex, nofollow"
        override = true
      }
    }
  }
}

# 配信元が返す Cache-Control をそのまま使う。中身の実際の指定はアップロード時に付ける
resource "aws_cloudfront_cache_policy" "site" {
  name    = "${replace(var.site_domain, ".", "-")}-cache"
  comment = "クッキーとクエリを鍵にせず、配信元の Cache-Control に従う"

  default_ttl = 86400
  min_ttl     = 0
  max_ttl     = 31536000

  parameters_in_cache_key_and_forwarded_to_origin {
    enable_accept_encoding_brotli = true
    enable_accept_encoding_gzip   = true

    cookies_config {
      cookie_behavior = "none"
    }

    headers_config {
      header_behavior = "none"
    }

    query_strings_config {
      query_string_behavior = "none"
    }
  }
}

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = var.site_domain
  default_root_object = "index.html"
  price_class         = var.price_class
  aliases             = local.site_names
  tags                = var.tags

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = local.origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    target_origin_id       = local.origin_id
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true

    cache_policy_id            = aws_cloudfront_cache_policy.site.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.site.id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.request.arn
    }
  }

  # 無いページは SvelteKit の 404 ページを返す。配信元が非公開なので 403 も同じ扱いにする
  dynamic "custom_error_response" {
    for_each = [403, 404]

    content {
      error_code            = custom_error_response.value
      response_code         = 404
      response_page_path    = "/404.html"
      error_caching_min_ttl = 60
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.site.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
