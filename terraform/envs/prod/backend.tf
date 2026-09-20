# 状態ファイルの置き場ができるまでは、この設定を読ませない。
# 置き場を作ったあとに backend.tf へ名前を変え、`terraform init -migrate-state` で移す。
# 手順は terraform/README.md の「初回の手順」
terraform {
  backend "s3" {
    bucket       = "imrg-platform-terraform-state"
    key          = "prod/terraform.tfstate"
    region       = "ap-northeast-1"
    profile      = "imrg"
    encrypt      = true
    use_lockfile = true
  }
}
