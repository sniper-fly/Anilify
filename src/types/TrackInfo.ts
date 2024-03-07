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
  available_markets: string[]; // ユーザーのprofile.countryと一致しない場合は表示しない
};
