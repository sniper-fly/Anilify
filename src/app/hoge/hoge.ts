"use server";

import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export async function hoge() {
  const api = SpotifyApi.withClientCredentials(
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    process.env.SPOTIFY_CLIENT_SECRET!
  );

  // const items = await api.search("結束バンド", ["artist"]);
  // console.table(
  //   items.artists.items.map((item) => ({
  //     name: item.name,
  //     followers: item.followers.total,
  //     popularity: item.popularity,
  //   }))
  // );

  const items = await api.search("Rakuen no Tsubasa", ["track"]);
  console.log(items.tracks.items[0]);
  console.log(items.tracks.items[0].album.images);
  console.log(items.tracks.items[0].artists);

  // これはユーザー認証を必要とする
  // const items = await api.currentUser.profile();
  // console.log(items)
}

// {
//   album: {
//     images: [ // 一番hightが小さいものを取得する
//           {
//             height: 640,
//             url: 'https://i.scdn.co/image/ab67616d0000b273d45d0a599fcbeaf31293e36a',
//             width: 640
//           },
//           {
//             height: 300,
//             url: 'https://i.scdn.co/image/ab67616d00001e02d45d0a599fcbeaf31293e36a',
//             width: 300
//           },
//           {
//             height: 64,
//             url: 'https://i.scdn.co/image/ab67616d00004851d45d0a599fcbeaf31293e36a',
//             width: 64
//           }
//     ]
//   },
//   artists: [
//     {
//       external_urls: { spotify: 'https://open.spotify.com/artist/4SLTgwsFXbomwbNjsAvs3E' }
//       name: '黒崎真音',
//     }
//   ],
//   duration_ms: 227160,
//   external_urls: { spotify: 'https://open.spotify.com/track/5P77DIVI4cnCMMgCVuoOkc' },
//   name: '楽園の翼',
//   preview_url: 'https://p.scdn.co/mp3-preview/9ac27411daceeb01922f39a6e5a8afbcf7a6bb45?cid=84adcac71f904734b02f7ee14e623600',
//   uri: 'spotify:track:5P77DIVI4cnCMMgCVuoOkc'
// }

// 上記の構造を読み取り、下記のDynamoDBの構造に変換する

// type dynamoDB_json = {
//   // id: number; // anime theme id
//   // titleは重複する場合があるが、spotifyの検索結果は同じになるのでid管理は不要
//   title: string; // song title from animetheme (primary key)
//   spotify: [
//     {
//       uri: string;
//       name: string;
//       artists: [
//         {
//           name: string;
//           openLink: string;
//         }
//       ]
//       openLink: string;
//       preview_url: string;
//       image: string;
//       duration_ms: number;
//     }
//   ];
// }
