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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";
import Navbar from "@/components/navbar";

interface events {
  title: string;
  description: string;
  date: string;
  time: string;
  registrationLink: string;
  image: string;
  upcoming: boolean;
}

const FormSchema = z.object({
  title: z.string().min(1, { message: "This field has to be filled." }),
  description: z.string().min(1, { message: "This field has to be filled." }),
  date: z.string().min(1, { message: "This field has to be filled." }),
  time: z.string().min(1, { message: "This field has to be filled." }),
  registrationLink: z.string(),
  image: z.string().min(1, { message: "This field has to be filled." }),
  upcoming: z.string().min(1, { message: "This field has to be filled." }),
});

export default function CreateEvent() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      time: "",
      registrationLink: "",
      image: "",
      upcoming: "",
    },
  });

  async function onSubmit(formdata: z.infer<typeof FormSchema>) {
    try {
      console.log(formdata);
      let response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/events/create`,
        formdata
      );
      if (response.status === 201) {
        console.log(response.data);
        toast({
          title: "Created successfully",
          description: "Redirecting...",
        });
        router.push("/admin/events");
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
              Enter Event Details
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
                name="time"
                render={({ field }) => (
                  <FormItem className="space-y-2 text-left ml-2">
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="2:30PM" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="registrationLink"
              render={({ field }) => (
                <FormItem className="space-y-2 text-left">
                  <FormLabel>Registration Link</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="upcoming"
              render={({ field }) => (
                <FormItem className="space-y-2 text-left">
                  <FormLabel>Upcoming</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">True</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
                        </FormControl>
                        <FormLabel className="font-normal">False</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full lg:w-1/3" type="submit">
              Add Event
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
