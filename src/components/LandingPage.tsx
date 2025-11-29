"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Facebook, Github, Linkedin } from "lucide-react";
import PopUpOnLoad from "./animate/PopUpOnLoad";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const socNav = (a: string) => {
    if (a === "facebook") {
      router.push("https://www.facebook.com/ramel.panis.1/");
      return;
    } else if (a === "linkedin") {
      router.push("https://www.linkedin.com/in/panisjr-ramel/");
      return;
    } else if (a === "github") {
      router.push("https://github.com/panisjr");
      return;
    }
  };
  return (
    <div className="w-full flex md:flex-nowrap flex-wrap items-center justify-center bg-[#e5e7eb] font-poppins">
      <div className="w-full  px-28 ps-44 md:ps-48 py-16 flex flex-col items-start justify-start">
        <p className="text-3xl px-1">Hello, I&apos;m</p>
        <p className="font-amarante text-8xl font-bold">Ramel Panis</p>
        <h1 className="px-1 text-3xl font-semibold text-nowrap">
          I am a{" "}
          <span style={{ color: "tomato" }}>
            <Typewriter
              words={["Web Developer", "UI Designer", "Lifelong Learner"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="px-1 w-full font-poppins">
          Fueled by curiosity and a strong desire for growth, I’m passionate
          about honing my technical abilities and staying ahead in the
          ever-evolving world of technology.
        </p>
        <div className="px-1 w-full flex items-center justify-start gap-3 py-4">
          <PopUpOnLoad>
            <div
              onClick={() => socNav("facebook")}
              className="group bg-[#20b9f0] p-2 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-300"
            >
              <Facebook className="text-white"/>
            </div>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.3}>
            <div
              onClick={() => socNav("linkedin")}
              className="group bg-[#20b9f0] p-2 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Linkedin className="text-white"/>
            </div>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.5}>
            <div
              onClick={() => socNav("github")}
              className="group bg-[#20b9f0] p-2 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Github className="text-white"/>
            </div>
          </PopUpOnLoad>
        </div>
        <div className="w-full md:w-fit flex items-center justify-center md:justify-start gap-5 py-4">
          <PopUpOnLoad>
            <button className="px-3 py-2 cursor-pointer bg-[#20b9f0] rounded-md text-white font-semibold hover:bg-transparent hover:text-[#081b2b] duration-200 border-[#20b9f0] border">
              Hire Me
            </button>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.3}>
            <button
              onClick={() => router.push("https://mail.google.com/")}
              className="w-[120px] cursor-pointer h-[40px] border-2 border-[#20b9f0] rounded-md font-semibold hover:bg-[#20b9f0] hover:text-[#ededed] duration-200 hover:border-[#20b9f0]"
            >
              Contact Me
            </button>
          </PopUpOnLoad>
        </div>
      </div>
      <div className="w-fit md:w-full md:flex md:items-center md:justify-start justify-center md:ps-[150px]">
          <div className="relative w-[500px] md:w-[400px] h-[625px] rounded-md">
            <Image
              src={"/assets/images/gradpic.png"}
              alt="Graduation picture"
              fill
              sizes="w-[500px] h-[600px]"
              className="md:object-cover object-cover rounded-md"
              priority
            />
          </div>
      </div>
    </div>
  );
}
