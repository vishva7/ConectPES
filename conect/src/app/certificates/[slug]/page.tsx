"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Logo from "../../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";

interface Certificate {
  _id: string;
  title: string;
  link: string;
}

export default function Certificates({ params }: { params: { slug: string } }) {
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  const getEmbedUrl = (link: string) => {
    const fileId = link.split('/d/')[1]?.split('/')[0];
    return `https://drive.google.com/file/d/${fileId}/preview?toolbar=0`;
  };

  useEffect(() => {
    console.log(params.slug);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/certificates/${params.slug}`
        );
        if (response.status === 200) {
          let data = response.data;
          const updatedCertificate = {
            ...data,
            link: getEmbedUrl(data.link),
          };
          setCertificate(updatedCertificate);
        } else if (response.status === 404) {
          notFound();
        }
      } catch (error) {
        console.error("Failed to load certificate:", error);
        notFound();
      }
    };

    fetchData();
  }, [params.slug]);

  return (
    <>
      {certificate ? (
        <>
          <nav className="w-full lg:h-[75px] shadow bg-[#023047] flex items-center px-4">
            <div className="flex-shrink-0">
              <Link href="/" className="py-3 md:py-5">
                <Image src={Logo} height={100} width={150} alt="logo" />
              </Link>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <h1 className="text-lg text-white">{certificate.title}</h1>
            </div>
          </nav>
          <div className="relative h-[calc(100vh-150px)] w-full pointer-events-none">
            <iframe
              src={certificate.link}
              className="absolute inset-0 w-full h-full"
              title="Certificate"
            ></iframe>
          </div>
        </>
      ) : (
        <p>Loading certificate...</p>
      )}
    </>
  );
}
