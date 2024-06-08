"use client"
import { useEffect,useState } from "react";
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
}


export default function EventsPage() {
  // let events = [
  //   {
  //     title: "Workshop on VM Communication",
  //     description:
  //       "To tryout with multiple system we do not need physical multiple systems. Using multiple virtual machines with communication setup, we can create our near to real network on a single machine.",
  //     date: "2024-02-07",
  //     time: "2:15pm",
  //     registrationLink: "https://forms.gle/rMMQtmJmWE5Q5D4a6",
  //     image:
  //       "https://drive.google.com/file/d/102zHHUi8inDtSUditF7YVqoJCa50411d/view?usp=drive_link",
  //     upcoming: true,
  //   },
  //   {
  //     title: "Workshop on MININET",
  //     description:
  //       "Mininet is a popular simulation tool for Software Defined network which take very less resources even for big network. Networking Experimentation and Innovation can be made using the tool.",
  //     date: "2024-02-21",
  //     time: "2:15pm",
  //     registrationLink: "https://forms.gle/1HFAXxpF2jA8A6iH9",
  //     image:
  //       "https://drive.google.com/file/d/1xU-4vSw8sm5lZWeKEXs0rZjaHySVd24W/view?usp=drive_link",
  //     upcoming: true,
  //   },
  //   {
  //     title: "Networking Hackathon",
  //     description:
  //       "It was organized for ECE 5th Semester students based on GNS3 tool. It had 2 rounds. First round was to select the top 30 candidates. Then the second round was for real competition",
  //     date: "2023-11-20",
  //     time: "1:45pm - 3:30pm",
  //     registrationLink: "",
  //     image:
  //       "https://drive.google.com/file/d/1q9lrd_l6zryDLS4EJPcwfpfPEd0VpCF6/view?usp=drive_link",
  //     upcoming: false,
  //   },
  //   {
  //     title: "Workshop on NS3",
  //     description:
  //       "To tryout with multiple system we do not need physical multiple systems. Using multiple virtual machines with communication setup, we can create our near to real network on a single machine.",
  //     date: "2023-11-15",
  //     time: "2:15pm",
  //     registrationLink: "",
  //     image:
  //       "https://drive.google.com/file/d/1KTzEYObaLY1I4T3qYvj123VTK3KeMeuA/view?usp=drive_link",
  //     upcoming: false,
  //   },
  //   {
  //     title: "Guest Talk from ISRO",
  //     description:
  //       "Guest talk on “Chandrayaan 3 Mission - from a communication perspective”. Guest Lecture Mr A Rajendra Kumar is a scientist in ISRO. With a Masters degree in Satellite Technology and Applications from IISc and by working in ISRO for over 23 years, he has in-depth knowledge in the development life cycle of electronics hardware for satellite systems of LEO, GEO and interplanetary missions.",
  //     date: "2023-11-03",
  //     time: "12:00pm",
  //     registrationLink: "",
  //     image:
  //       "https://drive.google.com/file/d/1ghhyQtxKIfhsBmo9RPRZah2IxgMOfU3C/view?usp=drive_link",
  //     upcoming: false,
  //   },
  // ];

  const [events, setEvents] = useState<Events[]>([]);
  useEffect(()=>{
    axios.get("http://localhost:10000/events/all")
    .then(response => {
      setEvents(response.data);})
    .catch(err => console.log(err))
  },[])


  events = events.map((event) => {
    const matchResult = event.image.match(/file\/d\/(.*?)\//);
    if (matchResult) {
      const fileId = matchResult[1];
      const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      return { ...event, image: newImageUrl };
    } else {
      return event;
    }
  });

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl mt-4 mb-1 font-bold">Events</h1>
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
                  <></>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {event.registrationLink ? (
                  <Link href={event.registrationLink}>
                    <Button>Register</Button>
                  </Link>
                ) : (
                  <Button variant="destructive">Conducted</Button>
                )}
              </CardFooter>
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
