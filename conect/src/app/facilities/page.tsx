"use client";

import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { facilities } from "@/lib/types";
import axios from "axios";
import FacilityCard from "@/components/facilityCard";

export default function Facilities() {
  const [facilitiesData, setfacilitiesData] = useState<facilities[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/facilities/all`)
      .then((response) => {
        let data = response.data.map((facility: facilities) => {
          const matchResult = facility.image.match(/file\/d\/(.*?)\//);
          if (matchResult) {
            const fileId = matchResult[1];
            const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            return { ...facility, image: newImageUrl };
          } else {
            return facility;
          }
        });
        setfacilitiesData(data);
      })
      .catch((err) => {
        console.error("Failed to fetch facilities:", err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50/90">
        <div className="w-full py-12">
          <div className="container px-4 md:px-6 text-justify">
            <div className="grid gap-6 lg:gap-8">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Research Facilities
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-2">
                  Even being relatively new research centre we have sufficient
                  amount of hardware and software tools to continue our work and
                  research. We are in the process of getting more resources to
                  do advance studies and activates. We are also in collaboration
                  with other research centres and hence we have our extended
                  purview of resources to be used. In short resource is not
                  bottleneck for research and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6 mb-8">
          <div className="grid gap-6 lg:gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-4">
                Resources
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3 xl:gap-8">
              {facilitiesData.map((item: facilities, index) => (
                <FacilityCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
