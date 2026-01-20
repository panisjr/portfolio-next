"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ChevronRight,
  ChevronLeft,
  X,
  ExternalLink,
  Maximize2,
  Keyboard,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface viewProjectTypes {
  projectName: string;
  description: string;
  image: string[];
  framework: { icon: string; name: string }[];
  link?: string;
  tags?: string[];
}

const loc = "/assets/images";

const latestProject: viewProjectTypes[] = [
  {
    projectName: "SALIGAN",
    description:
      "The System for Administering Local Information & Governance At the Neighborhood is a modern solution designed to streamline barangay operations, enhance transparency, and bring local services closer to residents. From managing records and community programs to improving communication between officials and citizens, our platform empowers neighborhood leaders with the tools they need to serve more efficiently and responsively.",
    image: [
      `${loc}/projects/saligan/saligan.png`,
      `${loc}/projects/saligan/s1.png`,
      `${loc}/projects/saligan/s2.png`,
      `${loc}/projects/saligan/s3.png`,
      `${loc}/projects/saligan/s4.png`,
      `${loc}/projects/saligan/s5.png`,
      `${loc}/projects/saligan/s6.png`,
      `${loc}/projects/saligan/s7.png`,
    ],
    framework: [
      { icon: `${loc}/nextjs.png`, name: "Next.js" },
      { icon: `${loc}/mapbox-logo.png`, name: "Mapbox" },
      { icon: `${loc}/supabase-logo.png`, name: "Supabase" },
    ],
    link: "https://saligan.vercel.app/",
    tags: ["Full Stack", "Government", "GIS"],
  },
  {
    projectName: "DRSchecker",
    description:
      "A smart assessment tool designed to evaluate a user's stress and depression levels based on their responses to guided questions or statements, using a reliable rating scale. This application leverages AI to interpret results and provide personalized advice, coping strategies, and mental wellness resources.",
    image: [
      `${loc}/drsLatest.png`,
      `${loc}/d1.png`,
      `${loc}/d2.png`,
      `${loc}/d3.png`,
      `${loc}/d4.png`,
      `${loc}/d5.png`,
      `${loc}/d6.png`,
      `${loc}/d7.png`,
      `${loc}/d8.png`,
      `${loc}/d9.png`,
      `${loc}/d10.png`,
    ],
    framework: [
      { icon: `${loc}/nextjs.png`, name: "Next.js" },
      { icon: `${loc}/gemini.png`, name: "Gemini AI" },
    ],
    tags: ["AI/ML", "Healthcare", "Assessment"],
  },
  {
    projectName: "ATLS - Traffic System",
    description:
      "An intelligent traffic management solution designed to reduce road congestion by automating traffic light operations based on real-time data. This system uses sensors or simulated input to detect vehicle density at intersections, enabling dynamic adjustment of light durations to optimize traffic flow.",
    image: [
      `${loc}/a7.png`,
      `${loc}/a1.png`,
      `${loc}/a2.png`,
      `${loc}/a3.png`,
      `${loc}/a4.png`,
      `${loc}/a5.png`,
      `${loc}/a6.png`,
    ],
    framework: [
      { icon: `${loc}/python.png`, name: "Python" },
      { icon: `${loc}/flask.png`, name: "Flask" },
      { icon: `${loc}/react.png`, name: "React" },
      { icon: `${loc}/postgresql.png`, name: "PostgreSQL" },
    ],
    tags: ["IoT", "Smart City", "Real-time"],
  },
  {
    projectName: "AutoGuardian",
    description:
      "AutoGuardian is a comprehensive web-based car management and rental platform that allows users to browse, rent, and manage cars online with ease. Designed for both car rental businesses and individual users, it streamlines vehicle access and rental scheduling.",
    image: [
      `${loc}/projects/car/car1.png`,
      `${loc}/projects/car/car2.png`,
      `${loc}/projects/car/car3.png`,
    ],
    framework: [
      { icon: `${loc}/angular.png`, name: "Angular" },
      { icon: `${loc}/laravel.svg`, name: "Laravel" },
    ],
    tags: ["E-commerce", "Rental", "Management"],
  },
];

// Animation Variants
const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

// Image Skeleton Loader
const ImageSkeleton = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse rounded-xl" />
);

// Fullscreen Image Modal
const FullscreenModal = ({
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}: {
  image: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      {/* Close Button */}
      <motion.button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all z-10 group"
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
        className="absolute left-6 p-4 rounded-full bg-white/10 hover:bg-[#20b9f0]/30 border border-white/10 hover:border-[#20b9f0]/50 transition-all z-10"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </motion.button>

      {/* Image */}
      <motion.div
        className="relative w-[90vw] h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt="Fullscreen view"
          fill
          priority
          className="object-contain"
          sizes="90vw"
        />
      </motion.div>

      {/* Next Button */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 p-4 rounded-full bg-white/10 hover:bg-[#20b9f0]/30 border border-white/10 hover:border-[#20b9f0]/50 transition-all z-10"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </motion.button>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white font-medium">
        <span className="text-[#20b9f0]">{currentIndex + 1}</span>
        <span className="text-gray-400 mx-2">/</span>
        <span>{totalImages}</span>
      </div>
    </motion.div>
  );
};

export function ViewProjectsDialog({
  open,
  setOpen,
  projectView,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectView: string;
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const found = latestProject.find((a) => a.projectName === projectView);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset state when dialog opens
  useEffect(() => {
    if (open) {
      setSelectedImageIndex(0);
      setImageLoading(true);
    }
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open || !found || isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev < found.image.length - 1 ? prev + 1 : 0
        );
        setImageLoading(true);
      }
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev > 0 ? prev - 1 : found.image.length - 1
        );
        setImageLoading(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, found, setOpen, isFullscreen]);

  // Scroll thumbnail into view
  useEffect(() => {
    if (thumbnailsRef.current) {
      const thumbnail = thumbnailsRef.current.children[
        selectedImageIndex
      ] as HTMLElement;
      if (thumbnail) {
        thumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [selectedImageIndex]);

  const handleNext = useCallback(() => {
    if (!found) return;
    setSelectedImageIndex((prev) =>
      prev < found.image.length - 1 ? prev + 1 : 0
    );
    setImageLoading(true);
  }, [found]);

  const handlePrev = useCallback(() => {
    if (!found) return;
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : found.image.length - 1
    );
    setImageLoading(true);
  }, [found]);

  if (!found) return null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[99] bg-black/80 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent
                showCloseButton={false}
                className="font-poppins w-full max-w-[1400px]! h-[90vh] max-h-[850px] p-0 overflow-hidden z-[100] border-0 bg-transparent shadow-none"
              >
                <motion.div
                  className="relative w-full h-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#20b9f0]/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />

                    {/* Grid Pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.02]"
                      style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    />

                    {/* Floating Particles */}
                    {mounted &&
                      [...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-[#20b9f0]/40 rounded-full"
                          animate={{
                            opacity: [0.2, 0.6, 0.2],
                            y: [0, -20, 0],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                          }}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                  </div>

                  {/* Header */}
                  <DialogHeader className="relative z-10 px-8 pt-8 pb-6">
                    {/* Close Button */}
                    <DialogClose
                      onClick={() => setOpen(false)}
                      className="absolute right-6 top-6 p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/50 cursor-pointer transition-all duration-300 group"
                    >
                      <X className="w-5 h-5 text-gray-400 group-hover:text-red-400 group-hover:rotate-90 transition-all duration-300" />
                    </DialogClose>

                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-4"
                    >
                      {/* Title Row */}
                      <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-6 h-6 text-[#20b9f0] animate-pulse" />
                          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-white via-[#20b9f0] to-white bg-clip-text text-transparent">
                            {found.projectName}
                          </DialogTitle>
                        </div>

                        {found.link && (
                          <motion.a
                            href={found.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-full text-white font-medium text-sm hover:shadow-lg hover:shadow-[#20b9f0]/30 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>Visit Live</span>
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </motion.div>

                      {/* Tags */}
                      {found.tags && (
                        <motion.div
                          variants={itemVariants}
                          className="flex flex-wrap gap-2"
                        >
                          {found.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 text-xs font-medium bg-[#20b9f0]/10 border border-[#20b9f0]/30 text-[#20b9f0] rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  </DialogHeader>

                  {/* Main Content */}
                  <motion.div
                    className="relative z-10 flex flex-col lg:flex-row gap-6 px-8 pb-8 h-[calc(100%-180px)] overflow-hidden"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Left: Image Gallery */}
                    <motion.div
                      variants={itemVariants}
                      className="flex-1 flex flex-col gap-4 min-w-0"
                    >
                      {/* Main Image */}
                      <div className="relative flex-1 min-h-[300px] bg-white/5 rounded-2xl overflow-hidden border border-white/10 group">
                        {imageLoading && <ImageSkeleton />}

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedImageIndex}
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute inset-0"
                          >
                            <Image
                              src={found.image[selectedImageIndex]}
                              alt={`${found.projectName} screenshot ${
                                selectedImageIndex + 1
                              }`}
                              fill
                              priority
                              className={cn(
                                "object-contain transition-opacity duration-300",
                                imageLoading ? "opacity-0" : "opacity-100"
                              )}
                              sizes="(max-width: 768px) 100vw, 60vw"
                              onLoad={() => setImageLoading(false)}
                            />
                          </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {found.image.length > 1 && (
                          <>
                            <motion.button
                              onClick={handlePrev}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-[#20b9f0]/30 hover:border-[#20b9f0]/50 transition-all opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1, x: -3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ChevronLeft className="w-5 h-5 text-white" />
                            </motion.button>
                            <motion.button
                              onClick={handleNext}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-[#20b9f0]/30 hover:border-[#20b9f0]/50 transition-all opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1, x: 3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ChevronRight className="w-5 h-5 text-white" />
                            </motion.button>
                          </>
                        )}

                        {/* Fullscreen Button */}
                        <motion.button
                          onClick={() => setIsFullscreen(true)}
                          className="absolute bottom-4 right-4 p-3 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-[#20b9f0]/30 hover:border-[#20b9f0]/50 transition-all opacity-0 group-hover:opacity-100"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Maximize2 className="w-5 h-5 text-white" />
                        </motion.button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-sm font-medium">
                          <span className="text-[#20b9f0]">
                            {selectedImageIndex + 1}
                          </span>
                          <span className="text-gray-400 mx-1">/</span>
                          <span>{found.image.length}</span>
                        </div>
                      </div>

                      {/* Thumbnails */}
                      {found.image.length > 1 && (
                        <div
                          ref={thumbnailsRef}
                          className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                        >
                          {found.image.map((img, idx) => (
                            <motion.button
                              key={idx}
                              onClick={() => {
                                setSelectedImageIndex(idx);
                                setImageLoading(true);
                              }}
                              className={cn(
                                "relative w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300",
                                selectedImageIndex === idx
                                  ? "border-[#20b9f0] shadow-lg shadow-[#20b9f0]/30"
                                  : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                              )}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                              />
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </motion.div>

                    {/* Right: Info Panel */}
                    <motion.div
                      variants={itemVariants}
                      className="lg:w-[350px] flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                    >
                      {/* Description */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#20b9f0] rounded-full animate-pulse" />
                          About Project
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {found.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                          Tech Stack
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                          {found.framework?.map((frame, idx) => (
                            <motion.div
                              key={idx}
                              className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#20b9f0]/30 hover:bg-[#20b9f0]/5 transition-all duration-300 group cursor-default"
                              whileHover={{ scale: 1.05, y: -3 }}
                            >
                              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                  src={frame.icon}
                                  alt={frame.name}
                                  fill
                                  className="object-contain"
                                  sizes="40px"
                                />
                              </div>
                              <span className="text-xs font-medium text-gray-400 group-hover:text-white text-center transition-colors">
                                {frame.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Keyboard Shortcuts */}
                      <div className="bg-gradient-to-br from-[#20b9f0]/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-5 border border-[#20b9f0]/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Keyboard className="w-4 h-4 text-[#20b9f0]" />
                          <p className="text-xs font-semibold text-[#20b9f0] uppercase tracking-wider">
                            Keyboard Shortcuts
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                            <kbd className="px-2 py-0.5 bg-white/10 rounded text-xs text-gray-300">
                              ←
                            </kbd>
                            <kbd className="px-2 py-0.5 bg-white/10 rounded text-xs text-gray-300">
                              →
                            </kbd>
                            <span className="text-xs text-gray-400">
                              Navigate
                            </span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                            <kbd className="px-2 py-0.5 bg-white/10 rounded text-xs text-gray-300">
                              ESC
                            </kbd>
                            <span className="text-xs text-gray-400">Close</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </DialogContent>
            </Dialog>
          </>
        )}
      </AnimatePresence>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && found && (
          <FullscreenModal
            image={found.image[selectedImageIndex]}
            onClose={() => setIsFullscreen(false)}
            onNext={handleNext}
            onPrev={handlePrev}
            currentIndex={selectedImageIndex}
            totalImages={found.image.length}
          />
        )}
      </AnimatePresence>
    </>
  );
}
