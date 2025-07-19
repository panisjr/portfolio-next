"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import ZoomInOnLoad from "@/components/animate/ZoomIn";
import Image from "next/image";
import GalleryCards from "@/components/cards/GalleryCards";
import SlideUp from "@/components/animate/SlideUp";
import SlideLeft from "@/components/animate/SlideLeft";
import SlideRight from "@/components/animate/SlideRight";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Index() {

  return (
    <div className="w-full font-poppins tracking-wider" id="target-element">
      <div className="mx-auto">
        {/* Header */}
        <Navbar />
        <div className="w-full flex items-center justify-center gap-5 px-10">
          <div className="w-[500px] h-52 text-[18px] font-light text-[#081b2b]">
            <SlideRight>
              <p>I am a Front-End Developer.</p>
              <p>
                I enjoy exploring new technologies and environments that enhance
                my growth and efficiency as a programmer.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll often find me cooking or
                going for a jog and activities that help me recharge and stay
                focused.
              </p>
            </SlideRight>
          </div>
          <ZoomInOnLoad>
            <div className="relative w-[500px] md:w-[400px] h-[600px] rounded-md">
              <Image
                src={"/assets/images/gallery/g1.jpg"}
                alt="Graduation picture"
                fill
                sizes="w-[500px] h-[600px]"
                className="object-cover rounded-md"
                priority
              />
            </div>
          </ZoomInOnLoad>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-5 p-10 ">
          <div>
            <p className="font-amarante text-3xl">Gallery</p>
          </div>
          <div className="w-[1000px] overflow-x-auto">
            <GalleryCards />
          </div>
        </div>
        <div className="w-full min-h-auto border-2 border-gray-300 bg-gray-100 shadow-md">
          <div className="flex items-start p-10 justify-evenly">
            <div className="flex flex-col gap-10">
              <SlideRight>
                <p className="font-amarante text-3xl">
                  <span className="text-[#20b9f0]">P</span>art Designe
                  <span className="text-[#ff6347]">r</span>
                </p>
                <ul className="font-light text-lg">
                  <li>UI/UX design</li>
                  <li>Interaction design</li>
                  <li>Animation</li>
                </ul>
              </SlideRight>
            </div>
            <div></div>
            <div className="flex flex-col gap-10">
              <SlideLeft>
                <p className="font-amarante text-3xl">Part Coder</p>
                <ul className="font-light text-lg">
                  <li>Front-End Development</li>
                  <li>HTML / CSS / Tailwindcss</li>
                  <li>JavaScript</li>
                  <li>&#34;Curly Tops&#34;</li>
                </ul>
              </SlideLeft>
            </div>
          </div>
        </div>
        <div className="w-full h-fit p-10 font-light tracking-wider">
          <div className="flex items-start justify-center gap-15 font-light">
            <SlideUp>
              <div className="relative w-[300px] h-[400px]">
                <Image
                  src={"/assets/images/dontMakeMeThink.jpg"}
                  alt="Don't Make Me Think book"
                  fill
                  priority
                  sizes="w-[300px] h-[400px]"
                  className="object-cover"
                />
              </div>
            </SlideUp>
            <div className="py-10 max-w-[500px]" id="target-element">
              <p>
                A colleague recommended this book to me, and it&#34;s been a
                game-changer. I’ve always been curious about the way people
                think and make decisions, and even the first chapter gave me
                practical insights—especially useful as a front-end developer.
                Reading helps me appreciate the small details that contribute to
                better design decisions and outcomes.
              </p>
              <button
                onClick={() =>
                  gsap.to(window, {
                    scrollTo: "#target-element",
                    duration: 1,
                    ease: "power2.out",
                  })
                }
              >
                Scroll to Section
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
