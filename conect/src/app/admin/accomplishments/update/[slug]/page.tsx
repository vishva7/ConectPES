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
  description: z.string().min(1, { message: "This field has to be filled." }),
  date: z.string().min(1, { message: "This field has to be filled." }),
  image: z.string(),
  position: z.coerce
    .number()
    .min(0, { message: "This field has to be filled." }),
});

export default function UpdateAccomplishment({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      image: "",
      position: 0,
    },
  });

  useEffect(() => {
    console.log(params.slug);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/accomplishments/${params.slug}`
        );
        if (response.status === 200) {
          const eventData = response.data;
          form.reset({
            title: eventData.title || "",
            description: eventData.description || "",
            date: eventData.date || "",
            image: eventData.image || "",
            position: Number(eventData.position) || 0,
          });
        }
      } catch (error) {
        console.error("Failed to load event:", error);
      }
    };

    fetchData();
  }, [params.slug, form]);

  async function onSubmit(formdata: z.infer<typeof FormSchema>) {
    try {
      const updatedData = {
        ...formdata,
        position: Number(formdata.position),
      };
      console.log(updatedData);
      let response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/accomplishments/update/${params.slug}`,
        updatedData
      );
      if (response.status === 200) {
        console.log(response.data);
        toast({
          title: "Updated successfully",
          description: "Redirecting...",
        });
        router.push("/admin/accomplishments");
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
          className="min-h-[calc(100vh-150px)] bg-purp-dark flex flex-col gap-4 items-center justify-center p-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4 text-center w-full max-w-[400px] lg:max-w-[800px]">
            <div className="text-3xl font-bold">Update an Accomplishment</div>
            <p className="text-gray-500 dark:text-gray-400">
              Enter Accomplishment Details
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
              name="description"
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
            <div className="grid grid-cols-2">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="space-y-2 text-left mr-2">
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="01/01/24" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="space-y-2 text-left ml-2">
                    <FormLabel>
                      Reorder Accomplishment on Page - Position
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="space-y-2 text-left">
                  <FormLabel>Image Link</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2"></div>
            <Button className="w-full lg:w-1/3" type="submit">
              Update Accomplishment
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
