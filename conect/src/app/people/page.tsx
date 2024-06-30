"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import MemberCard from "@/components/memberCard";
import { details } from "@/lib/types";
import Navbar from "@/components/navbar";

interface People {
  name: string;
  role: string;
  image: string;
  description: string;
}

export default function About() {
  const [about, setAbout] = useState<People[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/people/all`)
      .then((response) => {
        let people = response.data.map((person: People) => {
          const matchResult = person.image.match(/file\/d\/(.*?)\//);
          if (matchResult) {
            const fileId = matchResult[1];
            const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            return { ...person, image: newImageUrl };
          } else {
            return person;
          }
        });
        setAbout(people);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      {/* <div className="container"> */}
      <div className="container lg:h-[calc(100vh-150px)] mx-auto px-4 py-12">
        {/* <h1>Our Team</h1> */}
        <h1 className="text-3xl font-bold mb-8 text-left">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {about.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
}
