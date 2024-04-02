resource "aws_dynamodb_table" "example" {
  name           = "AniTunesSpotifySearchCache"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "query"

  attribute {
    name = "query"
    type = "S"
  }
}
