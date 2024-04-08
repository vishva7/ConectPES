"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Link } from "lucide-react";

const CarouselItem = () => {
  return (
    <div className="my-[10px] flex p-10">
      <div className="relative flex w-full">
        <div className="flex h-full w-[40%] items-center justify-center">
          <div className="z-100 mr-[-100px] w-[100%]  rounded-tr-[100px]  bg-white p-5">
            <h6 className="text-left font-semibold md:text-[20px] ">
              Center Of Networking and Evolving Communication Technologies
            </h6>
            <h6 className="my-3  text-left md:text-[10px] lg:text-[12px] xl:text-[17px]">
              This is an activity and research group in PES University on
              networking and communication domain. Its main operation and
              laboratory is based in Electronic City campus of the University.
            </h6>
            <div className="mt-10 flex justify-center sm:justify-start ">
              <Button variant="default" className="min-w-[150px] font-bold">
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="-z-10 w-[60%]">
          <Image
            src="/inauguration.png"
            width="200"
            height="200"
            alt="hero"
            className="w-[100vw] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
