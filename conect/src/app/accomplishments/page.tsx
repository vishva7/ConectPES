"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import Navbar from "@/components/navbar";

interface Accomplishments {
  title: string;
  description: string;
  date: string;
  image: string;
  position: number;
}

export default function AccomplishmentsPage() {
  const [accomplishments, setAccomplishments] = useState<Accomplishments[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/accomplishments/all`)
      .then((response) => {
        let newAccomplishments = response.data.map(
          (accomplishment: Accomplishments) => {
            const matchResult = accomplishment.image.match(/file\/d\/(.*?)\//);
            if (matchResult) {
              const fileId = matchResult[1];
              const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
              return { ...accomplishment, image: newImageUrl };
            } else {
              return accomplishment;
            }
          }
        );
        newAccomplishments.sort(
          (a: Accomplishments, b: Accomplishments) => a.position - b.position
        );
        setAccomplishments(newAccomplishments);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-174px)]">
        <h1 className="text-center text-4xl my-6 font-bold">Accomplishments</h1>
        <div className="grid grid-cols-1 gap-4 p-4">
          {accomplishments.map((accomplishment, index) => (
            <Card
              key={index}
              className="w-full grid grid-cols-1 lg:grid-cols-3 border-2"
            >
              <Image
                src={accomplishment.image}
                alt={accomplishment.title}
                height={450}
                width={400}
                className="p-2"
                priority={true}
              />
              <div className="col-span-2">
                <CardHeader>
                  <CardTitle className="mb-2">{accomplishment.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {accomplishment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {accomplishment.date ? (
                    <p className="mb-1">
                      <span className="font-semibold"> Date: </span>{" "}
                      {accomplishment.date}
                    </p>
                  ) : (
                    <></>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
