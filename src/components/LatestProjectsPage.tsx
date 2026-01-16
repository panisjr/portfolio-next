"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Calendar,
  ExternalLink,
  Github,
  ArrowRight,
  Eye,
  Star,
  Folder,
  ChevronRight,
  Code2,
  Layers,
  Rocket,
} from "lucide-react";
import { ViewProjectsDialog } from "./ViewProjectsDialog";

export interface latestProjectTypes {
  projectName: string;
  shortName: string;
  date: string;
  description: string;
  image: string;
  techStack: string[];
  status: "live" | "development" | "completed";
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  category: "web" | "ai" | "iot" | "mobile";
}

const latestProject: latestProjectTypes[] = [
  {
    projectName: "SALIGAN",
    shortName: "SALIGAN",
    date: "2025 - Present",
    description:
      "Empowering communities through smarter local governance. A comprehensive platform for barangay management with real-time mapping and analytics.",
    image: "/assets/images/projects/saligan/saligan.png",
    techStack: ["Next.js", "Mapbox", "Supabase", "TypeScript"],
    status: "development",
    featured: true,
    liveUrl: "https://saligan.vercel.app",
    category: "web",
  },
  {
    projectName: "DRSchecker",
    shortName: "DRSchecker",
    date: "2024 - 2025",
    description:
      "Depression Rating Scale Checker powered by AI to assess stress levels and provide personalized mental health advice and recommendations.",
    image: "/assets/images/drsLatest.png",
    techStack: ["Next.js", "Gemini API", "TailwindCSS"],
    status: "live",
    featured: true,
    liveUrl: "https://drschecker.vercel.app",
    category: "ai",
  },
  {
    projectName: "ATLS - Traffic System",
    shortName: "ATLS",
    date: "2024 - 2025",
    description:
      "Automated Traffic Light System using computer vision and AI to dynamically manage traffic flow and reduce congestion in urban areas.",
    image: "/assets/images/atls.png",
    techStack: ["Python", "OpenCV", "TensorFlow", "Arduino"],
    status: "completed",
    category: "iot",
  },
  {
    projectName: "CodePulse",
    shortName: "CodePulse",
    date: "2022 - 2023",
    description:
      "An interactive learning platform focused on programming languages, featuring hands-on exercises for Java and Python with real-time feedback.",
    image: "/assets/images/codePulse.png",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    status: "completed",
    githubUrl: "https://github.com/panisjr/codepulse",
    category: "web",
  },
  {
    projectName: "AutoGuardian",
    shortName: "AutoGuardian",
    date: "2023 - 2024",
    description:
      "A comprehensive web-based car management and rental platform with booking system, fleet tracking, and customer management features.",
    image: "/assets/images/projects/car/car2.png",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    status: "completed",
    category: "web",
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: Layers },
  { id: "web", name: "Web Apps", icon: Code2 },
  { id: "ai", name: "AI/ML", icon: Sparkles },
  { id: "iot", name: "IoT", icon: Rocket },
];

const statusConfig = {
  live: {
    label: "Live",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
    dot: "bg-green-500",
  },
  development: {
    label: "In Development",
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    dot: "bg-yellow-500",
  },
  completed: {
    label: "Completed",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    dot: "bg-blue-500",
  },
};

export default function LatestProjectsPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [projectView, setProjectView] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? latestProject
      : latestProject.filter((p) => p.category === activeCategory);

  const featuredProjects = latestProject.filter((p) => p.featured);

  return (
    <>
      <section
        className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]"
        id="showOfMyLatestWork"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-[#20b9f0]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#20b9f0]/5 rounded-full blur-[200px]" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#20b9f0]/30 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
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
              <Folder className="w-4 h-4 text-[#20b9f0]" />
              <span className="text-sm text-[#20b9f0] font-medium">
                Portfolio
              </span>
            </motion.div>

            {/* Title */}
            <h2 className="font-amarante text-4xl md:text-6xl font-bold text-white mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-[#20b9f0] via-purple-400 to-[#20b9f0] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of my recent work showcasing my skills in web
              development, AI integration, and problem-solving.
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#20b9f0]/50" />
              <Sparkles className="w-5 h-5 text-[#20b9f0]" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#20b9f0]/50" />
            </div>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#20b9f0]/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#20b9f0]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Featured Projects
                  </h3>
                  <p className="text-sm text-gray-500">
                    Highlighted work I&#39;m most proud of
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard
                    key={project.shortName}
                    project={project}
                    index={index}
                    onClick={() => {
                      setOpen(true);
                      setProjectView(project.projectName);
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

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
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-[#20b9f0] text-white shadow-lg shadow-[#20b9f0]/25"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.shortName}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    isHovered={hoveredProject === project.shortName}
                    onHover={() => setHoveredProject(project.shortName)}
                    onLeave={() => setHoveredProject(null)}
                    onClick={() => {
                      setOpen(true);
                      setProjectView(project.projectName);
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center">
                <Folder className="w-10 h-10 text-gray-600" />
              </div>
              <p className="text-gray-500">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#20b9f0]/20 flex items-center justify-center">
                  <Github className="w-6 h-6 text-[#20b9f0]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">Want to see more?</p>
                  <p className="text-sm text-gray-500">
                    Check out my GitHub for all projects
                  </p>
                </div>
              </div>
              <motion.a
                href="https://github.com/panisjr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-xl text-white font-semibold shadow-lg shadow-[#20b9f0]/25 hover:shadow-xl hover:shadow-[#20b9f0]/30 transition-all duration-300"
              >
                View GitHub
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <ViewProjectsDialog
        open={open}
        setOpen={setOpen}
        projectView={projectView}
      />
    </>
  );
}

// Featured Project Card Component
function FeaturedProjectCard({
  project,
  index,
  onClick,
}: {
  project: latestProjectTypes;
  index: number;
  onClick: () => void;
}) {
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#20b9f0]/30 transition-all duration-500 cursor-pointer"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20b9f0]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[200px] md:h-[280px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.projectName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden" />

          {/* Featured Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#20b9f0]/90 backdrop-blur-sm rounded-full">
            <Star className="w-3 h-3 text-white fill-white" />
            <span className="text-xs font-semibold text-white">Featured</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative w-full md:w-1/2 p-6 flex flex-col justify-center">
          {/* Status Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border w-fit mb-3 ${status.color}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`}
            />
            {status.label}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white group-hover:text-[#20b9f0] transition-colors mb-2">
            {project.shortName}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-lg border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Calendar className="w-4 h-4" />
              {project.date}
            </div>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Github className="w-4 h-4 text-gray-400" />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg bg-[#20b9f0]/20 hover:bg-[#20b9f0]/30 flex items-center justify-center transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#20b9f0]" />
                </motion.a>
              )}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-1 text-[#20b9f0] font-medium text-sm"
              >
                View Details
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Regular Project Card Component
function ProjectCard({
  project,
  isHovered,
  onHover,
  onLeave,
  onClick,
}: {
  project: latestProjectTypes;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const status = statusConfig[project.status];

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      whileHover={{ y: -8 }}
      className="group relative h-full rounded-2xl bg-white/5 border border-white/10 hover:border-[#20b9f0]/30 overflow-hidden transition-all duration-300 cursor-pointer backdrop-blur-sm"
      style={{
        boxShadow: isHovered
          ? "0 20px 40px -20px rgba(32, 185, 240, 0.3)"
          : "none",
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20b9f0]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Container */}
      <div className="relative h-[180px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.projectName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

        {/* Status Badge */}
        <div
          className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${status.color} backdrop-blur-sm`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`}
          />
          {status.label}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg bg-[#20b9f0]/90 backdrop-blur-sm flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center"
            >
              <Github className="w-4 h-4 text-white" />
            </motion.a>
          )}
        </div>

        {/* View Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-[#20b9f0]/10 flex items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Eye className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-[#20b9f0] transition-colors mb-2">
          {project.shortName}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded-md border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-0.5 text-xs bg-[#20b9f0]/10 text-[#20b9f0] rounded-md">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {project.date}
          </div>
          <motion.div
            whileHover={{ x: 3 }}
            className="flex items-center gap-1 text-[#20b9f0] text-xs font-medium"
          >
            View Project
            <ChevronRight className="w-3.5 h-3.5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
