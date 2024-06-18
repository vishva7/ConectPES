"use client";

import CarouselItem from "@/components/gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="lg:h-[calc(100vh-150px)] flex w-full items-center justify-center">
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
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </div>
    </>
  );
};

export default Home;
