"use client";

// import CarouselItem from "@/components/gallery";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import Navbar from "@/components/navbar";
// import { useState, useEffect } from "react";
// import { CarouselData } from "@/lib/types";
// import axios from "axios";

// const Home = () => {
//   const [carouselItemsData, setCarouselItemsData] = useState<CarouselData[]>(
//     []
//   );

//   useEffect(() => {
//     axios
//       .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/home/all`)
//       .then((response) => {
//         let data = response.data.map((item: CarouselData) => {
//           const matchResult = item.image.match(/file\/d\/(.*?)\//);
//           if (matchResult) {
//             const fileId = matchResult[1];
//             const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
//             return { ...item, image: newImageUrl };
//           } else {
//             return item;
//           }
//         });
//         setCarouselItemsData(data);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch carousel items:", err);
//       });
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="lg:h-[calc(100vh-150px)] flex w-full items-center justify-center">
//         <Carousel
//           showArrows={false}
//           autoPlay
//           infiniteLoop
//           swipeable
//           showStatus={false}
//           emulateTouch
//           showThumbs={false}
//           interval={3500}
//         >
//           {carouselItemsData.map((item: CarouselData, index) => (
//             <CarouselItem key={index} {...item} />
//           ))}
//         </Carousel>
//       </div>
//     </>
//   );
// };

// export default Home;

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
      <div style={{ minHeight: "calc(100vh - 150px)" }}>
        <Carousel
          showArrows={false}
          autoPlay
          infiniteLoop
          swipeable
          showStatus={false}
          emulateTouch
          showThumbs={false}
          interval={3500}
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
