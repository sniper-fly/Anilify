resource "aws_dynamodb_table" "example" {
  name           = "AniTunesSearchCache"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "query"

  attribute {
    name = "query"
    type = "S"
  }
}
