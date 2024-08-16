"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "@/components/navbar";

interface Photo {
    title: string;
    image: string;
    position: number;
}

export default function Gallery() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/gallery/all`)
            .then((response) => {
                let newPhotos = response.data.map((photo: Photo) => {
                    const matchResult = photo.image.match(/file\/d\/(.*?)\//);
                    if (matchResult) {
                      const fileId = matchResult[1];
                      const newImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
                      return { ...photo, image: newImageUrl };
                    } else {
                      return photo;
                    }
                  });
                newPhotos.sort((a: Photo, b: Photo) => a.position - b.position);
                setPhotos(newPhotos);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Navbar />
            <h1 className="m-4 font-bold text-3xl text-center">Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 m-6 gap-8 place-items-center">
                {photos.map((photo, index) => (
                    <div key={index} className="w">
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={photo.image}
                            alt={photo.title}
                            title={photo.title}
                            width={450}
                            height={250}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}