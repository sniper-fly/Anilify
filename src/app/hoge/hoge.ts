"use server";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

import { SearchCache, TrackInfo } from "@/types";
import { AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";

export async function hoge(token: AccessToken) {
  // const api = SpotifyApi.withClientCredentials(
  //   process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
  //   process.env.SPOTIFY_CLIENT_SECRET!
  // );

  const api = SpotifyApi.withAccessToken(
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    token
  );

  const query = "dororo";
  const items = await api.search(query, ["track"]);

  items.tracks.items.forEach((item) => {
    console.log(item.name);
    console.log(item.artists);
    console.log(item.preview_url);
    console.log(item.popularity);
    console.log("====================================");
  });
  // console.log(items.tracks.items);
  // console.log(items.tracks.items[0]);
  // console.log(items.tracks.items[0].album.images);
  // console.log(items.tracks.items[0].artists);

  // console.log("====================================");

  const item = items.tracks.items[0];
  // まずはitemを TrackInfo 型に変換する
  const track: TrackInfo = {
    uri: item.uri,
    name: item.name,
    artists: item.artists.map((artist) => ({
      name: artist.name,
      openLink: artist.external_urls.spotify,
    })),
    openLink: item.external_urls.spotify,
    preview_url: item.preview_url,
    // imageはitem.album.imagesの中から一番hightが小さいものを取得する
    image: item.album.images.reduce((prev, current) => {
      return prev.height < current.height ? prev : current;
    }).url,
    duration_ms: item.duration_ms,
    available_markets: item.available_markets,
  };

  // console.log(track);

  // const dbclient = new DynamoDBClient({ region: "ap-northeast-1" });
  // const docClient = DynamoDBDocumentClient.from(dbclient);
  // const cmd = new PutCommand({
  //   TableName: "SpotifySearchCache",
  //   Item: {
  //     query: query,
  //     tracks: [track],
  //   },
  // });
  // const res = await docClient.send(cmd);
  // console.log(res)
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