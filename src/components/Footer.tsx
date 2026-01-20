"use client";

import {
  ChevronRight,
  Copyright,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Heart,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/ramel.panis.1/",
    label: "Facebook",
  },
  { icon: Github, href: "https://github.com/panisjr", label: "Github" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/panisjr-ramel/",
    label: "LinkedIn",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "#showOfMyLatestWork" },
  { name: "Contact", href: "#contact" },
];

const contactInfo = [
  { icon: MapPin, text: "Brgy. San Roque, Barugo, Leyte", href: "#" },
  { icon: PhoneCall, text: "+63 960 875 7182", href: "tel:+639608757182" },
  {
    icon: Mail,
    text: "ramelopanisjr.06@gmail.com",
    href: "mailto:ramelopanisjr.06@gmail.com",
  },
];

// ✅ Properly typed animation variants
const containerVariants: Variants = {
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
      ease: [0.25, 0.46, 0.45, 0.94], // ✅ Use cubic bezier array
    },
  },
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSmoothNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white font-poppins"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#20b9f0]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />

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
          [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#20b9f0]/30 rounded-full"
              initial={{ opacity: 0 }}
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
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#20b9f0] to-transparent" />

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => handleSmoothNavigate("home")}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-full shadow-lg shadow-[#20b9f0]/30 hover:shadow-xl hover:shadow-[#20b9f0]/40 transition-all duration-300 group z-20"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <button
              className="flex items-center gap-2 cursor-pointer group mb-4"
              onClick={() => scrollToSection("#home")}
            >
              <div className="relative w-12 h-12 bg-gradient-to-r from-[#20b9f0] to-purple-500 rounded-xl p-0.5">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/images/nameLogo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-rubik text-2xl font-bold text-white group-hover:text-[#20b9f0] transition-colors">
                  Rams
                </span>
                <span className="text-xs text-gray-500">Web Developer</span>
              </div>
            </button>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting beautiful digital experiences with passion and precision.
              Let&apos;s build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-[#20b9f0] hover:border-[#20b9f0] transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.3 + index * 0.1 }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1a1a2e] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#20b9f0] rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }, index) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <button
                    onClick={() => {
                      if (href === "about") {
                        router.push("/about");
                      } else {
                        {
                          scrollToSection(href);
                        }
                      }
                    }}
                    className="group flex items-center gap-2 text-gray-400 hover:text-[#20b9f0] transition-all duration-300 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }, index) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={href}
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="p-2 bg-white/5 rounded-lg group-hover:bg-[#20b9f0]/20 transition-colors">
                      <Icon className="w-4 h-4 text-[#20b9f0]" />
                    </span>
                    <span className="text-sm pt-1.5">{text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get updates on my latest projects and tech insights.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#20b9f0] focus:bg-white/10 transition-all duration-300"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
              <motion.button
                className="w-full px-4 py-3 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-[#20b9f0]/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
        >
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <Copyright className="w-4 h-4" />
            <span>
              {new Date().getFullYear()} Ramel Panis. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>using</span>
            <span className="text-[#20b9f0] font-medium">Next.js</span>
            <span>&</span>
            <span className="text-purple-400 font-medium">Tailwind CSS</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
