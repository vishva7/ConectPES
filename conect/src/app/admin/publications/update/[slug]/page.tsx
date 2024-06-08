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
import axios from "axios";
import Navbar from "@/components/navbar";
import { useEffect } from "react";

const FormSchema = z.object({
  title: z.string().min(1, { message: "This field has to be filled." }),
  authors: z.string().min(1, { message: "This field has to be filled." }),
  summary: z.string().min(1, { message: "This field has to be filled." }),
  link: z.string().min(1, { message: "This field has to be filled." }),
});

export default function UpdateEvent({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      authors: "",
      summary: "",
      link: "",
    },
  });

  useEffect(() => {
    console.log(params.slug);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/publications/${params.slug}`
        );
        if (response.status === 200) {
          const personData = response.data;
          form.reset({
            title: personData.title || "",
            authors: personData.title || "",
            summary: personData.image || "",
            link: personData.description || "",
          });
        }
      } catch (error) {
        console.error("Failed to load publication:", error);
      }
    };

    fetchData();
  }, [params.slug, form]);

  async function onSubmit(formdata: z.infer<typeof FormSchema>) {
    try {
      console.log(formdata);
      let response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/publications/update/${params.slug}`,
        formdata
      );
      if (response.status === 200) {
        console.log(response.data);
        toast({
          title: "Updated successfully",
          description: "Redirecting...",
        });
        router.push("/admin/publications");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Uh-oh!",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Navbar />
      <Form {...form}>
        <form
          className="bg-purp-dark flex flex-col gap-4 items-center justify-center p-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4 text-center w-full max-w-[400px] lg:max-w-[800px]">
            <div className="text-3xl font-bold">Add an Event</div>
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
              name="summary"
              render={({ field }) => (
                <FormItem className="space-y-2 text-left">
                  <FormLabel>Summary</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type the summary here" {...field} />
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
            <Button className="w-full lg:w-1/3" type="submit">
              Add Publication
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
