"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  title: z.string().min(1, { message: "This field has to be filled." }),
  authors: z.string().min(1, { message: "This field has to be filled." }),
  desc: z.string().min(1, { message: "This field has to be filled." }),
  link: z.string().min(1, { message: "This field has to be filled." }),
});

export default function SignIn() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      authors: "",
      desc: "",
      link: "",
    },
  });

  async function onSubmit(formdata: z.infer<typeof FormSchema>) {
    // try {
    //   let response = await signIn(formdata);
    //   if (response.status === 200) {
    //     toast({
    //       title: "Authenticated successfully!",
    //       description: "Welcome Professor!",
    //       className: "border-2 border-green-600",
    //     });
    //     localStorage.setItem("user", "admin");
    //     router.push("/admin/dashboard");
    //   } else {
    //     toast({
    //       title: "Uh-oh!",
    //       description: response.message,
    //       variant: "destructive",
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(formdata);
    toast({
      title: "Submitted successfully",
      description: "Open console to see the data submitted",
    });
  }

  return (
    <Form {...form}>
      <form
        className="bg-purp-dark flex flex-col gap-4 items-center justify-center p-6 h-[calc(100vh-150px)]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-4 text-center w-full max-w-[400px]">
          <div className="text-3xl font-bold">Add Publications</div>
          <p className="text-gray-500 dark:text-gray-400">
            Enter Publication Details
          </p>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="space-y-2 text-left">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="authors"
            render={({ field }) => (
              <FormItem className="space-y-2 text-left">
                <FormLabel>Authors</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem className="space-y-2 text-left">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type the description here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem className="space-y-2 text-left">
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Add Publication
          </Button>
        </div>
      </form>
    </Form>
  );
}
