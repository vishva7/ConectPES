"use client";

import bg from "../../public/bg.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <Gallery />
    // <main className="lg:h-[calc(100vh-150px)]">
    //   <section
    //     style={{ backgroundImage: `url(${bg.src})` }}
    //     className="px-12 py-20 lg:p-20"
    //   >
    //     <h1 className="text-6xl text-white text-center font-bold">CONECT</h1>
    //     <hr className="h-px my-6 bg-gray-200 border-0"></hr>
    //     <h2 className="font-semibold text-white text-center text-xl lg:text-4xl">
    //       Center Of Networking and Evolving Communication Technologies
    //     </h2>
    //   </section>
    //   <div className="text-center">
    //     <p className="text-lg lg:text-2xl font-medium px-6 py-6 lg:p-8">
    //       This is an activity and research group in PES University on networking
    //       and communication domain. Its main operation and laboratory is based
    //       in Electronic City campus of the University.
    //     </p>
    //     <p className="lg:text-xl font-medium mb-4">
    //       Check out the center&apos;s activities:
    //     </p>
    //     <div className="flex justify-around mb-8">
    //       <Link href="/projects">
    //         <Button className="font-bold text-lg">Projects</Button>
    //       </Link>
    //       <Link href="/events">
    //         <Button className="font-bold text-lg">Events</Button>
    //       </Link>
    //     </div>
    //   </div>
    // </main>
  );
}
