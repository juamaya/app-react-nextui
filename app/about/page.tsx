
"use client"; 

import { title } from "@/components/primitives";
import { Avatar } from "@heroui/react";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>

      <div className="flex gap-4 items-center mt-5 ">
        <Avatar
          className="w-30 h-30 text-large border-2 border-purple-500"
          src="/app-react-nextui/juan.jpg"
        />
      </div>
    </div>
  );
}
