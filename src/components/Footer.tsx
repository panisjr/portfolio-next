"use client";
import {
  ChevronRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="w-full h-[480px] bg-[#e5e7eb] text-white">
      {/* top-left,top-right,bottom-right, bottom-left, top-right */}
      <div className="w-full h-full bg-[#303030] [clip-path:polygon(100%_0%,100%_0%,100%_100%,0%_100%,0%_110px)] pt-[170px] px-[200px]">
        <div className="w-full flex flex-row">
          <div className="w-full flex flex-row items-center gap-5">
            <div
              onClick={() => router.push("/")}
              className="font-amarante text-4xl cursor-pointer"
            >
              <span className="text-[#20b9f0]">R</span>
              <span className="text-white">AMS</span>
            </div>
            <p className="text-gray-400">/ front end developer</p>
          </div>
          <div className="flex flex-row gap-5">
            <Instagram />
            <Facebook />
            <Github />
            <Linkedin />
          </div>
        </div>
        <div className="w-full py-8 flex flex-row">
          <div className="w-full">
            <p className="font-medium">Quick Links</p>
            <div className="flex items-center gap-20 text-[13px]">
              <div className="flex items-center">
                <ChevronRight className="w-4" />
                <p>Home</p>
              </div>
              <div className="flex items-center">
                <ChevronRight className="w-4" />
                <p>Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-20 text-[13px]">
              <div className="flex items-center">
                <ChevronRight className="w-4" />
                <p>About</p>
              </div>
              <div className="flex items-center">
                <ChevronRight className="w-4" />
                <p>Blog</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full">
              <p className="font-medium">Contact</p>
              <div className="flex items-center gap-3 text-[13px]">
                <MapPin className="w-4" />
                <p>Brgy. San Roque, Barugo, Leyte</p>
              </div>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </footer>
  );
}
