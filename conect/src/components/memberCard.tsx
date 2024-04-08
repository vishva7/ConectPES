"use client"

import { Card } from "./ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { details } from "@/lib/types";

export default function MemberCard({ name, role, image, desc }: details) {
  return (
    <Card className="w-full max-w-sm rounded-xl border">
      <div className="p-6 grid gap-4">
        <div className="flex gap-8 items-center">
          <Avatar>
            <AvatarImage src={image} className=""/>
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1.5">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {role}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </Card>
  );
}
