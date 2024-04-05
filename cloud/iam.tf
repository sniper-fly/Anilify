resource "aws_iam_user" "anitunes" {
  name = "anitunes_dev"
  path = "/system/"
}

resource "aws_iam_access_key" "anitunes" {
  user = aws_iam_user.anitunes.name
  pgp_key = "keybase:miroscular"
}

output "anitunes_access_key_id" {
  description = "The access key id"
  value       = aws_iam_access_key.anitunes.id
}

output "anitunes_access_key" {
  description = "The gpg encrypted secret access key"
  value       = aws_iam_access_key.anitunes.encrypted_secret
}
