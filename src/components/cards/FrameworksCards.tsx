import { Amarante } from "next/font/google";
import Image from "next/image";
import React from "react";

const icons: { name: string; icon: string }[] = [
  {
    name: "Nextjs",
    icon: "/assets/images/nextjs.png",
  },
  {
    name: "Angular",
    icon: "/assets/images/angular.png",
  },
  {
    name: "React",
    icon: "/assets/images/react.png",
  },
  {
    name: "Laravel",
    icon: "/assets/images/laravel.svg",
  },
];
const amarante = Amarante({
  weight: "400",
  subsets: ["latin"],
});
export default function FrameworksCards() {
  return (
    <>
      {icons.map((item, index) => (
        <div
          key={index}
          className="w-[350px] h-[250px] flex items-center justify-center gap-1"
        >
          <div className="flex flex-col items-center justify-center gap-2 shadow-gray-500 shadow-lg rounded-md w-[190px] h-[200px] border border-slate-200">
            <div className="relative w-[80px] h-[80px] rounded-full">
              <Image
                src={`${item.icon}`}
                alt="Project Image"
                fill
                priority
                sizes="w-full h-full"
                className="object-contain rounded-full"
              />
            </div>
            <p className={`${amarante.className} text-3xl text-center`}>
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
