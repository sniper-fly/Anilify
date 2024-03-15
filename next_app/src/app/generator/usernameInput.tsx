import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Button } from "@/components/ui/button";

// コンポーネントの再利用性を高める目的で分離するのであれば、
// ホントは呼び出し元で定義するべきだが、今回はここで定義する
const formSchema = z.object({
  userName: z.string().min(1, { message: "Please enter a username" }),
});

type Props = {
  findUserAnimeList?: (username: string) => void;
};

export default function usernameInput({ findUserAnimeList }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "felock",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (findUserAnimeList) {
      findUserAnimeList(data.userName);
    }
  }

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
        <Button type="submit">Generate</Button>
      </form>
    </Form>
  );
}
