"use client";
import {
  ChevronRight,
  Copyright,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
    const handleSmoothNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <footer className="w-full h-[480px] bg-[#e5e7eb] text-white">
      {/* top-left,top-right,bottom-right, bottom-left, top-right */}
      <div className="w-full h-full bg-[#404040] [clip-path:polygon(100%_0%,100%_0%,100%_100%,0%_100%,0%_110px)] pt-[160px] px-[200px] flex flex-col justify-around">
        <div>
          <div className="w-full flex flex-row items-center justify-center">
            <div
              className="w-full flex flex-row items-center justify-start gap-5"
              onClick={() => handleSmoothNavigate("home")}
            >
              <div className="flex flex-row items-center justify-center font-rubik text-[#dbdbdb] text-4xl cursor-pointer">
                <div className="relative w-[70px] h-[70px]">
                  <Image
                    src={"/assets/images/nameLogo.png"}
                    alt="Logo name"
                    sizes="w-full h-full"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <p className="pt-5">ams</p>
              </div>
              <p className="text-[#858585] font-medium pt-7">
                / front end developer
              </p>
            </div>
            <div className="flex flex-row gap-5 text-[#858585] pt-7">
              <Instagram className="cursor-pointer hover:text-[#dbdbdb] duration-100" />
              <Facebook className="cursor-pointer hover:text-[#dbdbdb] duration-100" />
              <Github className="cursor-pointer hover:text-[#dbdbdb] duration-100" />
              <Linkedin className="cursor-pointer hover:text-[#dbdbdb] duration-100" />
            </div>
          </div>
          <div className="w-full py-8 flex flex-row">
            <div className="w-full text-[#858585]">
              <p className="font-medium text-white">Quick Links</p>
              <div className="flex items-center gap-20 text-[14px]">
                <div className="flex items-center hover:text-[#dbdbdb] cursor-pointer duration-100">
                  <ChevronRight className="w-4" />
                  <p>Home</p>
                </div>
                <div className="flex items-center hover:text-[#dbdbdb] cursor-pointer duration-100">
                  <ChevronRight className="w-4" />
                  <p>Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-20 text-[14px]">
                <div className="flex items-center hover:text-[#dbdbdb] cursor-pointer duration-100">
                  <ChevronRight className="w-4" />
                  <p>About</p>
                </div>
                <div className="flex items-center hover:text-[#dbdbdb] cursor-pointer duration-100">
                  <ChevronRight className="w-4" />
                  <p>Blog</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full text-[#858585]">
                <p className="font-medium text-white">Contact</p>
                <div className="flex items-center gap-3 text-[14px] cursor-pointer hover:text-[#dbdbdb] duration-100">
                  <MapPin className="w-4" />
                  <p>Brgy. San Roque, Barugo, Leyte</p>
                </div>
                <div className="flex items-center gap-3 text-[14px] cursor-pointer hover:text-[#dbdbdb] duration-100">
                  <PhoneCall className="w-4" />
                  <p>+63 960 875 7182</p>
                </div>
                <div className="flex items-center gap-3 text-[14px] cursor-pointer hover:text-[#dbdbdb] duration-100">
                  <Mail className="w-4" />
                  <p>ramelopanisjr.06@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-[#858585] flex flex-row">
          <Copyright className="w-4" /> 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
