resource "aws_dynamodb_table" "anitunes_spotify_search_cache" {
  name           = "AniTunesSpotifySearchCache"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "query"

  attribute {
    name = "query"
    type = "S"
  }
}
