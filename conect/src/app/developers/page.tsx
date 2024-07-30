import MemberCard from "@/components/memberCard";
import Navbar from "@/components/navbar";
import { details } from "@/lib/types";

export default function About() {
  const details1: details = {
    name: "Vyoman Jain",
    role: "CSE, PESU ECC 2022-26",
    image: "https://www.github.com/VyoJ.png",
    description: "",
    category: "Developer",
    link: "https://www.github.com/VyoJ",
  };
  const details2: details = {
    name: "Vishva Mehta",
    role: "CSE, PESU ECC 2022-26",
    image: "https://www.github.com/vishva7.png",
    description: "",
    category: "Developer",
    link: "https://www.github.com/vishva7",
  };
  const details3: details = {
    name: "Samarth P",
    role: "CSE, PESU ECC 2022-26",
    image: "https://www.github.com/samarth777.png",
    description: "",
    category: "Developer",
    link: "https://www.github.com/samarth777",
  };

  return (
    <>
      <Navbar />
      <div className="w-full py-12 h-[calc(100vh-150px)]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:gap-8">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                Developers
              </h1>
              <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400 my-6">
                This website was developed entirely by students of PES
                University, with Next.js and shadcn/ui being used for the
                frontend and Express.js and MongoDB being used for the backend.
              </p>
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6 my-6">
          <div className="grid gap-6 md:grid-cols-3 xl:gap-8">
            <MemberCard {...details3} />
            <MemberCard {...details2} />
            <MemberCard {...details1} />
          </div>
        </div>
      </div>
    </>
  );
}
