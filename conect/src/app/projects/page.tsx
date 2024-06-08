import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function EventsPage() {
  let projects = [
    {
      title: "Firewall on Raspberry Pi Board",
      description:
        "A firewall module for home use easy to deploy and user friendly configuration change from mobile app for common people use.",
      image:
        "https://drive.google.com/file/d/1JjarCVzHU2P_Ia_wxCeINVFGKeMBm8CR/view?usp=drive_link",
      available: false,
    },
    {
      title: "Encoder and Decoder design for outer space",
      description:
        "Encoder and decoder design and implementation on FPGA board for outer space communication simulation to support ISRO for experimentation.",
      image:
        "https://drive.google.com/file/d/1C1OEaMv4w3Fl3okAl__pnPaSr3QCw3nr/view?usp=drive_link",
      available: false,
    },
    {
      title: "Carrier sense for SDR",
      description:
        "Free primary carrier sense for SDR radio using Adalm Pluto ",
      image:
        "https://drive.google.com/file/d/17pT6swn16emBT2AzSupocEGriQ3VGsIv/view?usp=drive_link",
      available: true,
    },
    {
      title: "Antenna Design for 5G",
      description:
        "Design of SIW based Microstrip patch antenna for 5G communication",
      image:
        "https://drive.google.com/file/d/1FAoSjW0K7HtbttPC3MVeFuRJGw0tgCb_/view?usp=drive_link",
      available: false,
    },
    {
      title: "Silent Disco",
      description:
        "2.4GHz band local transmitter and receiver for multiple sound channel",
      image:
        "https://drive.google.com/file/d/1IF-YUskG69T7wxWyBWajW_eFK2nyCo0F/view?usp=drive_link",
      available: true,
    },
    {
      title: "Remote Controlled Score Board",
      description:
        "Electromechanical score board that can be controlled by wireless channel",
      image:
        "https://drive.google.com/file/d/1qBDKQH497yRVP06fMe3Ai2n7FyFIgYje/view?usp=drive_link",
      available: true,
    },
    {
      title: "NS3 LTE Network Simulation",
      description: "NS3 Simulation of LTE Network for research purpose",
      image:
        "https://drive.google.com/file/d/1ctASjkhMd59zpW-ApSWY8GpRKMXDdpC6/view?usp=drive_link",
      available: true,
    },
    {
      title: "SDN OpenDaylight",
      description:
        "Making setup in Lab for SDN Opendaylight for further experiments and research.",
      image:
        "https://drive.google.com/file/d/1B9ohk6XUn3LHs_eEmeDNJ5Xy-nIlpMpX/view?usp=drive_link",
      available: true,
    },
    {
      title: "Mobile Data Module",
      description:
        "Development of a GPRS communication module for data communication to be easily used by any IoT or Embedded system.",
      image:
        "https://drive.google.com/file/d/1KNCQ6BCOO8XPYRRIqizq3f7uThwvJRF9/view?usp=drive_link",
      available: true,
    },
  ];

  projects = projects.map((project) => {
    const matchResult = project.image.match(/file\/d\/(.*?)\//);
    if (matchResult) {
      const fileId = matchResult[1];
      const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      return { ...project, image: newImageUrl };
    } else {
      return project;
    }
  });

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl mt-4 mb-1 font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-4 p-4 place-items-center">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="min-w-full grid grid-cols-1 lg:grid-cols-3 px-2 py-4"
          >
            <Image
              src={project.image}
              width={400}
              height={300}
              alt="Image"
              priority={true}
            />
            <div className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-3xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                {project.description}
              </CardContent>
              <CardFooter className="text-lg font-semibold">
                {project.available ? (
                  <p className="text-green-600">Available</p>
                ) : (
                  <p className="text-red-600">Allocated</p>
                )}
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
