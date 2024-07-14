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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  name: z.string().min(1, { message: "This field has to be filled." }),
  role: z.string().min(1, { message: "This field has to be filled." }),
  image: z.string(),
  description: z.string().min(1, { message: "This field has to be filled." }),
  category: z.string().min(1, { message: "This field has to be filled." }),
  link: z.string(),
});

export default function UpdateMember({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      role: "",
      image: "",
      description: "",
      category: "",
      link: "",
    },
  });

  useEffect(() => {
    console.log(params.slug);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/people/${params.slug}`
        );
        if (response.status === 200) {
          const personData = response.data;
          form.reset({
            name: personData.name || "",
            role: personData.role || "",
            image: personData.image || "",
            description: personData.description || "",
            category: personData.category || "",
            link: personData.link || "",
          });
        }
      } catch (error) {
        console.error("Failed to load person:", error);
      }
    };

    fetchData();
  }, [params.slug, form]);

  async function onSubmit(formdata: z.infer<typeof FormSchema>) {
    try {
      console.log("formdata", formdata);
      let response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/people/update/${params.slug}`,
        formdata
      );
      if (response.status === 200) {
        console.log(response.data);
        toast({
          title: "Updated successfully",
          description: "Redirecting...",
        });
        router.push("/admin/members");
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
            <div className="text-3xl font-bold">Update a Member</div>
            <p className="text-gray-500 dark:text-gray-400">
              Enter Member Details
            </p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1 text-left">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-1 text-left">
                  <FormLabel>Role</FormLabel>
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
                <FormItem className="space-y-1 text-left">
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
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-1 text-left">
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
                name="category"
                render={({ field }) => (
                  <FormItem className="space-y-1 text-left mr-2">
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Faculty">Faculty</SelectItem>
                        <SelectItem value="Research Scholar">
                          Research Scholar
                        </SelectItem>
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Alumni">Alumni</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem className="space-y-1 text-left ml-2">
                    <FormLabel>Website Link</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full lg:w-1/3" type="submit">
              Update Member
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
