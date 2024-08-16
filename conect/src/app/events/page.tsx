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
import Link from "next/link";
import Navbar from "@/components/navbar";

interface Events {
  title: string;
  description: string;
  date: string;
  time: string;
  registrationLink: string;
  image: string;
  upcoming: Boolean;
  position: number;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Events[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/events/all`)
      .then((response) => {
        let newEvents = response.data.map((event: Events) => {
          const matchResult = event.image.match(/file\/d\/(.*?)\//);
          if (matchResult) {
            const fileId = matchResult[1];
            const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            return { ...event, image: newImageUrl };
          } else {
            return event;
          }
        });
        newEvents.sort((a: Events, b: Events) => a.position - b.position);
        setEvents(newEvents);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl my-6 font-bold">Events</h1>
      <div className="grid grid-cols-1 gap-4 p-4">
        {events.map((event, index) => (
          <Card
            key={index}
            className="w-full grid grid-cols-1 lg:grid-cols-3 border-2"
          >
            <Image
              src={event.image}
              alt={event.title}
              height={450}
              width={400}
              className="place-self-center"
              priority={true}
            />
            <div className="col-span-2">
              <CardHeader>
                <CardTitle className="mb-2">{event.title}</CardTitle>
                <CardDescription className="text-lg">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-1">
                  <span className="font-semibold"> Date: </span> {event.date}
                </p>
                <p className="mb-1">
                  <span className="font-semibold"> Time: </span> {event.time}
                </p>
                {event.upcoming ? (
                  <p className="mb-1 text-green-600 font-semibold">Upcoming</p>
                ) : (
                  <p className="mb-1 text-red-600 font-semibold">Conducted</p>
                )}
              </CardContent>
              {event.upcoming ? (
                <CardFooter className="flex justify-between">
                  {event.registrationLink ? (
                    <Link href={event.registrationLink}>
                      <Button>Register</Button>
                    </Link>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              ) : (
                <></>
              )}
            </div>
          </Card>
        ))}
      </div>
      <hr className="w-[40%] h-1 mx-auto my-4 bg-muted border-0 rounded"></hr>
      <h1 className="font-bold text-3xl text-center mb-4">INAUGURATION</h1>
      <Image
        src="/inauguration.png"
        alt="Inauguration Pic"
        width={800}
        height={1000}
        className="mx-auto mb-4"
      />
      <div className="w-[80%] text-center mx-auto text-lg mb-4">
        <p className="mb-2">
          Inauguration of CONECT was done by Pro Vice Chancellor Prof. Nagarjuna
          Sadineni in presence of principal Dr. Subhas Kulkarni, ECE chairperson
          Dr. Ajey SNR and Mr A Rajendra Kumar (ISRO).
        </p>
        <p>On 3rd November, 2023 at 11:30am</p>
      </div>
    </>
  );
}
