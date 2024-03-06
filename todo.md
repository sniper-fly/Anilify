## ステップ
- spotifyの認証ができるようにする (3/2)
- サーバー側で動作するnodeのコードとそうでないものをきちんと分別する (3/4)

- spotify検索結果を格納できるDynamoDBテーブルを作成する
- server actionから、spotify検索結果を取得して必要な情報を抜き出す
- server actionからDynamoDB SDKでデータを挿入したり、取得する
- 受け取ったデータをanimeSong配列の適切な場所に結合する
- 簡素にUIを作る

<!-- - ローカルからDynamoDBと通信してデータを入れる(もしくは手動で、コンソールからデータを入れる) -->
<!-- - API gateway とlambdaを連携し、animeSong形式のjsonを受け付けるエンドポイントを作成する -->
<!-- - lambdaで、受け取ったデータからtitleを抜き出す
- DynamoDBからデータを取り出す -->

期待通りの画面になったら
- ローカルからspotifyにひたすら検索をかけまくり、アニメtop1000の曲データをDynamoDBに保管する
- UI を作り込む
- Next.js lambda でデプロイできたらしてみる

## 制御フロー
- AniListユーザー名入力フォーム、Auth Spotifyボタンを表示する
- Spotifyの認証ページにリダイレクトする
- アニメと曲の対応一覧生成



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

## その他
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

```typescript
type animeSong = [
  {
    id: number; // anime theme id
    external_id: number; // 画面に要素を並べる時、keyとして使う
    site: string; // AniList or MyAnimeList
    name: string; // anime title
    animethemes: [
      {
        // id: number;
        title: string; // song title
        type: string; // OP or ED
        slug: string; // song slug (ex. OP1, ED2)
        artists: string[];

        spotify?: TrackInfo[];
      }
    ];
  }
];

// DynamoDB のテーブルに保存する検索結果キャッシュデータ形式
type dynamoDB_json = {
  // id: number; // anime theme id
  // titleは重複する場合があるが、spotifyの検索結果は同じになるのでid管理は不要
  title: string; // song title from animetheme (primary key)
  spotify: TrackInfo[];
};

type TrackInfo = {
  uri: string;
  name: string;
  artists: [
    {
      name: string;
      openLink: string;
    }
  ];
  openLink: string;
  preview_url: string;
  image: string;
  duration_ms: number;
};
```
