"use client"

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-center font-semibold">Hello, World</h1>
      <Button className="mx-2" onClick={() => {console.log("Works")}}>Test</Button>
    </div>
  );
}
