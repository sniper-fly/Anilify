## ステップ
- spotifyの認証ができるようにする
- まずはローカルのスクリプトでspotifyに検索をかけて、DynamoDBに保管できる形式に整形する
- ローカルからDynamoDBと通信してデータを入れる(もしくは手動で、コンソールからデータを入れる)
- API gateway とlambdaを連携し、animeSong形式のjsonを受け付けるエンドポイントを作成する
- lambdaで、受け取ったデータからtitleを抜き出す
- DynamoDBからデータを取り出す
- 受け取ったデータをanimeSong配列の適切な場所に結合する
- リクエストを返す
- 簡素にUIを作る

期待通りの画面になったら
- ローカルからspotifyにひたすら検索をかけまくり、アニメtop1000の曲データをDynamoDBに保管する
- UI を作り込む
- Next.js lambda でデプロイできたらしてみる


## バックエンド要件
animetheme api のidをprimary keyとして、titleなどを収納する

jsonデータを受け取る
曲titleを取り出す
曲id を条件にselectして、spotifyのデータを引き出す
(DynamoDBに対して N + 1のリクエストが発生しないようにする)
(
曲id が事前のDynamoDBキャッシュに存在しなかった場合はSpotifyに検索クエリを投げる
返ってきたデータを整形しDynamoDBに保存
)
jsonデータのspotifyキーに取得したデータを結合する

## できたらやる
- AnilistにはあるけどAnimeThemeには登録されていないものに関してのデータを集める
有志から対応データを募ったり、定期的にAnimeThemeを見に行って更新されているか調べる
