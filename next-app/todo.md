## TODOステップ
- spotifyの認証ができるようにする (3/2)
- サーバー側で動作するnodeのコードとそうでないものをきちんと分別する (3/4)
- spotify検索結果を格納できるDynamoDBテーブルを作成する (3/7)
- server actionから、spotify検索結果を取得して必要な情報を抜き出す (3/7)
- server actionからDynamoDB SDKでデータを挿入したり、取得する (3/7)
- Playlistの作成(3/10)
- Anilist情報を表のように行列にして表示する(3/14)
- セキュリティのため起動環境をdockerizeする(3/16)
- dockerで ctrl-c したときにコンテナのシャットダウンが遅いのを解消(3/18)
- Anime型の命名変更(3/28)
- fetchの代わりにaxiosを使ってquery paramsをいい感じに管理する(3/28)
- AnimeTheme情報を行列に追加(3/29)
- useEffectの分離(3/30)
- 毎度generateするのは面倒なので、デバッグ用のデータを保管する(3/30)
- TFでDynamoDBのテーブルを作成(4/2)

- DynamoDBにキャッシュを作成
- DynamoDBから取得した情報を行列に追加
- .tsファイルで作成した関数に関してのロジックをテストする
- Next.jsのcache関数を使って他APIとの通信を高速化する
- DynamoDBに情報が含まれていない場合にSpotify APIと通信して取得する

期待通りの画面になったら
- extractXXX 関数について、use serverを使うべきかuse clientを使うべきか
- ローカルからspotifyにひたすら検索をかけまくり、アニメtop1000の曲データをDynamoDBに保管する
- UI を作り込む
- Next.js lambda でデプロイできたらしてみる

## できたらやる
https://api-docs.animethemes.moe/wiki/animetheme/index/
created_at, updated_at 順にsortできるのでこれでanimetheme apiの更新を
定期的に確認しつつ、更新があった場合にspotify search cacheをためるようにする

- AnilistにはあるけどAnimeThemeには登録されていないものに関してのデータを集める
有志から対応データを募ったり、定期的にAnimeThemeを見に行って更新されているか調べる

- spotify検索精度の改善
https://www.npmjs.com/package/@koozaki/romaji-conv
曲名にローマ字が含まれていた場合、日本語に変換したほうが検索結果が良い場合がある。
変換した場合のキャッシュも備えておくべき？

googleの検索結果を利用して、それっぽいものをスクレイピングしてタイトルを取得する
→検索結果のスクレイピングが禁止されていて難しいかも知れない。
brave検索エンジンであれば問題なさそう。
https://search.brave.com/search?q=ishukan+communication+japanese+title&source=web
例えばこのような ishukan communication のjapanese titleで検索すると
色々と出てくる。
Anime Songs Lyrics が正確な日本語のタイトルを掲載しており、
これを取得することで正確な日本語タイトル変換が可能になる可能性がある
site検索などで、信頼できるサイトを複数指定し、スクレイピングで日本語タイトルを取得して検索を掛ける

または、AniPlaylistで検索をかけても良さそう。
曲名+アニメタイトル で検索すると割と正確な結果が出てくる
もしくはAnimetheme api運営に日本語タイトルの追加などを提案するか

- 検索結果の表示順改善
ユーザーによって選ばれた回数をカウントし、多く選ばれた方がより上の順位に来るようにすることで
時間がたつにつれて検索結果が改善されてくる
曲名、アーティスト情報などのマッチング度を計算してRowの色を変えられるようにしたい

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
