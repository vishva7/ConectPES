"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CarouselData } from "@/lib/types";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [carouselItemsData, setCarouselItemsData] = useState<CarouselData[]>(
    []
  );

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/home/all`)
      .then((response) => {
        const data = response.data.map((item: CarouselData) => {
          const matchResult = item.image.match(/file\/d\/(.*?)\//);
          if (matchResult) {
            const fileId = matchResult[1];
            const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            return { ...item, image: newImageUrl };
          } else {
            return item;
          }
        });
        setCarouselItemsData(data);
      })
      .catch((err) => {
        console.error("Failed to fetch carousel items:", err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-full place-content-center lg:h-[calc(100vh-150px)] mx-auto p-2 lg:p-8">
          <Carousel
            className="rounded-lg overflow-hidden"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {carouselItemsData.map((item: CarouselData, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt="Home Image"
                      width={800}
                      height={400}
                      className="w-full h-[40vh] md:h-[400px] lg:h-[400px] object-contain"
                    />
                    <div className="flex items-center justify-center">
                      <div className="px-6 py-4 rounded-md text-center">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
                          {item.title}
                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12 bg-white/50 hover:bg-white/75 rounded-full p-2 shadow-md">
              <ChevronLeft className="w-6 h-6 text-black" />
            </CarouselPrevious>
            <CarouselNext className="mr-12 bg-white/50 hover:bg-white/75 rounded-full p-2 shadow-md">
              <ChevronRight className="w-6 h-6 text-black" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </>
  );
}
