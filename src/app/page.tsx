"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { gql } from "@/graphql/gql";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

const formSchema = z.object({
  userName: z.string().min(1, { message: "Please enter a username" }),
});

const USER_ANIME_LIST = gql(`
  query USER_ANIME_LIST($userName: String!) {
    MediaListCollection(userName: $userName, type: ANIME) {
      lists {
        entries {
          media {
            id
            title {
              native
              romaji
              english
            }
            coverImage {
              extraLarge
              large
            }
          }
        }
      }
    }
  }
`);

export default function Home() {
  const [getAnime, { loading, error, data }] = useLazyQuery(USER_ANIME_LIST);

  function onSubmit(values: z.infer<typeof formSchema>) {
    getAnime({ variables: { userName: values.userName } });
  }

  //TODO useEffect をhookとして分離する
  useEffect(() => {
    if (!loading && !error && data) {
      // data.MediaListCollection?.lists[0]?.entries[0]?.media
      // 上記の構造の個々の配列を一つの配列にまとめる
      const medium = data.MediaListCollection?.lists
        ?.map((list) => list?.entries?.map((entry) => entry?.media) ?? [])
        .flat(1); // 空白エントリーはflatで削除される
      console.log(medium);

      // AnimeTheme API にリクエストを送る
    }
  }, [loading, error, data]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "felock",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Your AniList username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
