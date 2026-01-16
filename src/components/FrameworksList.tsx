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
    {
      name: "React",
      icon: "/assets/icons/react.svg",
      color: "#61DAFB",
      level: 90,
    },
    {
      name: "Next.js",
      icon: "/assets/icons/nextjs.svg",
      color: "#ffffff",
      level: 85,
    },
    {
      name: "TypeScript",
      icon: "/assets/icons/typescript.svg",
      color: "#3178C6",
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/icons/tailwind.svg",
      color: "#06B6D4",
      level: 95,
    },
    {
      name: "Vue.js",
      icon: "/assets/icons/vue.svg",
      color: "#4FC08D",
      level: 70,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "/assets/icons/nodejs.svg",
      color: "#339933",
      level: 80,
    },
    {
      name: "Express",
      icon: "/assets/icons/express.svg",
      color: "#ffffff",
      level: 75,
    },
    {
      name: "Python",
      icon: "/assets/icons/python.svg",
      color: "#3776AB",
      level: 70,
    },
    {
      name: "PostgreSQL",
      icon: "/assets/icons/postgresql.svg",
      color: "#4169E1",
      level: 75,
    },
    {
      name: "MongoDB",
      icon: "/assets/icons/mongodb.svg",
      color: "#47A248",
      level: 80,
    },
  ],
  tools: [
    { name: "Git", icon: "/assets/icons/git.svg", color: "#F05032", level: 85 },
    {
      name: "Docker",
      icon: "/assets/icons/docker.svg",
      color: "#2496ED",
      level: 65,
    },
    {
      name: "Figma",
      icon: "/assets/icons/figma.svg",
      color: "#F24E1E",
      level: 80,
    },
    {
      name: "VS Code",
      icon: "/assets/icons/vscode.svg",
      color: "#007ACC",
      level: 95,
    },
    {
      name: "Vercel",
      icon: "/assets/icons/vercel.svg",
      color: "#ffffff",
      level: 85,
    },
  ],
};

const allFrameworks = [
  ...frameworks.frontend,
  ...frameworks.backend,
  ...frameworks.tools,
];

const categories = [
  { id: "all", name: "All", icon: Layers, count: allFrameworks.length },
  {
    id: "frontend",
    name: "Frontend",
    icon: Palette,
    count: frameworks.frontend.length,
  },
  {
    id: "backend",
    name: "Backend",
    icon: Database,
    count: frameworks.backend.length,
  },
  { id: "tools", name: "Tools", icon: Wrench, count: frameworks.tools.length },
];

export default function FrameworksList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredFramework, setHoveredFramework] = useState<string | null>(null);

  const getFilteredFrameworks = () => {
    if (activeCategory === "all") return allFrameworks;
    return frameworks[activeCategory as keyof typeof frameworks] || [];
  };

  return (
    <section
      className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]"
      id="frameworksList"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#20b9f0]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Code Symbols */}
        {["</>", "{}", "[]", "//", "=>", "&&"].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-[#20b9f0]/10 text-4xl font-mono font-bold"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#20b9f0]/10 border border-[#20b9f0]/20 rounded-full backdrop-blur-sm"
          >
            <Code2 className="w-4 h-4 text-[#20b9f0]" />
            <span className="text-sm text-[#20b9f0] font-medium">
              Tech Stack
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="font-amarante text-4xl md:text-6xl font-bold text-white mb-4">
            Frameworks &{" "}
            <span className="bg-gradient-to-r from-[#20b9f0] via-purple-400 to-[#20b9f0] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#20b9f0] text-white shadow-lg shadow-[#20b9f0]/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id ? "bg-white/20" : "bg-white/5"
                }`}
              >
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Auto-Scroll Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          <AutoScrollCards duration={50}>
            {[...allFrameworks, ...allFrameworks].map((framework, index) => (
              <FrameworkCard
                key={`${framework.name}-${index}`}
                framework={framework}
                isHovered={hoveredFramework === framework.name}
                onHover={() => setHoveredFramework(framework.name)}
                onLeave={() => setHoveredFramework(null)}
              />
            ))}
          </AutoScrollCards>

          {/* Second Row - Reverse Direction */}
          <div className="mt-6">
            <AutoScrollCards duration={60}>
              {[...allFrameworks.reverse(), ...allFrameworks].map(
                (framework, index) => (
                  <FrameworkCard
                    key={`${framework.name}-reverse-${index}`}
                    framework={framework}
                    isHovered={hoveredFramework === framework.name}
                    onHover={() => setHoveredFramework(framework.name)}
                    onLeave={() => setHoveredFramework(null)}
                  />
                )
              )}
            </AutoScrollCards>
          </div>
        </motion.div>

        {/* Detailed Grid View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#20b9f0]" />
              Skill Proficiency
            </h3>
            <span className="text-sm text-gray-500">
              {getFilteredFrameworks().length} technologies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getFilteredFrameworks().map((framework, index) => (
              <motion.div
                key={framework.name}
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
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-2xl bg-[#20b9f0]/20 flex items-center justify-center mb-4">
              <Code2 className="w-8 h-8 text-[#20b9f0]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Always Learning
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Technology evolves fast. I&#39;m committed to continuous learning
              and staying updated with the latest trends.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-xl text-white font-semibold shadow-lg shadow-[#20b9f0]/25 hover:shadow-xl hover:shadow-[#20b9f0]/30 transition-all duration-300"
            >
              View My Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
  isHovered,
  onHover,
  onLeave,
}: {
  framework: { name: string; icon: string; color: string; level: number };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative flex items-center gap-4 px-6 py-4 mx-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#20b9f0]/30 transition-all duration-300 cursor-pointer min-w-[200px]"
      style={{
        boxShadow: isHovered
          ? `0 10px 40px -10px ${framework.color}40`
          : "none",
      }}
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${framework.color}10, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
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
          className="object-contain"
        />
      </div>

      {/* Name */}
      <div>
        <p className="font-semibold text-white group-hover:text-[#20b9f0] transition-colors">
          {framework.name}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${framework.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full rounded-full"
              style={{ backgroundColor: framework.color }}
            />
          </div>
          <span className="text-xs text-gray-500">{framework.level}%</span>
        </div>
      </div>
    </motion.div>
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
      className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-[#20b9f0]/30 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${framework.color}15, transparent 60%)`,
        }}
      />

      <div className="relative flex items-center gap-4">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
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
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <p className="font-bold text-white group-hover:text-[#20b9f0] transition-colors truncate">
              {framework.name}
            </p>
            <span
              className="text-sm font-semibold"
              style={{ color: framework.color }}
            >
              {framework.level}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${framework.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-full rounded-full transition-all duration-300"
              style={{
                background: `linear-gradient(90deg, ${framework.color}, ${framework.color}80)`,
                boxShadow: `0 0 10px ${framework.color}50`,
              }}
            />
          </div>

          {/* Skill Level Label */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">
              {framework.level >= 90
                ? "Expert"
                : framework.level >= 75
                ? "Advanced"
                : framework.level >= 60
                ? "Intermediate"
                : "Learning"}
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i < Math.floor(framework.level / 20) ? "" : "bg-white/10"
                  }`}
                  style={{
                    backgroundColor:
                      i < Math.floor(framework.level / 20)
                        ? framework.color
                        : undefined,
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
