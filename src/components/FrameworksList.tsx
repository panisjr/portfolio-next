"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Layers,
  Database,
  Palette,
  Wrench,
  ChevronRight,
} from "lucide-react";
import AutoScrollCards from "./animate/AutoScrollCards";
import Image from "next/image";

// Framework data with categories
const frameworks = {
  frontend: [
    { name: "React", icon: "/assets/icons/react.svg", color: "#61DAFB", level: 90 },
    { name: "Next.js", icon: "/assets/icons/nextjs.svg", color: "#ffffff", level: 85 },
    { name: "TypeScript", icon: "/assets/icons/typescript.svg", color: "#3178C6", level: 80 },
    { name: "Tailwind CSS", icon: "/assets/icons/tailwind.svg", color: "#06B6D4", level: 95 },
    { name: "Vue.js", icon: "/assets/icons/vue.svg", color: "#4FC08D", level: 70 },
  ],
  backend: [
    { name: "Node.js", icon: "/assets/icons/nodejs.svg", color: "#339933", level: 80 },
    { name: "Express", icon: "/assets/icons/express.png", color: "#ffffff", level: 75 },
    { name: "Python", icon: "/assets/icons/python.svg", color: "#3776AB", level: 70 },
    { name: "PostgreSQL", icon: "/assets/icons/postgresql.svg", color: "#4169E1", level: 75 },
  ],
  tools: [
    { name: "Git", icon: "/assets/icons/git.svg", color: "#F05032", level: 85 },
    { name: "Docker", icon: "/assets/icons/docker.svg", color: "#2496ED", level: 65 },
    { name: "Figma", icon: "/assets/icons/figma.svg", color: "#F24E1E", level: 80 },
    { name: "VS Code", icon: "/assets/icons/vscode.svg", color: "#007ACC", level: 95 },
    { name: "Vercel", icon: "/assets/icons/vercel.svg", color: "#ffffff", level: 85 },
  ],
};

const allFrameworks = [
  ...frameworks.frontend,
  ...frameworks.backend,
  ...frameworks.tools,
];

// Create a reversed copy without mutating original
const allFrameworksReversed = [...allFrameworks].reverse();

const categories = [
  { id: "all", name: "All", icon: Layers, count: allFrameworks.length },
  { id: "frontend", name: "Frontend", icon: Palette, count: frameworks.frontend.length },
  { id: "backend", name: "Backend", icon: Database, count: frameworks.backend.length },
  { id: "tools", name: "Tools", icon: Wrench, count: frameworks.tools.length },
];

export default function FrameworksList() {
  const [activeCategory, setActiveCategory] = useState("all");

  const getFilteredFrameworks = () => {
    if (activeCategory === "all") return allFrameworks;
    return frameworks[activeCategory as keyof typeof frameworks] || [];
  };

  return (
    <section
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]"
      id="frameworksList"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#20b9f0]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Code Symbols - Hidden on mobile */}
        {["</>", "{}", "[]", "//", "=>", "&&"].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-[#20b9f0]/10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold select-none hidden md:block"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 bg-[#20b9f0]/10 border border-[#20b9f0]/20 rounded-full backdrop-blur-sm"
          >
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20b9f0]" />
            <span className="text-xs sm:text-sm text-[#20b9f0] font-medium">Tech Stack</span>
          </motion.div>

          {/* Title */}
          <h2 className="font-amarante text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
            Frameworks &{" "}
            <span className="bg-gradient-to-r from-[#20b9f0] via-purple-400 to-[#20b9f0] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-0">
            Tools and technologies I use to bring ideas to life. Constantly
            learning and exploring new possibilities.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-1 sm:gap-1.5 md:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-[#20b9f0] text-white shadow-lg shadow-[#20b9f0]/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">{category.name}</span>
              <span className="xs:hidden">{category.name}</span>
              <span
                className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${
                  activeCategory === category.id ? "bg-white/20" : "bg-white/5"
                }`}
              >
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Auto-Scroll Marquee - Row 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative -mx-4 sm:mx-0"
        >
          <AutoScrollCards duration={40} pauseOnHover={true}>
            {allFrameworks.map((framework, index) => (
              <FrameworkCard
                key={`row1-${framework.name}-${index}`}
                framework={framework}
              />
            ))}
          </AutoScrollCards>

          {/* Second Row - Reverse Direction */}
          <div className="mt-3 sm:mt-4 md:mt-6">
            <AutoScrollCards duration={45} reverse={true} pauseOnHover={true}>
              {allFrameworksReversed.map((framework, index) => (
                <FrameworkCard
                  key={`row2-${framework.name}-${index}`}
                  framework={framework}
                />
              ))}
            </AutoScrollCards>
          </div>
        </motion.div>

        {/* Detailed Grid View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-14 md:mt-16 lg:mt-20"
        >
          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-4 mb-4 sm:mb-6 md:mb-8 px-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#20b9f0]" />
              <span className="hidden sm:inline">Skill Proficiency</span>
              <span className="sm:hidden">Skills</span>
            </h3>
            <span className="text-xs sm:text-sm text-gray-500">
              {getFilteredFrameworks().length} technologies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {getFilteredFrameworks().map((framework, index) => (
              <motion.div
                key={`grid-${framework.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <FrameworkDetailCard framework={framework} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm mx-2 sm:mx-0 w-[calc(100%-1rem)] sm:w-auto max-w-md sm:max-w-none">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#20b9f0]/20 flex items-center justify-center mb-3 sm:mb-4">
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#20b9f0]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Always Learning</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6 max-w-xs sm:max-w-sm md:max-w-md px-2 sm:px-0">
              Technology evolves fast. I&#39;m committed to continuous learning
              and staying updated with the latest trends.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-semibold shadow-lg shadow-[#20b9f0]/25 hover:shadow-xl hover:shadow-[#20b9f0]/30 transition-all duration-300 cursor-pointer"
            >
              View My Projects
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Framework Card Component for Marquee
function FrameworkCard({
  framework,
}: {
  framework: { name: string; icon: string; color: string; level: number };
}) {
  return (
    <div
      className="group relative flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 mx-1.5 sm:mx-2 md:mx-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#20b9f0]/30 transition-all duration-300 cursor-pointer min-w-[140px] xs:min-w-[160px] sm:min-w-[180px] md:min-w-[220px] hover:scale-105 hover:-translate-y-1"
      style={{
        ["--glow-color" as string]: framework.color,
      }}
    >
      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${framework.color}15, transparent 70%)`,
          boxShadow: `0 10px 40px -10px ${framework.color}30`,
        }}
      />

      {/* Icon Container */}
      <div
        className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0"
        style={{
          backgroundColor: `${framework.color}15`,
          border: `1px solid ${framework.color}30`,
        }}
      >
        <Image
          src={framework.icon}
          alt={framework.name}
          width={28}
          height={28}
          className="object-contain w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
        />
      </div>

      {/* Content */}
      <div className="relative min-w-0 flex-1">
        <p className="font-medium sm:font-semibold text-white text-xs sm:text-sm md:text-base group-hover:text-[#20b9f0] transition-colors truncate">
          {framework.name}
        </p>
        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
          <div className="w-10 sm:w-12 md:w-16 h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${framework.level}%`,
                backgroundColor: framework.color,
              }}
            />
          </div>
          <span className="text-[10px] sm:text-xs text-gray-500">{framework.level}%</span>
        </div>
      </div>
    </div>
  );
}

// Detailed Framework Card
function FrameworkDetailCard({
  framework,
}: {
  framework: { name: string; icon: string; color: string; level: number };
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="group relative p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-[#20b9f0]/30 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${framework.color}15, transparent 60%)`,
        }}
      />

      <div className="relative flex items-center gap-3 sm:gap-4">
        {/* Icon */}
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${framework.color}15`,
            border: `1px solid ${framework.color}30`,
          }}
        >
          <Image
            src={framework.icon}
            alt={framework.name}
            width={32}
            height={32}
            className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2 gap-2">
            <p className="font-semibold sm:font-bold text-white text-sm sm:text-base group-hover:text-[#20b9f0] transition-colors truncate">
              {framework.name}
            </p>
            <span
              className="text-xs sm:text-sm font-semibold shrink-0"
              style={{ color: framework.color }}
            >
              {framework.level}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${framework.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${framework.color}, ${framework.color}80)`,
                boxShadow: `0 0 10px ${framework.color}50`,
              }}
            />
          </div>

          {/* Skill Level Label */}
          <div className="flex items-center justify-between mt-1.5 sm:mt-2">
            <span className="text-[10px] sm:text-xs text-gray-500">
              {framework.level >= 90
                ? "Expert"
                : framework.level >= 75
                ? "Advanced"
                : framework.level >= 60
                ? "Intermediate"
                : "Learning"}
            </span>
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      i < Math.floor(framework.level / 20)
                        ? framework.color
                        : "rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}