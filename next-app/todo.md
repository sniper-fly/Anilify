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
- docker環境でもawsのcredentialが使えるようにする(4/3)
- iam roleの作成とアクセスキーの取得もTerraformで行う(4/4 ~ 4/5)
- DynamoDBにキャッシュを作成(4/6 ~)
  - spotifyに検索を掛ける (4/6)
  - 検索結果のjsonの一部をDynamoDBに保存する (4/8)
- DynamoDBから取得した情報を行列に追加(4/11)
  - AnimeInfoの変更を検知して、SearchResult型のオブジェクトを作成する(4/13)
    - animeInfo情報をparamsに変換する関数
    - getDynamoCacheからparams変換機能を排除、paramsを受け取ってリクエストを受け取るだけ
    (テスタビリティの考慮)
    - 受け取ったレスポンスをSearchResultに変換する関数
  - SearchResultを元に画面を構成(4/14 ~ 4/21)
- リファクタリング(4/21)
  - Medium 型ではなくMedia型にしてMedia[]として宣言する
  - ネストを下げる
- 将来の持続可能なDB作成について、とにかく案を書きなぐってまとめる(4/22~4/24)
- a linkでanimetheme.moe に対しての導線を設置する(4/26 ~ 4/27)

- cockroachDBのローカルセットアップチュートリアル
https://www.cockroachlabs.com/docs/stable/start-a-local-cluster-in-docker-mac
- SQLからデータを引き出す
- Aniplaylist APIのスクレイピング
- cockroachDBのオンライン利用

- .tsファイルで作成した関数に関してのロジックをテストする
- Next.jsのcache関数を使って他APIとの通信を高速化する
- DynamoDBに情報が含まれていない場合にSpotify APIと通信して取得する

期待通りの画面になったら
- S3から大量のデータをDynamoDBにimportする
https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/S3DataImport.HowItWorks.html
https://dev.classmethod.jp/articles/dynamodb-import-from-s3-export-to-s3/

- extractXXX 関数について、use serverを使うべきかuse clientを使うべきか
- ローカルからspotifyにひたすら検索をかけまくり、アニメtop1000の曲データをDynamoDBに保管する
- UI を作り込む
- Next.js lambda でデプロイできたらしてみる

## spotify API検索結果調査
q=Anna+ni+Isshodattanoni
で検索すると、10件以上遡っても公式のものが出てこない
Anna+ni+Isshodattanoni%2520artist%3Asee-saw
artistでの絞り込みを行うとより正確になる

但し、逆の例もある
non non biyori%2520artist%3Asakura ayane
の検索結果は
non non biyori
の検索結果より悪い

曲名オンリー検索 + 曲名&アーティスト検索
各10件ずつぐらいの検索結果データを結合する
その中から、一致度の高い曲順に並べる

1. AniPlaylistのデータ
2. 曲名オンリー検索 + 曲名&アーティスト検索

## DB最適化
https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-use-s3-too.html
大きな属性値をS3に保存する

https://dev.classmethod.jp/articles/optimize-costs-of-dynamodb/
料金最適化

- 曲のタイトルだけでなく、アニメタイトルを含めた検索で精度を上げたい
- プレイリストに追加された回数を記録してレコメンデーションに活かしたい
- animetheme apiでupdateがあったら項目を更新したい
- anime song lyrics にjapanese titleの掲載があったら検索に利用したい
- OP曲以外のキャラソンも追加候補として加えられるようにしたい

- 例えば、ユーザーが独自に検索クエリを指定して曲を追加した場合、どこにデータを紐付ける？
- アニメタイトルで曲を検索した場合に、タイトルにも曲を紐づけたい

プライマリーキーとして使えるのはexternal_idのみ
AniList, MyAnimeListと両対応するにはどちらのカラムも必要

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

表示されている音楽が公式かどうか？
全て聞いているとユーザビリティが下がるので、確率でアンケートを表示する
曲名、アーティスト名の一致判定
完全一致、部分一致で評価点を分ける
評価点が低い場合は、公式かどうかのアンケートの表示確率を上げる
適当に答える人のアンケートデータがノイズにならないように、
- アンケートの選択肢表示順序をばらばらにする（テキトーに一番上とかを答える人のデータノイズを除去）
- APIハックされないようにランダムな数字をバリデーションに用いる
- 投じた票がその時点での多数派に類する場合のみ、ポイントを付与する
ポイントを使って無料サービス利用を提供する

APIを使って統計情報を表示する
spotifyとかで聞いた曲の回数を記録できるので、人気アニソンのランキングが作れる
ベストプレイリストの作成が可能

## その他
anime theme apiの各アニメソングに対するリンクの取得方法
https://api.animethemes.moe/anime?filter[has]=resources&filter[site]=AniList&filter[external_id]=97986&include=animethemes.song.artists,resources,animethemes.animethemeentries.videos.videoscript&page[size]=1&page[number]=1
上記のようなリンクに対して、
include=animethemes.song.artists,resources,animethemes.animethemeentries.videos.videoscript
ここがポイント
(ex)
https://animethemes.moe/anime/urusei_yatsura_2022/ED2

```
"animethemes.moe/anime"
+ anime.slug
+ anime_theme.slug
+ videos.tags
```

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
