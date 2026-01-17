"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  BookOpen,
  ChevronDown,
  Sparkles,
  Brush,
  Terminal,
  Layers,
  Zap,
  Coffee,
  Heart,
  Quote,
  X,
  ChevronLeft,
  ChevronRight,
  PieChart as PieChartIcon,
} from "lucide-react";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// Gallery Images
const galleryImages = [
  {
    src: "/assets/images/gallery/g1.jpg",
    alt: "Gallery 1",
    title: "Graduation Day",
  },
  { src: "/assets/images/gallery/g2.jpg", alt: "Gallery 2", title: "JS Prom" },
  {
    src: "/assets/images/gallery/g3.jpg",
    alt: "Gallery 3",
    title: "Senior's Night",
  },
  {
    src: "/assets/images/gallery/g4.jpg",
    alt: "Gallery 4",
    title: "College Days",
  },
  {
    src: "/assets/images/gallery/g5.jpg",
    alt: "Gallery 5",
    title: "Conference",
  },
];

// Skills Data
const designerSkills = [
  { icon: Palette, label: "UI/UX Design" },
  { icon: Layers, label: "Interaction Design" },
  { icon: Zap, label: "Animation" },
  { icon: Brush, label: "Visual Design" },
];

const coderSkills = [
  { icon: Code2, label: "Front-End Development" },
  { icon: Terminal, label: "HTML / CSS / Tailwind" },
  { icon: Sparkles, label: "JavaScript / TypeScript" },
  { icon: Coffee, label: "React / Next.js" },
];

// Existing data
const skillsDistribution = [
  { name: "Frontend", value: 40, color: "#20b9f0" },
  { name: "UI/UX", value: 25, color: "#a855f7" },
  { name: "Backend", value: 20, color: "#22c55e" },
  { name: "DevOps", value: 15, color: "#f97316" },
];

const timeDistribution = [
  { name: "Coding", value: 45, color: "#20b9f0" },
  { name: "Design", value: 20, color: "#a855f7" },
  { name: "Learning", value: 20, color: "#22c55e" },
  { name: "Planning", value: 15, color: "#f97316" },
];

// NEW: Data for AnimatedPieChart
const techStackData = [
  { name: "React/Next.js", value: 35, color: "#61dafb" },
  { name: "TypeScript", value: 25, color: "#3178c6" },
  { name: "Tailwind CSS", value: 20, color: "#06b6d4" },
  { name: "Node.js", value: 12, color: "#68a063" },
  { name: "Others", value: 8, color: "#9ca3af" },
];

const projectTypesData = [
  { name: "Web Apps", value: 40, color: "#20b9f0" },
  { name: "Landing Pages", value: 25, color: "#a855f7" },
  { name: "Dashboards", value: 20, color: "#22c55e" },
  { name: "E-commerce", value: 15, color: "#f97316" },
];
// Animated Pie Chart Component
const AnimatedPieChart = ({
  data,
  size = 200,
  title,
  inView,
}: {
  data: { name: string; value: number; color: string }[];
  size?: number;
  title: string;
  inView: boolean;
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = (size - 40) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  const strokeWidth = 24;

  // Calculate cumulative percentages for rotation
  const segments = data.map((item, index) => {
    const percentage = item.value / total;
    const prevPercentages = data
      .slice(0, index)
      .reduce((sum, d) => sum + d.value / total, 0);
    return {
      ...item,
      percentage,
      rotation: prevPercentages * 360,
      strokeDasharray: circumference,
      strokeDashoffset: circumference * (1 - percentage),
    };
  });

  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-[#20b9f0]" />
        {title}
      </h4>

      {/* Chart Container */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />

          {/* Animated segments */}
          {segments.map((segment, index) => (
            <motion.circle
              key={segment.name}
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={segment.strokeDasharray}
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={
                inView
                  ? { strokeDashoffset: segment.strokeDashoffset }
                  : { strokeDashoffset: circumference }
              }
              transition={{
                duration: 1.2,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                transformOrigin: "center",
                transform: `rotate(${segment.rotation}deg)`,
                filter: `drop-shadow(0 0 8px ${segment.color}50)`,
              }}
            />
          ))}
        </svg>

        {/* Center content */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-[#20b9f0] to-purple-400 bg-clip-text text-transparent">
              {total}%
            </p>
            <p className="text-xs text-gray-500 mt-1">Passion</p>
          </div>
        </motion.div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-8">
        {data.map((item, index) => (
          <motion.div
            key={item.name}
            className="flex items-center gap-2 group cursor-default"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ x: 5 }}
          >
            <div
              className="w-3 h-3 rounded-full flex-shrink-0 transition-transform group-hover:scale-125"
              style={{
                backgroundColor: item.color,
                boxShadow: `0 0 8px ${item.color}50`,
              }}
            />
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              {item.name}
            </span>
            <span
              className="text-sm font-semibold ml-auto"
              style={{ color: item.color }}
            >
              {item.value}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Donut Chart Variant
const DonutChart = ({
  data,
  size = 180,
  title,
  inView,
}: {
  data: { name: string; value: number; color: string }[];
  size?: number;
  title: string;
  inView: boolean;
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const strokeWidth = 25;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let accumulatedOffset = 0;

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <PieChartIcon className="w-5 h-5 text-[#20b9f0]" />
        {title}
      </h4>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />

          {/* Segments */}
          {data.map((segment, index) => {
            const segmentLength = (segment.value / total) * circumference;
            const offset = accumulatedOffset;
            accumulatedOffset += segmentLength;

            return (
              <motion.circle
                key={segment.name}
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke={segment.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${segmentLength} ${circumference}`}
                strokeDashoffset={-offset}
                strokeLinecap="round"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={
                  inView
                    ? { opacity: 1, pathLength: 1 }
                    : { opacity: 0, pathLength: 0 }
                }
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="drop-shadow-lg"
                style={{
                  filter: `drop-shadow(0 0 6px ${segment.color}40)`,
                }}
              />
            );
          })}
        </svg>

        {/* Center content */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <div className="text-center">
            <p className="text-2xl font-bold bg-gradient-to-r from-[#20b9f0] to-purple-400 bg-clip-text text-transparent">
              {total}%
            </p>
            <p className="text-xs text-gray-500">Focus</p>
          </div>
        </motion.div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {data.map((item, index) => (
          <motion.div
            key={item.name}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05, borderColor: item.color }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-gray-300">{item.name}</span>
            <span
              className="text-xs font-semibold"
              style={{ color: item.color }}
            >
              {item.value}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Image Lightbox Component
const ImageLightbox = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: { src: string; alt: string; title: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    // Prevent body scroll
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  const currentImage = images[currentIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/95 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Close Button */}
      <motion.button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
      </motion.button>

      {/* Previous Button */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 z-10 p-4 rounded-full bg-white/10 border border-white/10 hover:bg-[#20b9f0]/30 hover:border-[#20b9f0]/50 transition-all"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </motion.button>

      {/* Image Container */}
      <motion.div
        className="relative z-10 w-[90vw] h-[80vh] max-w-5xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative w-full h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              priority
              className="object-contain"
              sizes="90vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Image Info */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-1">
            {currentImage.title}
          </h3>
          <p className="text-gray-400 text-sm">
            {currentIndex + 1} of {images.length}
          </p>
        </motion.div>
      </motion.div>

      {/* Next Button */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 z-10 p-4 rounded-full bg-white/10 border border-white/10 hover:bg-[#20b9f0]/30 hover:border-[#20b9f0]/50 transition-all"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </motion.button>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              // Navigate to specific image
              const diff = index - currentIndex;
              if (diff > 0) {
                for (let i = 0; i < diff; i++) onNext();
              } else {
                for (let i = 0; i < Math.abs(diff); i++) onPrev();
              }
            }}
            className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? "border-[#20b9f0] scale-110"
                : "border-transparent opacity-50 hover:opacity-100"
            }`}
            whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="64px"
            />
          </motion.button>
        ))}
      </div>

      {/* Keyboard hints */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        <div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-xs text-gray-400">
          <kbd className="font-mono">←</kbd> <kbd className="font-mono">→</kbd>{" "}
          Navigate
        </div>
        <div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-xs text-gray-400">
          <kbd className="font-mono">ESC</kbd> Close
        </div>
      </div>
    </motion.div>
  );
};

// Floating Particles Component
const FloatingParticles = ({ count = 20 }: { count?: number }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#20b9f0]/30 rounded-full"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
};

// Section Background Component
const SectionBackground = ({
  variant = "default",
}: {
  variant?: "default" | "light" | "gradient";
}) => {
  const bgClass = {
    default: "from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]",
    light: "from-[#1a1a2e] via-[#16213e] to-[#0a0a0a]",
    gradient: "from-[#16213e] via-[#1a1a2e] to-[#0a0a0a]",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgClass[variant]}`}
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#20b9f0]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <FloatingParticles count={15} />
    </div>
  );
};

// Gallery Card Component
const GalleryCard = ({
  src,
  alt,
  title,
  index,
  onClick,
}: {
  src: string;
  alt: string;
  title: string;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="relative w-64 h-80 flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
    >
      {/* Gradient Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#20b9f0] to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      <div className="relative w-full h-full bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 group-hover:border-transparent transition-all">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="256px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* View Text */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <p className="text-white font-medium text-sm">{title}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#20b9f0] text-xs">Click to expand</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ChevronRight className="w-4 h-4 text-[#20b9f0]" />
            </motion.div>
          </div>
        </div>

        {/* Expand Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

// Skill Card Component
const SkillCard = ({
  icon: Icon,
  label,
  index,
  color = "cyan",
}: {
  icon: React.ElementType;
  label: string;
  index: number;
  color?: "cyan" | "purple";
}) => {
  const colorClasses = {
    cyan: "from-[#20b9f0]/20 to-[#20b9f0]/5 border-[#20b9f0]/20 hover:border-[#20b9f0]/50 group-hover:text-[#20b9f0]",
    purple:
      "from-purple-500/20 to-purple-500/5 border-purple-500/20 hover:border-purple-500/50 group-hover:text-purple-400",
  };

  const iconColor = {
    cyan: "text-[#20b9f0]",
    purple: "text-purple-400",
  };

  return (
    <motion.div
      className={`group flex items-center gap-3 p-4 bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm rounded-xl border transition-all duration-300 cursor-default`}
      initial={{ opacity: 0, x: color === "cyan" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -3 }}
    >
      <div className={`p-2 bg-white/5 rounded-lg ${iconColor[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-gray-300 font-medium transition-colors">
        {label}
      </span>
    </motion.div>
  );
};

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const chartsRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.2 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  const chartsInView = useInView(chartsRef, { once: true, amount: 0.3 });
  const bookInView = useInView(bookRef, { once: true, amount: 0.3 });

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : galleryImages.length - 1
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full font-poppins tracking-wider text-[#fafafa] overflow-hidden"
      id="about"
    >
      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            images={galleryImages}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center py-20"
      >
        <SectionBackground variant="default" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          {/* Text Content */}
          <motion.div
            variants={slideRightVariants}
            className="w-full lg:w-1/2 max-w-xl space-y-6"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#20b9f0]/10 border border-[#20b9f0]/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-[#20b9f0] animate-pulse" />
              <span className="text-sm text-[#20b9f0] font-medium">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold leading-tight"
            >
              I am a{" "}
              <span className="bg-gradient-to-r from-[#20b9f0] to-purple-400 bg-clip-text text-transparent">
                Web Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-400 text-lg leading-relaxed"
            >
              <p>
                I enjoy exploring new technologies and environments that enhance
                my growth and efficiency as a programmer.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll often find me cooking or
                going for a jog — activities that help me recharge and stay
                focused.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-4"
            >
              {[
                { value: "2+", label: "Years Exp." },
                { value: "10+", label: "Projects" },
                { value: "∞", label: "Curiosity" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-[#20b9f0]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                onClick={() => scrollToSection("#gallery")}
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-[#20b9f0]/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore More</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={scaleVariants}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#20b9f0] via-purple-500 to-[#20b9f0] rounded-3xl opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#20b9f0] to-purple-500 rounded-3xl opacity-50" />

              {/* Main Image */}
              <div className="relative w-[320px] md:w-[400px] lg:w-[450px] h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-[#20b9f0]/20">
                <Image
                  src="/assets/images/gallery/g1.jpg"
                  alt="Profile Picture"
                  fill
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 450px"
                  className="object-cover"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50" />
              </div>

              {/* Floating Badge - Developer */}
              <motion.div
                className="absolute -bottom-4 -left-4 lg:-left-8 px-5 py-3 bg-[#1a1a2e]/90 border border-white/10 rounded-xl backdrop-blur-sm shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#20b9f0] to-purple-500 rounded-lg flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Passionate</p>
                    <p className="text-sm font-semibold">Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Creative */}
              <motion.div
                className="absolute -top-4 -right-4 lg:-right-8 px-5 py-3 bg-[#1a1a2e]/90 border border-white/10 rounded-xl backdrop-blur-sm shadow-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Creative</p>
                    <p className="text-sm font-semibold">Thinker</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection("#gallery")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[#20b9f0] transition-colors cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="relative w-full py-24">
        <SectionBackground variant="light" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={
              galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                galleryInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ delay: 0.2 }}
            >
              <Palette className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-sm text-purple-400 font-medium">
                Moments Captured
              </span>
            </motion.div>

            <h2 className="font-amarante text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              A glimpse into my journey through life and code
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent snap-x snap-mandatory">
            {galleryImages.map((image, index) => (
              <div key={index} className="snap-center">
                <GalleryCard
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  index={index}
                  onClick={() => openLightbox(index)}
                />
              </div>
            ))}
          </div>

          {/* Gallery hint */}
          <motion.p
            className="text-center text-gray-500 text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={galleryInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            Click any image to view in fullscreen
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="relative w-full py-24">
        <SectionBackground variant="default" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
          >
            {/* Designer Section */}
            <motion.div variants={slideRightVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#20b9f0]/10 border border-[#20b9f0]/30 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Palette className="w-4 h-4 text-[#20b9f0]" />
                  <span className="text-sm text-[#20b9f0] font-medium">
                    Creative Side
                  </span>
                </motion.div>

                <h3 className="font-amarante text-3xl lg:text-4xl font-bold">
                  <span className="text-[#20b9f0]">P</span>art{" "}
                  <span className="bg-gradient-to-r from-white to-[#20b9f0] bg-clip-text text-transparent">
                    Designer
                  </span>
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  I believe great design is invisible — it just works. I focus
                  on creating intuitive, beautiful interfaces that users love to
                  interact with.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {designerSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.label}
                    icon={skill.icon}
                    label={skill.label}
                    index={index}
                    color="cyan"
                  />
                ))}
              </div>
            </motion.div>

            {/* Coder Section */}
            <motion.div variants={slideLeftVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-400 font-medium">
                    Technical Side
                  </span>
                </motion.div>

                <h3 className="font-amarante text-3xl lg:text-4xl font-bold">
                  Part{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Coder
                  </span>
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Clean code is my passion. I write maintainable, scalable
                  solutions that bring designs to life with smooth animations
                  and interactions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coderSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.label}
                    icon={skill.icon}
                    label={skill.label}
                    index={index}
                    color="purple"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Divider Quote */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <Quote className="w-6 h-6 text-[#20b9f0]" />
              <p className="text-gray-300 italic">
                &quot;Half artist, half engineer — fully passionate about
                building great products.&quot;
              </p>
              <Quote className="w-6 h-6 text-purple-400 rotate-180" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charts Section */}
      <section ref={chartsRef} className="relative w-full py-24">
        <SectionBackground variant="light" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={
              chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                chartsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ delay: 0.2 }}
            >
              <PieChartIcon className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-sm text-green-400 font-medium">
                At a Glance
              </span>
            </motion.div>

            <h2 className="font-amarante text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
                Skills Breakdown
              </span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              A visual representation of where my focus lies
            </p>
          </motion.div>

          {/* Charts Grid - Row 1: Donut Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Skills Distribution Chart */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#20b9f0]/30 transition-all"
              initial={{ opacity: 0, x: -50 }}
              animate={
                chartsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <DonutChart
                data={skillsDistribution}
                size={200}
                title="Skills Distribution"
                inView={chartsInView}
              />
            </motion.div>

            {/* Time Distribution Chart */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all"
              initial={{ opacity: 0, x: 50 }}
              animate={
                chartsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <DonutChart
                data={timeDistribution}
                size={200}
                title="Weekly Time Allocation"
                inView={chartsInView}
              />
            </motion.div>
          </div>

          {/* Charts Grid - Row 2: Animated Pie Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Tech Stack Proficiency */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-500/30 transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={
                chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <AnimatedPieChart
                data={techStackData}
                size={220}
                title="Tech Stack Proficiency"
                inView={chartsInView}
              />
            </motion.div>

            {/* Project Types */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-500/30 transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={
                chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <AnimatedPieChart
                data={projectTypesData}
                size={220}
                title="Project Types"
                inView={chartsInView}
              />
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={
              chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ delay: 1.1 }}
          >
            {[
              {
                label: "Lines of Code",
                value: "50K+",
                color: "#20b9f0",
                icon: Code2,
              },
              {
                label: "Cups of Coffee",
                value: "∞",
                color: "#a855f7",
                icon: Coffee,
              },
              {
                label: "GitHub Commits",
                value: "500+",
                color: "#22c55e",
                icon: Terminal,
              },
              {
                label: "Happy Clients",
                value: "10+",
                color: "#f97316",
                icon: Heart,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon
                    className="w-6 h-6"
                    style={{ color: stat.color }}
                  />
                </div>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Book Section */}
      <section ref={bookRef} className="relative w-full py-24">
        <SectionBackground variant="gradient" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            variants={containerVariants}
            initial="hidden"
            animate={bookInView ? "visible" : "hidden"}
          >
            {/* Book Image */}
            <motion.div variants={scaleVariants} className="flex-shrink-0">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#20b9f0] to-purple-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

                <div className="relative w-[280px] md:w-[320px] h-[380px] md:h-[440px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl group-hover:border-[#20b9f0]/30 transition-all">
                  <Image
                    src="/assets/images/dontMakeMeThink.jpg"
                    alt="Don't Make Me Think book"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 px-4 py-2 bg-[#1a1a2e]/90 border border-white/10 rounded-xl backdrop-blur-sm"
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#20b9f0]" />
                    <span className="text-sm font-medium">Must Read</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Book Content */}
            <motion.div
              variants={slideLeftVariants}
              className="flex-1 space-y-6"
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <BookOpen className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">
                  Currently Reading
                </span>
              </motion.div>

              {/* Title */}
              <h3 className="font-amarante text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-white via-[#20b9f0] to-purple-400 bg-clip-text text-transparent">
                  Don&apos;t Make Me Think
                </span>
              </h3>

              {/* Author */}
              <p className="text-[#20b9f0] font-medium">by Steve Krug</p>

              {/* Description */}
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  A colleague recommended this book to me, and it&apos;s been a
                  game-changer. I&apos;ve always been curious about the way
                  people think and make decisions, and even the first chapter
                  gave me practical insights — especially useful as a front-end
                  developer.
                </p>
                <p>
                  Reading helps me appreciate the small details that contribute
                  to better design decisions and outcomes. This book
                  fundamentally changed how I approach user experience.
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="pt-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                  Key Takeaways
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Usability",
                    "User-Centric",
                    "Simplicity",
                    "Intuitive Design",
                    "Web Standards",
                  ].map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#20b9f0]/50 hover:text-[#20b9f0] transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        bookInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 pt-4">
                <span className="text-gray-400">My Rating:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.span
                      key={star}
                      className="text-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        bookInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ delay: 0.8 + star * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
