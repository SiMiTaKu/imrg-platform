terraform {
  required_version = ">= 1.10.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.60"
    }
  }

  # 置き場を作る前は、この塊ごとコメントにして手元の状態ファイルで実行する。
  # 作ったあとに戻し、`terraform init -migrate-state` で移す
  backend "s3" {
    bucket       = "imrg-platform-terraform-state"
    key          = "prod/terraform.tfstate"
    region       = "ap-northeast-1"
    profile      = "imrg"
    encrypt      = true
    use_lockfile = true
  }
}

provider "aws" {
  region  = var.region
  profile = var.profile

  default_tags {
    tags = local.tags
  }
}

# 証明書は us-east-1 にしか置けない
provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = var.profile

  default_tags {
    tags = local.tags
  }
}
