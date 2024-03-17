import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/Card";
  import next1 from "../../public/Next1.png";
  import Image from "next/image";

export default function ProjectCard() {
  return (
    <Card className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 px-2 py-4">
        <Image src={next1} width={400} height={300} alt={"1"} />
        <div>
          <CardHeader>
            <CardTitle>FIREWALL ON RASPBERRY PI BOARD</CardTitle>
          </CardHeader>
          <CardContent>
            A firewall module for home use easy to deploy and user friendly
            configuration change from mobile app for common people use.
          </CardContent>
          <CardFooter>Allocated</CardFooter>
        </div>
      </Card>
  )
}
