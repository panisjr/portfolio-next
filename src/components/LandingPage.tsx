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
    <div
      id="landingPage"
      className="md:w-full w-screen md:h-screen h-fit flex md:flex-nowrap flex-wrap-reverse items-center justify-center bg-gradient-to-b from-[#303030] to-[#161616] text-[#fafafa] font-poppins overflow-x-hidden"
    >
      <div className="md:w-full md:px-30 px-5 md:py-16 flex flex-col md:items-start items-center md:justify-start justify-center">
        <p className="md:text-3xl text-2xl px-1">Hello, I&apos;m</p>
        <p className="font-amarante md:text-7xl text-6xl font-bold">Ramel Panis</p>
        <h1 className="px-1 md:text-3xl text-2xl font-semibold text-nowrap">
          I am a{" "}
          <span style={{ color: "#20b9f0" }}>
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
        <p className="px-1 md:text-lg text-sm md:w-full w-[320px] font-poppins md:text-start text-center">
          Fueled by curiosity and a strong desire for growth, I’m passionate
          about honing my technical abilities and staying ahead in the
          ever-evolving world of technology.
        </p>
        <div className="px-1 w-full flex items-center md:justify-start justify-center gap-3 py-4">
          <PopUpOnLoad>
            <div
              onClick={() => socNav("facebook")}
              className="group bg-[#20b9f0] p-2 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-300"
            >
              <Facebook className="text-white" />
            </div>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.3}>
            <div
              onClick={() => socNav("linkedin")}
              className="group bg-[#20b9f0] p-2 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Linkedin className="text-white" />
            </div>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.5}>
            <div
              onClick={() => socNav("github")}
              className="group bg-[#20b9f0] p-2 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Github className="text-white" />
            </div>
          </PopUpOnLoad>
        </div>
        <div className="w-fit flex items-center justify-center md:justify-start gap-5 py-4">
          <PopUpOnLoad>
            <button className="px-3 py-2 cursor-pointer bg-[#20b9f0] rounded-md text-white font-semibold hover:bg-transparent hover:text-[#081b2b] duration-200 border-[#20b9f0] border-2">
              Hire Me
            </button>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.3}>
            <button
              onClick={() => router.push("https://mail.google.com/")}
              className="px-3 py-2 cursor-pointer border-2 border-[#20b9f0] rounded-md font-semibold hover:bg-[#20b9f0] hover:text-[#ededed] duration-200 hover:border-[#20b9f0]"
            >
              Contact Me
            </button>
          </PopUpOnLoad>
        </div>
      </div>
      <div className="w-full md:w-full flex items-center justify-start md:ps-[150px] md:pt-0 pt-25">
        <div className="relative w-[400px] md:w-[600px] md:h-[525px] h-[250px] rounded-md overflow-hidden">
          <Image
            src="/assets/images/profile-picture.png"
            alt="Graduation picture"
            fill
            sizes="w-[400px] md:w-[600px] md:h-[525px] h-[322px]"
            className="object-cover rounded-md blur-bottom-corners"
            priority
          />
        </div>
      </div>
    </div>
  );
}
