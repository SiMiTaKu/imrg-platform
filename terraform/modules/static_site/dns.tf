# ドメインと www を CloudFront に向ける。Alias なので料金はかからない
locals {
  site_names   = [var.site_domain, "www.${var.site_domain}"]
  record_types = ["A", "AAAA"]

  site_records = {
    for pair in setproduct(local.site_names, local.record_types) :
    "${pair[0]}-${pair[1]}" => { name = pair[0], type = pair[1] }
  }
}

resource "aws_route53_record" "site" {
  for_each = local.site_records

  zone_id = var.hosted_zone_id
  name    = each.value.name
  type    = each.value.type

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
