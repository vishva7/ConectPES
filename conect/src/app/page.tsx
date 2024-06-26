"use client";

import { useEffect, useState } from "react";
import CarouselItem from "@/components/gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "@/components/navbar";
import axios from "axios";
import { CarouselData } from "@/lib/types";

const Home = () => {
  const [carouselItemsData, setCarouselItemsData] = useState<CarouselData[]>(
    []
  );
  const [fetchCount, setFetchCount] = useState(0); // State to track fetch count

  useEffect(() => {
    if (fetchCount < 3) {
      // Limit fetch to two times
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
          setFetchCount(fetchCount + 1); // Increment fetch count
        })
        .catch((err) => {
          console.error("Failed to fetch carousel items:", err);
        });
    }
  }, [fetchCount]);

  return (
    <>
      <Navbar />
      <div className="lg:h-[calc(100vh-150px)] w-full">
        <Carousel
          showArrows={false}
          autoPlay
          infiniteLoop
          swipeable
          showStatus={false}
          emulateTouch
          showThumbs={false}
          interval={3500}
          className=""
        >
          {carouselItemsData.map((item: CarouselData, index) => (
            <CarouselItem key={index} {...item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
