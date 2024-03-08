"use client";

import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { FC } from "react";

type Props = {
  sdk: SpotifyApi;
};

export const UserInfo: FC<Props> = ({ sdk }) => {
  return (
    <>
      <h1>Display your Spotify profile data</h1>

      <section id="profile">
        <h2>
          Logged in as <span id="displayName">{profile?.display_name}</span>
        </h2>
        <span id="avatar"></span>
        <ul>
          <li>
            User ID: <span id="id">{profile?.id}</span>
          </li>
          <li>
            Email: <span id="email">{profile?.email}</span>
          </li>
          <li>
            Spotify URI: <a id="uri" href={profile?.external_urls?.spotify}></a>
          </li>
          <li>
            Link:{" "}
            <a id="url" href={profile?.href}>
              {profile?.href}
            </a>
          </li>
          <li>
            {/* Profile Image: <span id="imgUrl">{profile?.images[0]?.url ?? "no profile"}</span> */}
          </li>
        </ul>
      </section>
    </>
  );
}

export default UserInfo;
