"use client"
import { useEffect,useState } from "react";
import axios from "axios";
import PublicationCard from "@/components/publicationCard";
import Navbar from "@/components/navbar";

// const publications = [
//   {
//     title: "Understanding the Impact of Climate Change",
//     authors: "By Dr. A. Smith, Prof. A. Johnson, Dr. K. Lee",
//     summary:
//       "This study examines the regional effects of climate change on agricultural productivity and proposes adaptive strategies for farmers.",
//     link: "#",
//   },
//   {
//     title: "Innovations in Renewable Energy Technologies",
//     authors: "By Prof. J. Garcia, Dr. S. Patel, Prof. M. Chen",
//     summary:
//       "This paper presents the latest advancements in solar, wind, and hydroelectric power technologies, highlighting breakthroughs in energy efficiency and cost reduction.",
//     link: "#",
//   },
//   {
//     title: "The Future of Urban Mobility: Smart Cities and Transportation",
//     authors: "By Dr. L. Wang, Prof. C. Brown, Dr. E. Martinez",
//     summary:
//       "This research explores the potential of smart city technologies to revolutionize transportation systems, analyzing the impact on traffic management, public transportation, and the adoption of electric and autonomous vehicles.",
//     link: "#",
//   },
// ];

interface publications {
  title: string;
  authors: string;
  summary: string;
  link: string;
}

export default function Publications() {

  const [publications, setPublications] = useState<publications[]>([]);
  useEffect(()=>{
    axios.get("http://localhost:10000/publications/all")
    .then(response => {
      setPublications(response.data);})
    .catch(err => console.log(err))
  },[])

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
        <div className="grid gap-6 md:gap-8 lg:gap-10">
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
