"use client"
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Facebook, Github, Linkedin } from "lucide-react";
import PopUpOnLoad from "./animate/PopUpOnLoad";
import ZoomInOnLoad from "./animate/ZoomIn";
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
    <div className="w-full flex md:flex-nowrap flex-wrap items-center justify-center">
      <div className="w-full md:max-w-[950px] px-28 ps-44 md:ps-48 py-16 flex flex-col items-start justify-start">
        <p>Hello, I&apos;m</p>
        <p className="font-amarante text-5xl">Ramel Panis</p>
        <h1 className="text-3xl font-bold text-nowrap">
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
        <p className="w-full font-poppins">
          Fueled by curiosity and a strong desire for growth, I’m passionate
          about honing my technical abilities and staying ahead in the
          ever-evolving world of technology.
        </p>
        <div className="w-full flex items-center justify-start gap-3 py-4">
          <PopUpOnLoad>
            <div
              onClick={() => socNav("facebook")}
              className="bg-[#20b9f0] p-1 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Facebook />
            </div>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.3}>
            <div
              onClick={() => socNav("linkedin")}
              className="bg-[#20b9f0] p-1 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Linkedin />
            </div>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.5}>
            <div
              onClick={() => socNav("github")}
              className="bg-[#20b9f0] p-1 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Github />
            </div>
          </PopUpOnLoad>
        </div>
        <div className="w-full md:w-fit flex items-center justify-center md:justify-start gap-5 py-4">
          <PopUpOnLoad>
            <button className="w-[120px] h-[40px] bg-[#20b9f0] rounded-sm text-[#081b2b] font-semibold hover:bg-white hover:text-[#081b2b] duration-200 hover:border-[#20b9f0] border-2 border-transparent">
              Hire Me
            </button>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.3}>
            <button
              onClick={() => router.push("https://mail.google.com/")}
              className="w-[120px] h-[40px] border-2 border-[#20b9f0] rounded-sm font-semibold hover:bg-[#20b9f0] hover:text-[#ededed] duration-200 hover:border-[#20b9f0]"
            >
              Contact Me
            </button>
          </PopUpOnLoad>
        </div>
      </div>
      <div className="w-fit md:w-full md:flex md:items-center md:justify-start justify-center md:ps-[150px]">
        <ZoomInOnLoad>
          <div className="relative w-[500px] md:w-[400px] h-[600px] rounded-md">
            <Image
              src={"/assets/images/gradPic2.jpg"}
              alt="Graduation picture"
              fill
              sizes="w-[500px] h-[600px]"
              className="md:object-contain object-cover rounded-md"
              priority
            />
          </div>
        </ZoomInOnLoad>
      </div>
    </div>
  );
}
