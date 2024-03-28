## TODOステップ
- spotifyの認証ができるようにする (3/2)
- サーバー側で動作するnodeのコードとそうでないものをきちんと分別する (3/4)
- spotify検索結果を格納できるDynamoDBテーブルを作成する (3/7)
- server actionから、spotify検索結果を取得して必要な情報を抜き出す (3/7)
- server actionからDynamoDB SDKでデータを挿入したり、取得する (3/7)
- Playlistの作成(3/10)
- Anilist情報を表のように行列にして表示する(3/14)
- セキュリティのため起動環境をdockerizeする(3/16)
- Anime型の命名変更
- fetchの代わりにaxiosを使ってquery paramsをいい感じに管理する

- AnimeTheme情報を行列に追加
- DynamoDBから取得した情報を行列に追加
- dockerで ctrl-c したときにコンテナのシャットダウンが遅いのを解消

期待通りの画面になったら
- ローカルからspotifyにひたすら検索をかけまくり、アニメtop1000の曲データをDynamoDBに保管する
- UI を作り込む
- Next.js lambda でデプロイできたらしてみる

## できたらやる
- AnilistにはあるけどAnimeThemeには登録されていないものに関してのデータを集める
有志から対応データを募ったり、定期的にAnimeThemeを見に行って更新されているか調べる

## その他
https://api-docs.animethemes.moe/wiki/anime/index/
anime theme api のリファレンス

https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/dynamodb/
dynamodbのapiリファレンス

https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html
Dynamodb での一般的なSDK利用シナリオ

https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/GettingStarted.WriteItem.html
テーブルへのデータ書き込み

https://github.com/spotify/spotify-web-api-ts-sdk/blob/main/example_next/src/app/page.tsx
Next.jsでのsdk実装例が載っている

https://developer.spotify.com/dashboard
spotify app dashboard

https://support.spotify.com/jp/article/spotify-on-other-apps/
spotifyアプリのアクセス権の管理

https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn
ここが参考になりそう
https://developer.spotify.com/documentation/web-playback-sdk/howtos/web-app-player

https://github.com/spotify/spotify-web-api-ts-sdk
公式のAPI SDK
https://developer.spotify.com/blog/2023-07-03-typescript-sdk

```typescript
// ids にはあって allData にないもののexternal_idを抽出 (調査用)
const gotIds: number[] = allData.map((data) => data.resources[0].external_id);
const missing = ids.filter(
  (id) => !gotIds.includes(id)
);
missing.forEach((id) => {
  console.log(`https://anilist.co/anime/${id}/`)
})
```
