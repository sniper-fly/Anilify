resource "aws_iam_user" "anitunes" {
  name = "anitunes_dev"
  path = "/system/"
}

resource "aws_iam_access_key" "anitunes" {
  user = aws_iam_user.anitunes.name
  pgp_key = "keybase:miroscular"
}
data "aws_iam_policy" "DynamoDBFullAccess" {
  arn = "arn:aws:iam::aws:policy/AmazonDynamoDB"
}

resource "aws_iam_user_policy_attachment" "anitunes" {
  user       = aws_iam_user.anitunes.name
  policy_arn = data.aws_iam_policy.DynamoDBFullAccess.arn
}

output "anitunes_access_key_id" {
  description = "The access key id"
  value       = aws_iam_access_key.anitunes.id
  sensitive = true
}

output "anitunes_access_key" {
  description = "The gpg encrypted secret access key"
  value       = aws_iam_access_key.anitunes.encrypted_secret
  sensitive = true
}
