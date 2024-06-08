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
import { toast } from "@/components/ui/use-toast";
import { signIn } from "../actions";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import axios from "axios";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string().min(1, { message: "This field has to be filled." }),
});

export default function SignIn() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(formdata: z.infer<typeof FormSchema>) {
    try {
      // let response = await signIn(formdata);
      console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
      console.log(process.env);
      let response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
        {
          email: formdata.email,
          password: formdata.password,
        }
      );
      if (response.status === 200) {
        toast({
          title: "Authenticated successfully!",
          description: "Welcome Professor!",
          className: "border-2 border-green-600",
        });
        localStorage.setItem("user", "admin");
        router.push("/admin/dashboard");
      } else {
        toast({
          title: "Uh-oh!",
          description: response.data,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <Form {...form}>
        <form
          className="bg-purp-dark flex flex-col gap-4 items-center justify-center p-6 sm:p-10 lg:h-[calc(100vh-150px)]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4 text-center w-full max-w-[400px]">
            <div className="text-3xl font-bold">Admin Sign in</div>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login and make changes
            </p>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2 text-left">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="abc@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2 text-left">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Sign in
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
