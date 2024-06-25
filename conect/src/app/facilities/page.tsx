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
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:gap-8">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Research Facilities
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-2">
                  Explore our cutting-edge research facilities, each equipped
                  with state-of-the-art technology and staffed by experts in
                  their field.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="container px-4 md:px-6 mb-8">
            <div className="grid gap-6 lg:gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-4">
                  Capabilities
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-4">
                  Our research center offers a wide range of capabilities to
                  support innovative research across various disciplines. From
                  advanced imaging and spectroscopy to high-performance
                  computing, we provide the tools and expertise to drive
                  scientific discovery and technological breakthroughs.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3 xl:gap-8">
                {facilitiesData.map((item: facilities, index) => (
                  <FacilityCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
