"use client";
import { useEffect, useState } from "react";
import axios from "axios";
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

interface Project {
  title: string;
  description: string;
  image: string;
  available: Boolean;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:10000/projects/all")
      .then((response) => {
        let newProjects = response.data.map((project: Project) => {
          const matchResult = project.image.match(/file\/d\/(.*?)\//);
          if (matchResult) {
            const fileId = matchResult[1];
            const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            return { ...project, image: newImageUrl };
          } else {
            return project;
          }
        });
        setProjects(newProjects);
      })
      .catch((err) => console.log(err));
  }, []);

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
