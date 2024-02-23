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

## その他
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

                spotify?: [ // 5件ぐらいは表示する
                  {
                    uri: string; // プレイリスト追加に必要
                    name: string; // トラック曲名
                    artists: string[]; // アーティスト名
                    linkToOrigin: string; // Spotifyを開くためのリンク
                    preview_url: string; // プレビュー音源
                    image: string; // アルバムアート
                    duration_ms: number; // 再生時間
                  }
                ];
              }
            ];
          }
        ];

        type req2_json = string[] // SpotifyのURIの配列

        // DynamoDB のテーブルに保存する検索結果キャッシュデータ形式
        type dynamoDB_json = {
          // id: number; // anime theme id
          // titleは重複する場合があるが、spotifyの検索結果は同じになるのでid管理は不要
          title: string; // song title from animetheme (primary key)
          spotify: [
            {
              uri: string;
              name: string;
              artists: string[];
              linkToOrigin: string;
              preview_url: string;
              image: string;
              duration_ms: number;
            }
          ];
        }
```
