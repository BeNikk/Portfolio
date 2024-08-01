"use client";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/next.png",

      className: "h-10 w-14",
    },
    {title:"TypeScript",
        src:"/ts-logo-512.png",
        className:"h-10 w-12"
    },
    {
      title: "Node",
      src: "/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <h2
        className="font-black text-[#515151] text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </h2>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};