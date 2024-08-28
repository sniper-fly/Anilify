export type MalResponse = {
  data: {
    node: {
      id: number;
      title: string;
      main_picture?: {
        medium: string;
        large?: string;
      };
      alternative_titles?: {
        synonyms?: string[];
        en?: string;
        ja?: string;
      };
      start_date?: string;
      end_date?: string;
      created_at: Date;
      updated_at: Date;
    };
    ranking: {
      rank: number;
    };
  }[];
  paging: {
    next?: string;
  };
};

type MalResponse1 = typeof malResponse;

type MalResponse2 = {
  data: (
    | {
        node: {
          id: number;
          title: string;
          main_picture: {
            medium: string;
            large: string;
          };
          alternative_titles: {
            synonyms: string[];
            en: string;
            ja: string;
          };
          start_date: string;
          end_date: string;
          created_at: string;
          updated_at: string;
        };
        ranking: {
          rank: number;
        };
      }
    | {
        node: {
          id: number;
          title: string;
          main_picture: {
            medium: string;
            large: string;
          };
          alternative_titles: {
            synonyms: string[];
            en: string;
            ja: string;
          };
          start_date: string;
          created_at: string;
          updated_at: string;
          end_date?: undefined;
        };
        ranking: {
          rank: number;
        };
      }
  )[];
  paging: {
    next: string;
  };
};

const malResponse = {
  data: [
    {
      node: {
        id: 52991,
        title: "Sousou no Frieren",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
        },
        alternative_titles: {
          synonyms: ["Frieren at the Funeral"],
          en: "Frieren: Beyond Journey's End",
          ja: "葬送のフリーレン",
        },
        start_date: "2023-09-29",
        end_date: "2024-03-22",
        created_at: "2022-09-09T10:01:30+00:00",
        updated_at: "2024-03-06T12:24:35+00:00",
      },
      ranking: {
        rank: 1,
      },
    },
    {
      node: {
        id: 5114,
        title: "Fullmetal Alchemist: Brotherhood",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Hagane no Renkinjutsushi: Fullmetal Alchemist",
            "Fullmetal Alchemist (2009)",
            "FMA",
            "FMAB",
          ],
          en: "Fullmetal Alchemist: Brotherhood",
          ja: "鋼の錬金術師 FULLMETAL ALCHEMIST",
        },
        start_date: "2009-04-05",
        end_date: "2010-07-04",
        created_at: "2008-08-21T03:35:22+00:00",
        updated_at: "2023-04-02T18:07:03+00:00",
      },
      ranking: {
        rank: 2,
      },
    },
    {
      node: {
        id: 9253,
        title: "Steins;Gate",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Steins;Gate",
          ja: "STEINS;GATE",
        },
        start_date: "2011-04-06",
        end_date: "2011-09-14",
        created_at: "2010-07-26T09:23:40+00:00",
        updated_at: "2024-01-22T17:31:43+00:00",
      },
      ranking: {
        rank: 3,
      },
    },
    {
      node: {
        id: 28977,
        title: "Gintama°",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
          large: "https://cdn.myanimelist.net/images/anime/3/72078l.jpg",
        },
        alternative_titles: {
          synonyms: ["Gintama' (2015)"],
          en: "Gintama Season 4",
          ja: "銀魂°",
        },
        start_date: "2015-04-08",
        end_date: "2016-03-30",
        created_at: "2014-12-21T07:58:01+00:00",
        updated_at: "2024-05-08T21:24:25+00:00",
      },
      ranking: {
        rank: 4,
      },
    },
    {
      node: {
        id: 38524,
        title: "Shingeki no Kyojin Season 3 Part 2",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1517/100633l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Attack on Titan Season 3 Part 2",
          ja: "進撃の巨人 Season3 Part.2",
        },
        start_date: "2019-04-29",
        end_date: "2019-07-01",
        created_at: "2018-10-14T18:13:45+00:00",
        updated_at: "2023-10-01T22:11:49+00:00",
      },
      ranking: {
        rank: 5,
      },
    },
    {
      node: {
        id: 39486,
        title: "Gintama: The Final",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1245/116760.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1245/116760l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Gintama: The Very Final",
          ja: "銀魂 THE FINAL",
        },
        start_date: "2021-01-08",
        end_date: "2021-01-08",
        created_at: "2019-03-07T20:54:42+00:00",
        updated_at: "2023-04-02T18:10:44+00:00",
      },
      ranking: {
        rank: 6,
      },
    },
    {
      node: {
        id: 9969,
        title: "Gintama'",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/4/50361.jpg",
          large: "https://cdn.myanimelist.net/images/anime/4/50361l.jpg",
        },
        alternative_titles: {
          synonyms: ["Gintama (2011)"],
          en: "Gintama Season 2",
          ja: "銀魂'",
        },
        start_date: "2011-04-04",
        end_date: "2012-03-26",
        created_at: "2010-12-06T15:47:56+00:00",
        updated_at: "2024-03-04T09:27:01+00:00",
      },
      ranking: {
        rank: 7,
      },
    },
    {
      node: {
        id: 11061,
        title: "Hunter x Hunter (2011)",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
        },
        alternative_titles: {
          synonyms: ["HxH (2011)"],
          en: "Hunter x Hunter",
          ja: "HUNTER×HUNTER（ハンター×ハンター）",
        },
        start_date: "2011-10-02",
        end_date: "2014-09-24",
        created_at: "2011-07-27T08:41:39+00:00",
        updated_at: "2023-09-30T15:05:19+00:00",
      },
      ranking: {
        rank: 8,
      },
    },
    {
      node: {
        id: 15417,
        title: "Gintama': Enchousen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1452/123686.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1452/123686l.jpg",
        },
        alternative_titles: {
          synonyms: ["Gintama' (2012)", "Gintama' Overdrive", "Kintama"],
          en: "Gintama: Enchousen",
          ja: "銀魂' 延長戦",
        },
        start_date: "2012-10-04",
        end_date: "2013-03-28",
        created_at: "2012-09-03T13:17:14+00:00",
        updated_at: "2024-03-04T09:28:12+00:00",
      },
      ranking: {
        rank: 9,
      },
    },
    {
      node: {
        id: 41467,
        title: "Bleach: Sennen Kessen-hen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1908/135431.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1908/135431l.jpg",
        },
        alternative_titles: {
          synonyms: ["Bleach: Thousand-Year Blood War Arc"],
          en: "Bleach: Thousand-Year Blood War",
          ja: "BLEACH 千年血戦篇",
        },
        start_date: "2022-10-11",
        end_date: "2022-12-27",
        created_at: "2020-03-18T09:10:15+00:00",
        updated_at: "2023-06-30T08:08:05+00:00",
      },
      ranking: {
        rank: 10,
      },
    },
    {
      node: {
        id: 820,
        title: "Ginga Eiyuu Densetsu",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1976/142016.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1976/142016l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "LoGH",
            "LotGH",
            "Gin'eiden",
            "GinEiDen",
            "Heldensagen Vom Kosmosinsel",
          ],
          en: "Legend of the Galactic Heroes",
          ja: "銀河英雄伝説",
        },
        start_date: "1988-01-08",
        end_date: "1997-03-17",
        created_at: "2006-03-15T19:37:04+00:00",
        updated_at: "2024-03-13T14:11:31+00:00",
      },
      ranking: {
        rank: 11,
      },
    },
    {
      node: {
        id: 43608,
        title: "Kaguya-sama wa Kokurasetai: Ultra Romantic",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1160/122627.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1160/122627l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season",
            "Kaguya-sama: Love is War Season 3rd Season",
          ],
          en: "Kaguya-sama: Love is War -Ultra Romantic-",
          ja: "かぐや様は告らせたい-ウルトラロマンティック-",
        },
        start_date: "2022-04-09",
        end_date: "2022-06-25",
        created_at: "2020-10-25T09:14:33+00:00",
        updated_at: "2024-07-01T02:41:54+00:00",
      },
      ranking: {
        rank: 12,
      },
    },
    {
      node: {
        id: 57864,
        title: "Monogatari Series: Off & Monster Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1741/140952.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1741/140952l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Orokamonogatari",
            "Wazamonogatari",
            "Nademonogatari",
            "Musubimonogatari",
            "Shinobumonogatari",
            "Yoimonogatari",
            "Amarimonogatari",
            "Ougimonogatari",
            "Shinomonogatari",
          ],
          en: "Monogatari Series: Off & Monster Season",
          ja: "〈物語〉シリーズ オフ&モンスターシーズン",
        },
        start_date: "2024-07-06",
        created_at: "2024-01-18T09:13:30+00:00",
        updated_at: "2024-08-21T11:00:45+00:00",
      },
      ranking: {
        rank: 13,
      },
    },
    {
      node: {
        id: 34096,
        title: "Gintama.",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/3/83528.jpg",
          large: "https://cdn.myanimelist.net/images/anime/3/83528l.jpg",
        },
        alternative_titles: {
          synonyms: ["Gintama (2017)"],
          en: "Gintama Season 5",
          ja: "銀魂。",
        },
        start_date: "2017-01-09",
        end_date: "2017-03-27",
        created_at: "2016-09-21T07:58:22+00:00",
        updated_at: "2023-04-02T18:14:16+00:00",
      },
      ranking: {
        rank: 14,
      },
    },
    {
      node: {
        id: 42938,
        title: "Fruits Basket: The Final",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1085/114792.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1085/114792l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Fruits Basket 3rd Season",
            "Fruits Basket (2019) 3rd Season",
            "Furuba",
          ],
          en: "Fruits Basket: The Final Season",
          ja: "フルーツバスケット The Final",
        },
        start_date: "2021-04-06",
        end_date: "2021-06-29",
        created_at: "2020-09-21T17:09:51+00:00",
        updated_at: "2023-08-03T16:57:23+00:00",
      },
      ranking: {
        rank: 15,
      },
    },
    {
      node: {
        id: 918,
        title: "Gintama",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
          large: "https://cdn.myanimelist.net/images/anime/10/73274l.jpg",
        },
        alternative_titles: {
          synonyms: ["Gin Tama", "Silver Soul", "Yorinuki Gintama-san"],
          en: "Gintama",
          ja: "銀魂",
        },
        start_date: "2006-04-04",
        end_date: "2010-03-25",
        created_at: "2006-04-20T15:03:52+00:00",
        updated_at: "2024-04-12T19:03:11+00:00",
      },
      ranking: {
        rank: 16,
      },
    },
    {
      node: {
        id: 4181,
        title: "Clannad: After Story",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1299/110774.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1299/110774l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Clannad: After Story",
          ja: "CLANNAD〜AFTER STORY〜 クラナド アフターストーリー",
        },
        start_date: "2008-10-03",
        end_date: "2009-03-27",
        created_at: "2008-03-28T02:00:43+00:00",
        updated_at: "2023-12-09T17:44:18+00:00",
      },
      ranking: {
        rank: 17,
      },
    },
    {
      node: {
        id: 28851,
        title: "Koe no Katachi",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg",
        },
        alternative_titles: {
          synonyms: ["The Shape of Voice"],
          en: "A Silent Voice",
          ja: "聲の形",
        },
        start_date: "2016-09-17",
        end_date: "2016-09-17",
        created_at: "2014-12-15T08:00:46+00:00",
        updated_at: "2023-04-02T18:15:50+00:00",
      },
      ranking: {
        rank: 18,
      },
    },
    {
      node: {
        id: 35180,
        title: "3-gatsu no Lion 2nd Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/3/88469.jpg",
          large: "https://cdn.myanimelist.net/images/anime/3/88469l.jpg",
        },
        alternative_titles: {
          synonyms: ["Sangatsu no Lion Second Season"],
          en: "March Comes In Like a Lion 2nd Season",
          ja: "3月のライオン 第2シリーズ",
        },
        start_date: "2017-10-14",
        end_date: "2018-03-31",
        created_at: "2017-03-18T15:14:28+00:00",
        updated_at: "2023-11-03T21:50:36+00:00",
      },
      ranking: {
        rank: 19,
      },
    },
    {
      node: {
        id: 2904,
        title: "Code Geass: Hangyaku no Lelouch R2",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1088/135089.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1088/135089l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Code Geass: Hangyaku no Lelouch 2nd Season",
            "Code Geass: Hangyaku no Lelouch Second Season",
          ],
          en: "Code Geass: Lelouch of the Rebellion R2",
          ja: "コードギアス 反逆のルルーシュ 続編",
        },
        start_date: "2008-04-06",
        end_date: "2008-09-28",
        created_at: "2007-08-02T15:35:02+00:00",
        updated_at: "2023-04-02T19:09:17+00:00",
      },
      ranking: {
        rank: 20,
      },
    },
    {
      node: {
        id: 15335,
        title: "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/10/51723.jpg",
          large: "https://cdn.myanimelist.net/images/anime/10/51723l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Gintama: The Final Chapter - Be Forever Yorozuya",
            "Gintama Movie 2",
          ],
          en: "Gintama: The Movie: The Final Chapter: Be Forever Yorozuya",
          ja: "劇場版 銀魂 完結篇 万事屋よ永遠なれ",
        },
        start_date: "2013-07-06",
        end_date: "2013-07-06",
        created_at: "2012-08-26T22:06:53+00:00",
        updated_at: "2024-05-08T21:23:59+00:00",
      },
      ranking: {
        rank: 21,
      },
    },
    {
      node: {
        id: 54492,
        title: "Kusuriya no Hitorigoto",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1708/138033.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1708/138033l.jpg",
        },
        alternative_titles: {
          synonyms: ["The Pharmacist's Monologue", "Drugstore Soliloquy"],
          en: "The Apothecary Diaries",
          ja: "薬屋のひとりごと",
        },
        start_date: "2023-10-22",
        end_date: "2024-03-24",
        created_at: "2023-02-16T01:27:09+00:00",
        updated_at: "2024-03-23T22:38:45+00:00",
      },
      ranking: {
        rank: 22,
      },
    },
    {
      node: {
        id: 19,
        title: "Monster",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/10/18793.jpg",
          large: "https://cdn.myanimelist.net/images/anime/10/18793l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Monster",
          ja: "モンスター",
        },
        start_date: "2004-04-07",
        end_date: "2005-09-28",
        created_at: "2005-11-11T01:15:59+00:00",
        updated_at: "2023-04-02T18:17:36+00:00",
      },
      ranking: {
        rank: 23,
      },
    },
    {
      node: {
        id: 37491,
        title: "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1776/96566.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1776/96566l.jpg",
        },
        alternative_titles: {
          synonyms: ["Gintama.: Silver Soul Arc 2"],
          en: "Gintama.: Silver Soul Arc - Second Half War",
          ja: "銀魂. 銀ノ魂篇 後半戦",
        },
        start_date: "2018-07-09",
        end_date: "2018-10-08",
        created_at: "2018-03-16T00:47:26+00:00",
        updated_at: "2023-08-29T00:44:00+00:00",
      },
      ranking: {
        rank: 24,
      },
    },
    {
      node: {
        id: 51535,
        title: "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1279/131078.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1279/131078l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Shingeki no Kyojin: The Final Season Part 3",
            "Shingeki no Kyojin Season 4",
            "Attack on Titan Season 4",
          ],
          en: "Attack on Titan: Final Season - The Final Chapters",
          ja: "進撃の巨人 The Final Season完結編",
        },
        start_date: "2023-03-04",
        end_date: "2023-11-05",
        created_at: "2022-04-03T15:34:50+00:00",
        updated_at: "2024-08-17T18:47:47+00:00",
      },
      ranking: {
        rank: 25,
      },
    },
    {
      node: {
        id: 35247,
        title: "Owarimonogatari 2nd Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/6/87322.jpg",
          large: "https://cdn.myanimelist.net/images/anime/6/87322l.jpg",
        },
        alternative_titles: {
          synonyms: ["End Story 2nd Season"],
          en: "Owarimonogatari Second Season",
          ja: "終物語",
        },
        start_date: "2017-08-12",
        end_date: "2017-08-13",
        created_at: "2017-03-25T01:32:08+00:00",
        updated_at: "2024-02-04T16:41:33+00:00",
      },
      ranking: {
        rank: 26,
      },
    },
    {
      node: {
        id: 37987,
        title: "Violet Evergarden Movie",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1825/110716.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1825/110716l.jpg",
        },
        alternative_titles: {
          synonyms: ["Gekijouban Violet Evergarden"],
          en: "Violet Evergarden: The Movie",
          ja: "劇場版 ヴァイオレット・エヴァーガーデン",
        },
        start_date: "2020-09-18",
        end_date: "2020-09-18",
        created_at: "2018-07-21T02:48:46+00:00",
        updated_at: "2023-04-02T18:16:56+00:00",
      },
      ranking: {
        rank: 27,
      },
    },
    {
      node: {
        id: 32281,
        title: "Kimi no Na wa.",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
          large: "https://cdn.myanimelist.net/images/anime/5/87048l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Your Name.",
          ja: "君の名は。",
        },
        start_date: "2016-08-26",
        end_date: "2016-08-26",
        created_at: "2015-12-10T09:41:12+00:00",
        updated_at: "2023-10-30T23:04:32+00:00",
      },
      ranking: {
        rank: 28,
      },
    },
    {
      node: {
        id: 40682,
        title: "Kingdom 3rd Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1443/111830.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1443/111830l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Kingdom: Season 3",
          ja: "キングダム 第3シリーズ",
        },
        start_date: "2020-04-06",
        end_date: "2021-10-17",
        created_at: "2019-11-07T19:45:59+00:00",
        updated_at: "2024-03-08T16:22:56+00:00",
      },
      ranking: {
        rank: 29,
      },
    },
    {
      node: {
        id: 49387,
        title: "Vinland Saga Season 2",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1170/124312.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Vinland Saga Season 2",
          ja: "ヴィンランド・サガ SEASON2",
        },
        start_date: "2023-01-10",
        end_date: "2023-06-20",
        created_at: "2021-07-07T12:25:57+00:00",
        updated_at: "2023-10-16T06:33:50+00:00",
      },
      ranking: {
        rank: 30,
      },
    },
    {
      node: {
        id: 55690,
        title: "Boku no Kokoro no Yabai Yatsu 2nd Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1643/138581.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1643/138581l.jpg",
        },
        alternative_titles: {
          synonyms: ["Bokuyaba"],
          en: "The Dangers in My Heart Season 2",
          ja: "僕の心のヤバイやつ 第2期",
        },
        start_date: "2024-01-07",
        end_date: "2024-03-31",
        created_at: "2023-06-17T17:06:30+00:00",
        updated_at: "2024-05-01T04:17:56+00:00",
      },
      ranking: {
        rank: 31,
      },
    },
    {
      node: {
        id: 36838,
        title: "Gintama.: Shirogane no Tamashii-hen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/12/89603.jpg",
          large: "https://cdn.myanimelist.net/images/anime/12/89603l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Gintama.: Silver Soul Arc",
          ja: "銀魂. 銀ノ魂篇",
        },
        start_date: "2018-01-08",
        end_date: "2018-03-26",
        created_at: "2017-11-20T05:11:48+00:00",
        updated_at: "2023-01-05T16:33:51+00:00",
      },
      ranking: {
        rank: 32,
      },
    },
    {
      node: {
        id: 51009,
        title: "Jujutsu Kaisen 2nd Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1792/138022l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Jujutsu Kaisen: Kaigyoku Gyokusetsu",
            "Jujutsu Kaisen: Shibuya Jihen",
            "Sorcery Fight",
            "JJK",
          ],
          en: "Jujutsu Kaisen Season 2",
          ja: "呪術廻戦 懐玉・玉折／渋谷事変",
        },
        start_date: "2023-07-06",
        end_date: "2023-12-28",
        created_at: "2022-02-12T10:05:19+00:00",
        updated_at: "2024-08-25T19:35:14+00:00",
      },
      ranking: {
        rank: 33,
      },
    },
    {
      node: {
        id: 37510,
        title: "Mob Psycho 100 II",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1918/96303.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1918/96303l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Mob Psycho 100 2nd Season",
            "Mob Psycho Hyaku",
            "Mob Psycho One Hundred",
          ],
          en: "Mob Psycho 100 II",
          ja: "モブサイコ100 II",
        },
        start_date: "2019-01-07",
        end_date: "2019-04-01",
        created_at: "2018-03-18T10:14:35+00:00",
        updated_at: "2023-04-02T18:19:53+00:00",
      },
      ranking: {
        rank: 34,
      },
    },
    {
      node: {
        id: 31758,
        title: "Kizumonogatari III: Reiketsu-hen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1084/112813.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1084/112813l.jpg",
        },
        alternative_titles: {
          synonyms: ["Koyomi Vamp"],
          en: "Kizumonogatari Part 3: Cold-Blooded",
          ja: "傷物語〈Ⅲ冷血篇〉",
        },
        start_date: "2017-01-06",
        end_date: "2017-01-06",
        created_at: "2015-10-03T17:22:50+00:00",
        updated_at: "2023-09-10T04:31:33+00:00",
      },
      ranking: {
        rank: 35,
      },
    },
    {
      node: {
        id: 40028,
        title: "Shingeki no Kyojin: The Final Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1000/110531l.jpg",
        },
        alternative_titles: {
          synonyms: ["Shingeki no Kyojin Season 4", "Attack on Titan Season 4"],
          en: "Attack on Titan: Final Season",
          ja: "進撃の巨人 The Final Season",
        },
        start_date: "2020-12-07",
        end_date: "2021-03-29",
        created_at: "2019-06-30T16:47:58+00:00",
        updated_at: "2024-07-05T07:08:22+00:00",
      },
      ranking: {
        rank: 36,
      },
    },
    {
      node: {
        id: 47917,
        title: "Bocchi the Rock!",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1448/127956.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1448/127956l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Bocchi the Rock!",
          ja: "ぼっち・ざ・ろっく！",
        },
        start_date: "2022-10-09",
        end_date: "2022-12-25",
        created_at: "2021-02-18T15:21:45+00:00",
        updated_at: "2023-05-21T10:49:42+00:00",
      },
      ranking: {
        rank: 37,
      },
    },
    {
      node: {
        id: 32935,
        title: "Haikyuu!! Karasuno Koukou vs. Shiratorizawa Gakuen Koukou",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/7/81992.jpg",
          large: "https://cdn.myanimelist.net/images/anime/7/81992l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Haikyuu!! Third Season",
            "Haikyuu!! Karasuno High VS Shiratorizawa Academy",
          ],
          en: "Haikyu!! 3rd Season",
          ja: "ハイキュー!! 烏野高校 VS 白鳥沢学園高校",
        },
        start_date: "2016-10-08",
        end_date: "2016-12-10",
        created_at: "2016-03-16T14:25:47+00:00",
        updated_at: "2023-01-05T17:16:57+00:00",
      },
      ranking: {
        rank: 38,
      },
    },
    {
      node: {
        id: 263,
        title: "Hajime no Ippo",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/4/86334.jpg",
          large: "https://cdn.myanimelist.net/images/anime/4/86334l.jpg",
        },
        alternative_titles: {
          synonyms: ["The First Step", "Hajime no Ippo: The Fighting"],
          en: "Fighting Spirit",
          ja: "はじめの一歩 THE FIGHTING!",
        },
        start_date: "2000-10-04",
        end_date: "2002-03-27",
        created_at: "2005-11-13T07:03:04+00:00",
        updated_at: "2023-04-02T18:20:56+00:00",
      },
      ranking: {
        rank: 39,
      },
    },
    {
      node: {
        id: 199,
        title: "Sen to Chihiro no Kamikakushi",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
          large: "https://cdn.myanimelist.net/images/anime/6/79597l.jpg",
        },
        alternative_titles: {
          synonyms: ["Sen and Chihiro's Spiriting Away"],
          en: "Spirited Away",
          ja: "千と千尋の神隠し",
        },
        start_date: "2001-07-20",
        end_date: "2001-07-20",
        created_at: "2005-11-12T07:05:54+00:00",
        updated_at: "2023-04-02T18:20:13+00:00",
      },
      ranking: {
        rank: 40,
      },
    },
    {
      node: {
        id: 52198,
        title: "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1670/130060.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1670/130060l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Kaguya-sama: Love is War -The First Kiss That Never Ends-",
          ja: "かぐや様は告らせたい -ファーストキッスは終わらない-",
        },
        start_date: "2022-12-17",
        end_date: "2022-12-17",
        created_at: "2022-06-24T16:12:12+00:00",
        updated_at: "2024-06-24T06:15:47+00:00",
      },
      ranking: {
        rank: 41,
      },
    },
    {
      node: {
        id: 17074,
        title: "Monogatari Series: Second Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1807/121534.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1807/121534l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Nekomonogatari: Shiro",
            "Kabukimonogatari",
            "Otorimonogatari",
            "Onimonogatari",
            "Koimonogatari",
          ],
          en: "Monogatari Series: Second Season",
          ja: "〈物語〉シリーズ セカンドシーズン",
        },
        start_date: "2013-07-07",
        end_date: "2013-12-29",
        created_at: "2013-01-07T22:56:16+00:00",
        updated_at: "2024-06-23T22:42:36+00:00",
      },
      ranking: {
        rank: 42,
      },
    },
    {
      node: {
        id: 48583,
        title: "Shingeki no Kyojin: The Final Season Part 2",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1948/120625.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1948/120625l.jpg",
        },
        alternative_titles: {
          synonyms: ["Shingeki no Kyojin Season 4", "Attack on Titan Season 4"],
          en: "Attack on Titan: Final Season Part 2",
          ja: "進撃の巨人 The Final Season Part 2",
        },
        start_date: "2022-01-10",
        end_date: "2022-04-04",
        created_at: "2021-03-28T16:06:18+00:00",
        updated_at: "2023-11-04T07:13:33+00:00",
      },
      ranking: {
        rank: 43,
      },
    },
    {
      node: {
        id: 37521,
        title: "Vinland Saga",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1500/103005l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "",
          ja: "ヴィンランド・サガ",
        },
        start_date: "2019-07-08",
        end_date: "2019-12-30",
        created_at: "2018-03-19T13:28:36+00:00",
        updated_at: "2023-10-16T06:33:35+00:00",
      },
      ranking: {
        rank: 44,
      },
    },
    {
      node: {
        id: 45649,
        title: "The First Slam Dunk",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1745/129284.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1745/129284l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "",
          ja: "THE FIRST SLAM DUNK",
        },
        start_date: "2022-12-03",
        end_date: "2022-12-03",
        created_at: "2021-01-07T05:16:26+00:00",
        updated_at: "2024-04-05T19:47:22+00:00",
      },
      ranking: {
        rank: 45,
      },
    },
    {
      node: {
        id: 1,
        title: "Cowboy Bebop",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
          large: "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Cowboy Bebop",
          ja: "カウボーイビバップ",
        },
        start_date: "1998-04-03",
        end_date: "1999-04-24",
        created_at: "2005-06-30T05:01:56+00:00",
        updated_at: "2023-09-16T14:11:11+00:00",
      },
      ranking: {
        rank: 46,
      },
    },
    {
      node: {
        id: 39894,
        title: "Hibike! Euphonium 3",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1216/142086.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1216/142086l.jpg",
        },
        alternative_titles: {
          synonyms: ["Hibike! Euphonium Third Season"],
          en: "Sound! Euphonium 3",
          ja: "響け！ユーフォニアム3",
        },
        start_date: "2024-04-07",
        end_date: "2024-06-30",
        created_at: "2019-06-01T10:15:47+00:00",
        updated_at: "2024-06-08T15:39:42+00:00",
      },
      ranking: {
        rank: 47,
      },
    },
    {
      node: {
        id: 47778,
        title: "Kimetsu no Yaiba: Yuukaku-hen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1908/120036.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1908/120036l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
          ja: "鬼滅の刃 遊郭編",
        },
        start_date: "2021-12-05",
        end_date: "2022-02-13",
        created_at: "2021-02-14T12:53:33+00:00",
        updated_at: "2024-02-05T09:24:55+00:00",
      },
      ranking: {
        rank: 48,
      },
    },
    {
      node: {
        id: 50160,
        title: "Kingdom 4th Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1566/122794.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1566/122794l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Kingdom: Season 4",
          ja: "キングダム 第4シリーズ",
        },
        start_date: "2022-04-10",
        end_date: "2022-10-02",
        created_at: "2021-10-17T17:36:00+00:00",
        updated_at: "2023-01-06T14:52:30+00:00",
      },
      ranking: {
        rank: 49,
      },
    },
    {
      node: {
        id: 53223,
        title: "Kingdom 5th Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1050/139641.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1050/139641l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Kingdom: Season 5",
          ja: "キングダム 第5シリーズ",
        },
        start_date: "2024-01-14",
        end_date: "2024-03-31",
        created_at: "2022-10-01T17:34:04+00:00",
        updated_at: "2024-03-24T01:07:51+00:00",
      },
      ranking: {
        rank: 50,
      },
    },
    {
      node: {
        id: 44074,
        title: "Shiguang Dailiren",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1135/114867.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1135/114867l.jpg",
        },
        alternative_titles: {
          synonyms: ["時光代理人", "Jikou Dairinin", "Shi Guang Dai Li Ren"],
          en: "Link Click",
          ja: "时光代理人",
        },
        start_date: "2021-04-30",
        end_date: "2021-07-09",
        created_at: "2020-11-21T15:26:51+00:00",
        updated_at: "2023-10-12T08:13:26+00:00",
      },
      ranking: {
        rank: 51,
      },
    },
    {
      node: {
        id: 2921,
        title: "Ashita no Joe 2",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/3/45028.jpg",
          large: "https://cdn.myanimelist.net/images/anime/3/45028l.jpg",
        },
        alternative_titles: {
          synonyms: ["Rocky Joe 2"],
          en: "Tomorrow's Joe 2",
          ja: "あしたのジョー２",
        },
        start_date: "1980-10-13",
        end_date: "1981-08-31",
        created_at: "2007-08-05T11:33:15+00:00",
        updated_at: "2023-01-06T15:14:22+00:00",
      },
      ranking: {
        rank: 52,
      },
    },
    {
      node: {
        id: 24701,
        title: "Mushishi Zoku Shou 2nd Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/9/68095.jpg",
          large: "https://cdn.myanimelist.net/images/anime/9/68095l.jpg",
        },
        alternative_titles: {
          synonyms: ["Mushishi Zoku Shou 2nd Season"],
          en: "Mushi-shi: Next Passage Part 2",
          ja: "蟲師 続章",
        },
        start_date: "2014-10-19",
        end_date: "2014-12-21",
        created_at: "2014-06-16T10:15:21+00:00",
        updated_at: "2023-04-20T11:10:56+00:00",
      },
      ranking: {
        rank: 53,
      },
    },
    {
      node: {
        id: 21,
        title: "One Piece",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg",
        },
        alternative_titles: {
          synonyms: ["OP"],
          en: "One Piece",
          ja: "ONE PIECE",
        },
        start_date: "1999-10-20",
        created_at: "2005-11-11T01:20:50+00:00",
        updated_at: "2023-12-17T16:17:24+00:00",
      },
      ranking: {
        rank: 54,
      },
    },
    {
      node: {
        id: 50172,
        title: "Mob Psycho 100 III",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1228/125011.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1228/125011l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Mob Psycho 100 3rd Season",
            "Mob Psycho Hyaku",
            "Mob Psycho One Hundred",
          ],
          en: "Mob Psycho 100 III",
          ja: "モブサイコ100 III",
        },
        start_date: "2022-10-06",
        end_date: "2022-12-22",
        created_at: "2021-10-19T12:54:06+00:00",
        updated_at: "2022-12-28T04:54:54+00:00",
      },
      ranking: {
        rank: 55,
      },
    },
    {
      node: {
        id: 33095,
        title: "Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1493/124765.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1493/124765l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Shouwa Genroku Rakugo Shinjuu 2nd Season",
            "Showa and Genroku Era Lover's Suicide Through Rakugo 2nd Season",
          ],
          en: "Descending Stories: Showa Genroku Rakugo Shinju",
          ja: "昭和元禄落語心中～助六再び篇～",
        },
        start_date: "2017-01-07",
        end_date: "2017-03-25",
        created_at: "2016-04-01T18:30:32+00:00",
        updated_at: "2023-04-02T18:21:34+00:00",
      },
      ranking: {
        rank: 56,
      },
    },
    {
      node: {
        id: 48569,
        title: "86 Part 2",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1321/117508.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1321/117508l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "86 Eighty-Six Part 2",
          ja: "86―エイティシックス―",
        },
        start_date: "2021-10-03",
        end_date: "2022-03-19",
        created_at: "2021-03-27T07:57:31+00:00",
        updated_at: "2023-12-28T08:55:42+00:00",
      },
      ranking: {
        rank: 57,
      },
    },
    {
      node: {
        id: 1575,
        title: "Code Geass: Hangyaku no Lelouch",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1032/135088.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1032/135088l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Code Geass: Lelouch of the Rebellion",
          ja: "コードギアス 反逆のルルーシュ",
        },
        start_date: "2006-10-06",
        end_date: "2007-07-29",
        created_at: "2006-10-15T12:17:18+00:00",
        updated_at: "2023-04-02T18:24:34+00:00",
      },
      ranking: {
        rank: 58,
      },
    },
    {
      node: {
        id: 58125,
        title: "Look Back",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1716/142633.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1716/142633l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "",
          ja: "ルックバック",
        },
        start_date: "2024-06-28",
        end_date: "2024-06-28",
        created_at: "2024-02-13T15:24:58+00:00",
        updated_at: "2024-05-11T19:22:30+00:00",
      },
      ranking: {
        rank: 59,
      },
    },
    {
      node: {
        id: 44,
        title: "Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1656/137618.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1656/137618l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Rurouni Kenshin: Tsuiokuhen",
            "Rurouni Kenshin: Reminiscence",
          ],
          en: "Samurai X: Trust and Betrayal",
          ja: "るろうに剣心―明治剣客浪漫譚―追憶編",
        },
        start_date: "1999-02-20",
        end_date: "1999-09-22",
        created_at: "2005-11-11T05:54:34+00:00",
        updated_at: "2023-12-14T09:55:38+00:00",
      },
      ranking: {
        rank: 60,
      },
    },
    {
      node: {
        id: 21939,
        title: "Mushishi Zoku Shou",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/13/58533.jpg",
          large: "https://cdn.myanimelist.net/images/anime/13/58533l.jpg",
        },
        alternative_titles: {
          synonyms: ["Mushi-shi Zoku Shou", "Mushishi: The Next Chapter"],
          en: "Mushi-shi: Next Passage Part 1",
          ja: "蟲師 続章",
        },
        start_date: "2014-04-05",
        end_date: "2014-06-21",
        created_at: "2014-01-04T16:29:06+00:00",
        updated_at: "2023-04-20T11:10:21+00:00",
      },
      ranking: {
        rank: 61,
      },
    },
    {
      node: {
        id: 53998,
        title: "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1164/138058.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1164/138058l.jpg",
        },
        alternative_titles: {
          synonyms: ["Bleach: Thousand-Year Blood War Arc Part 2"],
          en: "Bleach: Thousand-Year Blood War - The Separation",
          ja: "BLEACH 千年血戦篇-訣別譚-",
        },
        start_date: "2023-07-08",
        end_date: "2023-09-30",
        created_at: "2022-12-26T01:14:19+00:00",
        updated_at: "2024-01-29T21:22:54+00:00",
      },
      ranking: {
        rank: 62,
      },
    },
    {
      node: {
        id: 245,
        title: "Great Teacher Onizuka",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/13/11460.jpg",
          large: "https://cdn.myanimelist.net/images/anime/13/11460l.jpg",
        },
        alternative_titles: {
          synonyms: ["GTO", "GTO - The Animation"],
          en: "Great Teacher Onizuka",
          ja: "グレート・ティーチャー・オニヅカ",
        },
        start_date: "1999-06-30",
        end_date: "2000-09-17",
        created_at: "2005-11-13T02:44:09+00:00",
        updated_at: "2023-06-25T06:57:35+00:00",
      },
      ranking: {
        rank: 63,
      },
    },
    {
      node: {
        id: 40434,
        title: "Mo Dao Zu Shi: Wanjie Pian",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1634/116782.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1634/116782l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Grandmaster of Demonic Cultivation 3",
            "The Founder of Diabolism 3",
            "Mo Dao Zu Shi 3rd Season",
            "Mo Dao Zu Shi Final Arc",
          ],
          en: "The Founder of Diabolism Season 3",
          ja: "魔道祖师 完结篇",
        },
        start_date: "2021-08-07",
        end_date: "2021-10-16",
        created_at: "2019-09-23T21:36:06+00:00",
        updated_at: "2023-04-02T18:30:41+00:00",
      },
      ranking: {
        rank: 64,
      },
    },
    {
      node: {
        id: 33352,
        title: "Violet Evergarden",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1795/95088l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Violet Evergarden",
          ja: "ヴァイオレット・エヴァーガーデン",
        },
        start_date: "2018-01-11",
        end_date: "2018-04-05",
        created_at: "2016-05-27T11:13:55+00:00",
        updated_at: "2023-01-09T14:49:13+00:00",
      },
      ranking: {
        rank: 65,
      },
    },
    {
      node: {
        id: 50399,
        title: "Tian Guan Cifu Er",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1203/139210.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1203/139210l.jpg",
        },
        alternative_titles: {
          synonyms: ["Tian Guan Cifu 2nd Season", "Tian Guan Ci Fu"],
          en: "Heaven Official's Blessing Season 2",
          ja: "天官賜福 貳",
        },
        start_date: "2023-10-18",
        end_date: "2024-01-17",
        created_at: "2021-11-20T13:20:44+00:00",
        updated_at: "2024-04-26T18:47:30+00:00",
      },
      ranking: {
        rank: 66,
      },
    },
    {
      node: {
        id: 5258,
        title: "Hajime no Ippo: New Challenger",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/8/56617.jpg",
          large: "https://cdn.myanimelist.net/images/anime/8/56617l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Hajime no Ippo New Series",
            "Hajime no Ippo Season II",
            "Hajime no Ippo 2",
          ],
          en: "Fighting Spirit: New Challenger",
          ja: "はじめの一歩 新シリーズ",
        },
        start_date: "2009-01-07",
        end_date: "2009-07-01",
        created_at: "2008-09-15T13:49:59+00:00",
        updated_at: "2023-01-09T14:58:19+00:00",
      },
      ranking: {
        rank: 67,
      },
    },
    {
      node: {
        id: 431,
        title: "Howl no Ugoku Shiro",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1470/138723.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1470/138723l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Howl's Moving Castle",
          ja: "ハウルの動く城",
        },
        start_date: "2004-11-20",
        end_date: "2004-11-20",
        created_at: "2005-12-26T06:56:40+00:00",
        updated_at: "2023-09-28T00:51:40+00:00",
      },
      ranking: {
        rank: 68,
      },
    },
    {
      node: {
        id: 52742,
        title: "Haikyuu!! Movie: Gomisuteba no Kessen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1665/140360.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1665/140360l.jpg",
        },
        alternative_titles: {
          synonyms: ["Haikyu!! Final Movie"],
          en: "Haikyu!! Movie: The Dumpster Battle",
          ja: "劇場版ハイキュー!! ゴミ捨て場の決戦",
        },
        start_date: "2024-02-16",
        end_date: "2024-02-16",
        created_at: "2022-08-13T09:10:00+00:00",
        updated_at: "2024-07-31T00:44:44+00:00",
      },
      ranking: {
        rank: 69,
      },
    },
    {
      node: {
        id: 164,
        title: "Mononoke Hime",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/7/75919.jpg",
          large: "https://cdn.myanimelist.net/images/anime/7/75919l.jpg",
        },
        alternative_titles: {
          synonyms: ["Mononoke Hime"],
          en: "Princess Mononoke",
          ja: "もののけ姫",
        },
        start_date: "1997-07-12",
        end_date: "1997-07-12",
        created_at: "2005-11-12T05:38:23+00:00",
        updated_at: "2023-04-02T18:26:51+00:00",
      },
      ranking: {
        rank: 70,
      },
    },
    {
      node: {
        id: 45576,
        title: "Mushoku Tensei: Isekai Ittara Honki Dasu Part 2",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1028/117777.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1028/117777l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Mushoku Tensei: Jobless Reincarnation Part 2",
          ja: "無職転生 ～異世界行ったら本気だす～ 第2クール",
        },
        start_date: "2021-10-04",
        end_date: "2021-12-20",
        created_at: "2020-12-27T13:27:52+00:00",
        updated_at: "2023-09-06T04:54:46+00:00",
      },
      ranking: {
        rank: 71,
      },
    },
    {
      node: {
        id: 46102,
        title: "Odd Taxi",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1981/113348.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1981/113348l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Odd Taxi",
          ja: "オッドタクシー",
        },
        start_date: "2021-04-06",
        end_date: "2021-06-29",
        created_at: "2021-01-15T10:22:31+00:00",
        updated_at: "2023-10-03T17:54:19+00:00",
      },
      ranking: {
        rank: 72,
      },
    },
    {
      node: {
        id: 457,
        title: "Mushishi",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/2/73862.jpg",
          large: "https://cdn.myanimelist.net/images/anime/2/73862l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Mushi-Shi",
          ja: "蟲師",
        },
        start_date: "2005-10-23",
        end_date: "2006-06-19",
        created_at: "2005-12-27T08:59:20+00:00",
        updated_at: "2023-04-20T11:08:49+00:00",
      },
      ranking: {
        rank: 73,
      },
    },
    {
      node: {
        id: 33050,
        title: "Fate/stay night Movie: Heaven's Feel - III. Spring Song",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1142/112957.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1142/112957l.jpg",
        },
        alternative_titles: {
          synonyms: ["Fate/stay night Movie: Heaven's Feel 3"],
          en: "Fate/stay night: Heaven's Feel - III. Spring Song",
          ja: "劇場版「Fate/stay night [Heaven's Feel] III.spring song」",
        },
        start_date: "2020-08-15",
        end_date: "2020-08-15",
        created_at: "2016-03-27T07:00:57+00:00",
        updated_at: "2023-01-23T21:55:31+00:00",
      },
      ranking: {
        rank: 74,
      },
    },
    {
      node: {
        id: 54898,
        title: "Bungou Stray Dogs 5th Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1161/136691.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1161/136691l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Bungo Stray Dogs 5",
          ja: "文豪ストレイドッグス",
        },
        start_date: "2023-07-12",
        end_date: "2023-09-20",
        created_at: "2023-03-29T14:34:27+00:00",
        updated_at: "2023-10-09T06:37:49+00:00",
      },
      ranking: {
        rank: 75,
      },
    },
    {
      node: {
        id: 23273,
        title: "Shigatsu wa Kimi no Uso",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1405/143284.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1405/143284l.jpg",
        },
        alternative_titles: {
          synonyms: ["Kimiuso"],
          en: "Your Lie in April",
          ja: "四月は君の嘘",
        },
        start_date: "2014-10-10",
        end_date: "2015-03-20",
        created_at: "2014-03-21T13:04:16+00:00",
        updated_at: "2024-05-25T19:13:52+00:00",
      },
      ranking: {
        rank: 76,
      },
    },
    {
      node: {
        id: 34599,
        title: "Made in Abyss",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/6/86733.jpg",
          large: "https://cdn.myanimelist.net/images/anime/6/86733l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Made in Abyss",
          ja: "メイドインアビス",
        },
        start_date: "2017-07-07",
        end_date: "2017-09-29",
        created_at: "2016-12-21T16:02:59+00:00",
        updated_at: "2024-03-06T12:43:23+00:00",
      },
      ranking: {
        rank: 77,
      },
    },
    {
      node: {
        id: 11665,
        title: "Natsume Yuujinchou Shi",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/3/37449.jpg",
          large: "https://cdn.myanimelist.net/images/anime/3/37449l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Natsume Yuujinchou Four",
            "Natsume Yuujinchou 4",
            "Natsume Yujincho 4",
          ],
          en: "Natsume's Book of Friends Season 4",
          ja: "夏目友人帳 肆",
        },
        start_date: "2012-01-03",
        end_date: "2012-03-27",
        created_at: "2011-09-21T16:10:30+00:00",
        updated_at: "2024-03-06T11:35:31+00:00",
      },
      ranking: {
        rank: 78,
      },
    },
    {
      node: {
        id: 40591,
        title: "Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1764/106659.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1764/106659l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Kaguya Wants to be Confessed To: The Geniuses' War of Love and Brains 2nd Season",
            "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 2nd Season",
            "Kaguya-sama: Love is War 2nd Season",
          ],
          en: "Kaguya-sama: Love is War?",
          ja: "かぐや様は告らせたい？～天才たちの恋愛頭脳戦～",
        },
        start_date: "2020-04-11",
        end_date: "2020-06-27",
        created_at: "2019-10-19T06:55:10+00:00",
        updated_at: "2024-07-01T02:42:36+00:00",
      },
      ranking: {
        rank: 79,
      },
    },
    {
      node: {
        id: 56538,
        title: "Kimi ni Todoke 3rd Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1617/142448.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1617/142448l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Kimi ni Todoke: From Me to You Season 3",
          ja: "君に届け3RD SEASON",
        },
        start_date: "2024-08-01",
        end_date: "2024-08-01",
        created_at: "2023-09-03T15:18:59+00:00",
        updated_at: "2024-08-01T11:06:15+00:00",
      },
      ranking: {
        rank: 80,
      },
    },
    {
      node: {
        id: 49413,
        title: "Shiguang Dailiren II",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1897/137108.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1897/137108l.jpg",
        },
        alternative_titles: {
          synonyms: ["Link Click 2nd Season", "時光代理人 -LINK CLICK- II"],
          en: "Link Click Season 2",
          ja: "时光代理人 第二季",
        },
        start_date: "2023-07-14",
        end_date: "2023-09-22",
        created_at: "2021-07-10T04:59:41+00:00",
        updated_at: "2024-03-30T21:41:06+00:00",
      },
      ranking: {
        rank: 81,
      },
    },
    {
      node: {
        id: 35760,
        title: "Shingeki no Kyojin Season 3",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1173/92110.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1173/92110l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Attack on Titan Season 3",
          ja: "進撃の巨人 Season3",
        },
        start_date: "2018-07-23",
        end_date: "2018-10-15",
        created_at: "2017-06-17T14:15:58+00:00",
        updated_at: "2024-07-05T07:07:23+00:00",
      },
      ranking: {
        rank: 82,
      },
    },
    {
      node: {
        id: 2001,
        title: "Tengen Toppa Gurren Lagann",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/4/5123.jpg",
          large: "https://cdn.myanimelist.net/images/anime/4/5123l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Tengen Toppa Gurren-Lagann",
            "Making Break-Through Gurren Lagann",
            "Heavenly Breakthrough Gurren Lagann",
            "TTGL",
            "Gurren Laggan",
          ],
          en: "Gurren Lagann",
          ja: "天元突破グレンラガン",
        },
        start_date: "2007-04-01",
        end_date: "2007-09-30",
        created_at: "2007-03-03T15:02:10+00:00",
        updated_at: "2023-01-09T15:19:49+00:00",
      },
      ranking: {
        rank: 83,
      },
    },
    {
      node: {
        id: 52034,
        title: '"Oshi no Ko"',
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1812/134736.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1812/134736l.jpg",
        },
        alternative_titles: {
          synonyms: ["My Star"],
          en: "[Oshi No Ko]",
          ja: "【推しの子】",
        },
        start_date: "2023-04-12",
        end_date: "2023-06-28",
        created_at: "2022-06-09T13:01:38+00:00",
        updated_at: "2024-07-09T06:00:59+00:00",
      },
      ranking: {
        rank: 84,
      },
    },
    {
      node: {
        id: 1535,
        title: "Death Note",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1079/138100.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1079/138100l.jpg",
        },
        alternative_titles: {
          synonyms: ["DN"],
          en: "Death Note",
          ja: "デスノート",
        },
        start_date: "2006-10-04",
        end_date: "2007-06-27",
        created_at: "2006-10-04T03:39:19+00:00",
        updated_at: "2024-03-06T11:24:14+00:00",
      },
      ranking: {
        rank: 85,
      },
    },
    {
      node: {
        id: 28891,
        title: "Haikyuu!! Second Season",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/9/76662.jpg",
          large: "https://cdn.myanimelist.net/images/anime/9/76662l.jpg",
        },
        alternative_titles: {
          synonyms: ["Haikyuu!! Second Season"],
          en: "Haikyu!! 2nd Season",
          ja: "ハイキュー!! セカンドシーズン",
        },
        start_date: "2015-10-04",
        end_date: "2016-03-27",
        created_at: "2014-12-18T14:39:57+00:00",
        updated_at: "2023-01-09T15:13:24+00:00",
      },
      ranking: {
        rank: 86,
      },
    },
    {
      node: {
        id: 41084,
        title: "Made in Abyss: Retsujitsu no Ougonkyou",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1864/122519.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1864/122519l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Made in Abyss: The Golden City of the Scorching Sun",
          ja: "メイドインアビス 烈日の黄金郷",
        },
        start_date: "2022-07-06",
        end_date: "2022-09-28",
        created_at: "2020-01-18T06:09:01+00:00",
        updated_at: "2024-03-28T11:09:25+00:00",
      },
      ranking: {
        rank: 87,
      },
    },
    {
      node: {
        id: 22135,
        title: "Ping Pong the Animation",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/10/58041.jpg",
          large: "https://cdn.myanimelist.net/images/anime/10/58041l.jpg",
        },
        alternative_titles: {
          synonyms: ["PPTA"],
          en: "Ping Pong the Animation",
          ja: "ピンポン THE ANIMATION",
        },
        start_date: "2014-04-11",
        end_date: "2014-06-20",
        created_at: "2014-01-16T17:13:48+00:00",
        updated_at: "2023-01-09T15:24:38+00:00",
      },
      ranking: {
        rank: 88,
      },
    },
    {
      node: {
        id: 36862,
        title: "Made in Abyss Movie 3: Fukaki Tamashii no Reimei",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1502/110723.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1502/110723l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Gekijouban Made in Abyss: Fukaki Tamashii no Reimei",
            "Made in Abyss: Dawn of the Deep Soul",
          ],
          en: "Made in Abyss: Dawn of the Deep Soul",
          ja: "劇場版メイドインアビス 深き魂の黎明",
        },
        start_date: "2020-01-17",
        end_date: "2020-01-17",
        created_at: "2017-11-26T07:38:22+00:00",
        updated_at: "2024-03-06T12:43:57+00:00",
      },
      ranking: {
        rank: 89,
      },
    },
    {
      node: {
        id: 34591,
        title: "Natsume Yuujinchou Roku",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/6/84416.jpg",
          large: "https://cdn.myanimelist.net/images/anime/6/84416l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Natsume Yuujinchou Season 6",
            "Natsume's Book of Friends Six",
          ],
          en: "Natsume's Book of Friends Season 6",
          ja: "夏目友人帳 陸",
        },
        start_date: "2017-04-12",
        end_date: "2017-06-21",
        created_at: "2016-12-20T17:55:17+00:00",
        updated_at: "2024-03-06T11:35:48+00:00",
      },
      ranking: {
        rank: 90,
      },
    },
    {
      node: {
        id: 52701,
        title: "Dungeon Meshi",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1711/142478.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1711/142478l.jpg",
        },
        alternative_titles: {
          synonyms: ["Dungeon Food"],
          en: "Delicious in Dungeon",
          ja: "ダンジョン飯",
        },
        start_date: "2024-01-04",
        end_date: "2024-06-13",
        created_at: "2022-08-09T14:59:13+00:00",
        updated_at: "2024-06-13T21:49:36+00:00",
      },
      ranking: {
        rank: 91,
      },
    },
    {
      node: {
        id: 42310,
        title: "Cyberpunk: Edgerunners",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1818/126435.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1818/126435l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "",
          ja: "サイバーパンク エッジランナーズ",
        },
        start_date: "2022-09-13",
        end_date: "2022-09-13",
        created_at: "2020-06-25T16:33:19+00:00",
        updated_at: "2023-11-24T05:51:17+00:00",
      },
      ranking: {
        rank: 92,
      },
    },
    {
      node: {
        id: 19647,
        title: "Hajime no Ippo: Rising",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/6/56147.jpg",
          large: "https://cdn.myanimelist.net/images/anime/6/56147l.jpg",
        },
        alternative_titles: {
          synonyms: ["Fighting Spirit: Rising", "Hajime no Ippo 3"],
          en: "Fighting Spirit: Rising",
          ja: "はじめの一歩 Rising",
        },
        start_date: "2013-10-06",
        end_date: "2014-03-30",
        created_at: "2013-07-23T23:37:42+00:00",
        updated_at: "2023-01-10T14:52:49+00:00",
      },
      ranking: {
        rank: 93,
      },
    },
    {
      node: {
        id: 7311,
        title: "Suzumiya Haruhi no Shoushitsu",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1248/112352.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1248/112352l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "The Vanishment of Haruhi Suzumiya",
            "Suzumiya Haruhi no Syoshitsu",
            "Haruhi Movie",
          ],
          en: "The Disappearance of Haruhi Suzumiya",
          ja: "涼宮ハルヒの消失",
        },
        start_date: "2010-02-06",
        end_date: "2010-02-06",
        created_at: "2009-10-08T18:06:42+00:00",
        updated_at: "2023-01-26T04:33:58+00:00",
      },
      ranking: {
        rank: 94,
      },
    },
    {
      node: {
        id: 3786,
        title: "Shin Evangelion Movie:||",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1422/113533.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1422/113533l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Evangelion: 4.0",
            "Rebuild of Evangelion",
            "Shin Evangelion Gekijouban:||",
            "Rebuild of Evangelion: Final",
          ],
          en: "Evangelion: 3.0+1.0 Thrice Upon a Time",
          ja: "シン・エヴァンゲリオン劇場版:||",
        },
        start_date: "2021-03-08",
        end_date: "2021-03-08",
        created_at: "2008-01-26T12:38:30+00:00",
        updated_at: "2024-05-07T15:24:38+00:00",
      },
      ranking: {
        rank: 95,
      },
    },
    {
      node: {
        id: 40748,
        title: "Jujutsu Kaisen",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
        },
        alternative_titles: {
          synonyms: ["Sorcery Fight", "JJK"],
          en: "Jujutsu Kaisen",
          ja: "呪術廻戦",
        },
        start_date: "2020-10-03",
        end_date: "2021-03-27",
        created_at: "2019-11-20T09:38:26+00:00",
        updated_at: "2023-10-03T00:50:03+00:00",
      },
      ranking: {
        rank: 96,
      },
    },
    {
      node: {
        id: 33,
        title: "Kenpuu Denki Berserk",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1384/119988.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1384/119988l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Berserk: The Chronicles of Wind Blades",
            "Sword-Wind Chronicle Berserk",
          ],
          en: "Berserk",
          ja: "剣風伝奇ベルセルク",
        },
        start_date: "1997-10-08",
        end_date: "1998-04-01",
        created_at: "2005-11-11T01:38:37+00:00",
        updated_at: "2023-09-16T14:04:02+00:00",
      },
      ranking: {
        rank: 97,
      },
    },
    {
      node: {
        id: 28957,
        title: "Mushishi Zoku Shou: Suzu no Shizuku",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/9/72689.jpg",
          large: "https://cdn.myanimelist.net/images/anime/9/72689l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "Mushishi Tokubetsu-hen: Suzu no Shizuku",
            "Mushishi: The Next Chapter - Drops of Bells",
          ],
          en: "",
          ja: "蟲師 続章: 鈴の雫",
        },
        start_date: "2015-05-16",
        end_date: "2015-05-16",
        created_at: "2014-12-20T17:04:21+00:00",
        updated_at: "2023-04-20T11:11:37+00:00",
      },
      ranking: {
        rank: 98,
      },
    },
    {
      node: {
        id: 38329,
        title: "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1613/102179.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1613/102179l.jpg",
        },
        alternative_titles: {
          synonyms: [],
          en: "Rascal Does Not Dream of a Dreaming Girl",
          ja: "青春ブタ野郎はゆめみる少女の夢を見ない",
        },
        start_date: "2019-06-15",
        end_date: "2019-06-15",
        created_at: "2018-09-15T09:25:58+00:00",
        updated_at: "2023-01-10T14:39:11+00:00",
      },
      ranking: {
        rank: 99,
      },
    },
    {
      node: {
        id: 37991,
        title: "JoJo no Kimyou na Bouken Part 5: Ougon no Kaze",
        main_picture: {
          medium: "https://cdn.myanimelist.net/images/anime/1572/95010.jpg",
          large: "https://cdn.myanimelist.net/images/anime/1572/95010l.jpg",
        },
        alternative_titles: {
          synonyms: [
            "JoJo's Bizarre Adventure Part 5: Golden Wind",
            "JoJo no Kimyou na Bouken Part 5: Ougon no Kaze",
            "Le Bizzarre Avventure Di GioGio Parte 5: Vento Aureo",
          ],
          en: "JoJo's Bizarre Adventure: Golden Wind",
          ja: "ジョジョの奇妙な冒険 黄金の風",
        },
        start_date: "2018-10-06",
        end_date: "2019-07-28",
        created_at: "2018-07-21T03:27:40+00:00",
        updated_at: "2023-01-10T14:55:36+00:00",
      },
      ranking: {
        rank: 100,
      },
    },
  ],
  paging: {
    next: "https://api.myanimelist.net/v2/anime/ranking?offset=100&fields=alternative_titles%2Cmain_picture%2Cstart_date%2Cend_date%2Ccreated_at%2Cupdated_at&limit=100",
  },
};
