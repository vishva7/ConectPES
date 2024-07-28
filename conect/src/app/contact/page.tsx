"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { contacts } from "@/lib/types";
import Image from "next/image";
import map from "../../../public/map.jpg";

export default function ContactPage() {
  const [contactData, setContacts] = useState<contacts>({
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    console.log("contact", contactData);
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact/all`)
      .then((response) => {
        const data = response.data;
        setContacts(data[0]);
        console.log("Fetched contacts:", data[0]);
      })
      .catch((err) => {
        console.error("Failed to fetch contacts:", err);
      });
  }, []);

  if (!contactData) {
    return (
      <>
        <Navbar />
        <div className="lg:h-[calc(100vh-150px)]">Loading...</div>
      </>
    );
  }

  const formatAddress = (text: string) => {
    return { __html: text.replace(/\n/g, "<br>") };
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen lg:h-[calc(100vh-150px)] bg-gray-100">
        <main className="flex-1 place-content-center">
          {contactData && (
            <section className="w-full">
              <div className="container px-4 md:px-6">
                <div className="grid gap-4 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Get in Touch
                      </h1>
                      <p className="max-w-[600px] text-gray-500 md:text-xl">
                        Have a question or want to work together? Don&apos;t
                        hesitate to reach out.
                      </p>
                    </div>
                    <div className="grid gap-6">
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Address</h3>
                        <p
                          className="text-gray-500"
                          dangerouslySetInnerHTML={formatAddress(
                            contactData.address
                          )}
                        ></p>
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Email</h3>
                        <p className="text-gray-500">{contactData.email}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                        href={`mailto:${contactData.email}`}
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Email Us
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="https://maps.app.goo.gl/Fn9C9ZdmjnbhSQs59"
                    target="_blank"
                  >
                    <Image src={map} alt="Map location of PESU EC Campus" />
                  </Link>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
