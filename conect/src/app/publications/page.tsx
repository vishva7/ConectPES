"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PublicationCard from "@/components/publicationCard";
import Navbar from "@/components/navbar";

interface Publication {
  title: string;
  authors: string;
  summary: string;
  link: string;
  position: number;
}

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/publications/all`)
      .then((response) => {
        let newPublications = response.data;
        newPublications.sort((a: Publication, b: Publication) => a.position - b.position);
        setPublications(newPublications);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-10">
        <div className="py-6 md:py-8">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl font-bold">Research Publications</h1>
            <p className="text-lg text-gray-500">
              Explore our latest research findings and publications.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-10 py-4">
          {publications.map((publication, index) => (
            <PublicationCard
              key={index}
              title={publication.title}
              authors={publication.authors}
              summary={publication.summary}
              link={publication.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
