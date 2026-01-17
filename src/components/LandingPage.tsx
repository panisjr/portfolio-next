"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  Facebook,
  Github,
  Linkedin,
  Download,
  Mail,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import PopUpOnLoad from "./animate/PopUpOnLoad";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socNav = (a: string) => {
    const urls: Record<string, string> = {
      facebook: "https://www.facebook.com/ramel.panis.1/",
      linkedin: "https://www.linkedin.com/in/panisjr-ramel/",
      github: "https://github.com/panisjr",
    };
    if (urls[a]) {
      window.open(urls[a], "_blank", "noopener,noreferrer");
    }
  };

  const handleSmoothNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="landingPage"
      className="relative md:w-full w-screen min-h-screen flex md:flex-nowrap flex-wrap-reverse items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-[#fafafa] font-poppins overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#20b9f0]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#20b9f0]/5 rounded-full blur-[150px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Particles */}
        {mounted &&
          [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#20b9f0]/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 md:w-1/2 w-full md:px-20 px-6 md:py-20 py-10 flex flex-col md:items-start items-center md:justify-start justify-center">
        {/* Status Badge */}
        <PopUpOnLoad>
          <div className="flex items-center gap-2 px-4 py-2 mb-6 bg-[#20b9f0]/10 border border-[#20b9f0]/30 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">
              Available for opportunities
            </span>
          </div>
        </PopUpOnLoad>

        {/* Name Section */}
        <PopUpOnLoad delay={0.1}>
          <p className="md:text-xl text-lg text-gray-400 tracking-wider uppercase mb-2">
            Hello, I&apos;m
          </p>
        </PopUpOnLoad>

        <PopUpOnLoad delay={0.2}>
          <h1 className="font-amarante md:text-7xl text-5xl font-bold bg-gradient-to-r from-white via-[#20b9f0] to-white bg-clip-text text-transparent mb-4 leading-tight">
            Ramel Panis
          </h1>
        </PopUpOnLoad>

        {/* Typewriter Section */}
        <PopUpOnLoad delay={0.3}>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#20b9f0] animate-pulse" />
            <h2 className="md:text-2xl text-xl font-medium">
              I am a{" "}
              <span className="text-[#20b9f0] font-semibold">
                <Typewriter
                  words={[
                    "Web Developer",
                    "UI Designer",
                    "Problem Solver",
                    "Lifelong Learner",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
          </div>
        </PopUpOnLoad>

        {/* Description */}
        <PopUpOnLoad delay={0.4}>
          <p className="md:text-lg text-base text-gray-400 md:w-[500px] w-full max-w-[400px] md:text-start text-center leading-relaxed mb-8">
            Fueled by curiosity and a strong desire for growth, I&#39;m
            passionate about crafting beautiful digital experiences and staying
            ahead in the ever-evolving world of technology.
          </p>
        </PopUpOnLoad>

        {/* Social Links */}
        <div className="flex items-center md:justify-start justify-center gap-4 mb-8">
          {[
            { name: "facebook", icon: Facebook, delay: 0.5 },
            { name: "linkedin", icon: Linkedin, delay: 0.6 },
            { name: "github", icon: Github, delay: 0.7 },
          ].map(({ name, icon: Icon, delay }) => (
            <PopUpOnLoad key={name} delay={delay}>
              <button
                onClick={() => socNav(name)}
                className="group relative p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer 
                         hover:bg-[#20b9f0] hover:border-[#20b9f0] hover:-translate-y-2 hover:shadow-lg 
                         hover:shadow-[#20b9f0]/25 transition-all duration-300 backdrop-blur-sm"
                aria-label={name}
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </PopUpOnLoad>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center md:justify-start justify-center gap-4 flex-wrap">
          <PopUpOnLoad delay={0.8}>
            <a
              href="/assets/files/resume.pdf"
              download
              className="group relative inline-flex px-6 py-3 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-xl 
               text-white font-semibold overflow-hidden transition-all duration-300 
               hover:shadow-xl hover:shadow-[#20b9f0]/30 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#20b9f0] opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </PopUpOnLoad>

          <PopUpOnLoad delay={0.9}>
            <button
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=ramelopanisjr.06@gmail.com",
                  "_blank"
                )
              }
              className="group px-6 py-3 border-2 border-[#20b9f0]/50 rounded-xl font-semibold 
                       text-[#20b9f0] hover:bg-[#20b9f0]/10 hover:border-[#20b9f0] 
                       hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </PopUpOnLoad>
        </div>

        {/* Stats Section */}
        <PopUpOnLoad delay={1}>
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "10+", label: "Projects Completed" },
              { value: "5+", label: "Technologies" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-[#20b9f0]">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </PopUpOnLoad>
      </div>

      {/* Image Section */}
      <div className="relative z-10 md:w-1/2 w-full flex items-center justify-center md:justify-start md:pt-0 pt-24 px-6">
        <PopUpOnLoad delay={0.3}>
          <div className="relative">
            {/* Decorative Elements */}
            <div
              className="absolute -inset-4 bg-gradient-to-r from-[#20b9f0] via-purple-500 to-[#20b9f0] 
                          rounded-3xl opacity-20 blur-2xl animate-pulse"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#20b9f0] to-purple-500 rounded-3xl opacity-50" />

            {/* Main Image Container */}
            <div
              className="relative w-[300px] md:w-[450px] h-[350px] md:h-[550px] rounded-2xl overflow-hidden 
                          border-2 border-white/10 shadow-2xl shadow-[#20b9f0]/20"
            >
              <Image
                src="/assets/images/profile-picture.png"
                alt="Ramel Panis - Web Developer"
                fill
                sizes="(max-width: 768px) 300px, 450px"
                className="object-cover"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -bottom-4 -left-4 md:-left-8 px-4 py-2 bg-[#1a1a2e]/90 border border-white/10 
                          rounded-xl backdrop-blur-sm shadow-xl animate-bounce-slow"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#20b9f0] rounded-lg flex items-center justify-center">
                  <span className="text-lg">🚀</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Currently</p>
                  <p className="text-sm font-semibold">Open to Work</p>
                </div>
              </div>
            </div>

            {/* Tech Stack Badge */}
            <div
              className="absolute -top-4 -right-4 md:-right-8 px-4 py-2 bg-[#1a1a2e]/90 border border-white/10 
                          rounded-xl backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["⚛️", "🔷", "🟢"].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-xs"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400">React • TS • Node</p>
              </div>
            </div>
          </div>
        </PopUpOnLoad>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => handleSmoothNavigate("frameworksList")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 
                 text-gray-500 hover:text-[#20b9f0] transition-colors cursor-pointer animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
}
