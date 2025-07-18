import Image from "next/image";
import React from "react";

export interface galleryTypes {
  image: string;
}
const loc = "/assets/images/gallery/";
const gallery: galleryTypes[] = [
  {
    image: `${loc}g2.jpg`,
  },
  {
    image: `${loc}g3.jpg`,
  },
  {
    image: `${loc}g5.jpg`,
  },
  {
    image: `${loc}g6.jpg`,
  },
  {
    image: `${loc}g7.png`,
  },
  {
    image: `${loc}g8.jpg`,
  },
  {
    image: `${loc}g9.jpg`,
  },
];
export default function GalleryCards() {
  return (
    <div className="flex flex-nowrap gap-5">
      {gallery.map((item, index) => (
        <div key={index} className="rounded-m border border-gray-300 p-2 rounded-md shadow-md">
          <div className="relative w-[180px] md:w-[180px] h-[180px] rounded-md">
            <Image
              src={item.image}
              alt="Gallery picture"
              fill
              sizes="w-[200px] h-[600px]"
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
}
