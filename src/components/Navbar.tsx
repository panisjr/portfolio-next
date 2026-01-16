"use client";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  AlignJustify,
  X,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  Home,
  FolderOpen,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const components: {
  title: string;
  href: string;
  description: string;
  status: string;
}[] = [
  {
    title: "DRSchecker",
    href: "https://drschecker.vercel.app",
    description: "Assess your stress level and get personalized advice.",
    status: "live",
  },
  {
    title: "ATLS",
    href: "",
    description: "Adaptive Traffic Light System for smart cities.",
    status: "building",
  },
  {
    title: "CodePulse",
    href: "",
    description: "Real-time code collaboration platform.",
    status: "building",
  },
  {
    title: "NoteAI",
    href: "",
    description: "AI-powered note-taking assistant.",
    status: "building",
  },
];

function ListItem({
  title,
  children,
  href,
  status,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; status?: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-[#20b9f0]/10 hover:backdrop-blur-sm border border-transparent hover:border-[#20b9f0]/20"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white group-hover:text-[#20b9f0] transition-colors">
              {title}
            </span>
            {status === "live" && (
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                LIVE
              </span>
            )}
            {status === "building" && (
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                SOON
              </span>
            )}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400 group-hover:text-gray-300">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [isWidth, setIsWidth] = useState<boolean | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleSmoothNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const el = document.getElementById("app-scroll");
    if (!el) return;

    const onScroll = () => {
      setScrolled(el.scrollTop > 20);
    };

    const checkScreen = () => {
      const currentWidth = window.innerWidth;
      const isNowMobile = currentWidth <= 1024;
      setIsWidth(isNowMobile);
    };

    checkScreen();
    onScroll();

    window.addEventListener("resize", checkScreen);
    el.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", checkScreen);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);
  if (isWidth === null) {
    return null;
  }

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: User, href: "/about/" },
    { name: "Projects", icon: FolderOpen },
    { name: "Skills", icon: Code2 },
    { name: "Experience", icon: Briefcase },
    { name: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      {!isWidth ? (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? "py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
              : "py-4 bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => router.push("/")}
                className="flex items-center gap-1 cursor-pointer group"
              >
                <div className="relative w-[60px] h-[60px] transition-transform duration-300 group-hover:rotate-12">
                  <Image
                    src="/assets/images/nameLogo.png"
                    alt="Logo"
                    fill
                    sizes="60px"
                    priority
                    className="object-contain"
                  />
                </div>
                <span className="font-rubik text-3xl text-white group-hover:text-[#20b9f0] transition-colors duration-300">
                  ams
                </span>
                <Sparkles className="w-4 h-4 text-[#20b9f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Navigation Menu */}
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex items-center gap-1">
                  {/* Home */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      onClick={() => router.push("/")}
                      className="bg-transparent text-gray-300 hover:text-white font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 data-[state=open]:bg-white/5"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Home
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[500px] p-4 bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        <ul className="grid gap-3 lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <div
                                onClick={() =>
                                  router.push("https://saligan.vercel.app/")
                                }
                                className="group cursor-pointer flex h-full w-full flex-col justify-end rounded-xl bg-gradient-to-b from-[#20b9f0]/20 to-[#20b9f0]/5 p-6 no-underline outline-none select-none transition-all duration-300 hover:from-[#20b9f0]/30 hover:to-[#20b9f0]/10 border border-[#20b9f0]/20"
                              >
                                <div className="relative w-[120px] h-[40px] rounded-lg bg-white/10 backdrop-blur-sm overflow-hidden">
                                  <Image
                                    src="/assets/images/projects/saligan/saligan-logo.png"
                                    alt="Saligan logo"
                                    fill
                                    sizes="120px"
                                    className="object-contain p-2"
                                  />
                                </div>
                                <div className="flex items-center gap-2 mt-4 mb-2">
                                  <span className="text-lg font-bold text-white">
                                    Latest Project
                                  </span>
                                  <ExternalLink className="w-4 h-4 text-[#20b9f0] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                  Empowering communities through smarter local
                                  governance.
                                </p>
                              </div>
                            </NavigationMenuLink>
                          </li>
                          <NavDropdownItem
                            title="Introduction"
                            description="Learn more about me..."
                            onClick={() => router.push("/")}
                          />
                          <NavDropdownItem
                            title="My Latest Projects"
                            description="Take a preview of my latest work"
                            onClick={() =>
                              handleSmoothNavigate("showOfMyLatestWork")
                            }
                          />
                          <NavDropdownItem
                            title="Frameworks"
                            description="Technologies I work with"
                            onClick={() =>
                              handleSmoothNavigate("frameworksList")
                            }
                          />
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* About */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about/"
                        className="flex flex-row items-center gap-2 bg-transparent text-gray-300 hover:text-white font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300"
                      >
                        <User className="w-4 h-4" />
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Projects */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 data-[state=open]:bg-white/5">
                      <FolderOpen className="w-4 h-4 mr-2" />
                      Projects
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[600px] p-4 bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                          <FolderOpen className="w-5 h-5 text-[#20b9f0]" />
                          <span className="font-bold text-white">
                            My Projects
                          </span>
                        </div>
                        <ul className="grid gap-2 md:grid-cols-2">
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                              status={component.status}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Skills */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 data-[state=open]:bg-white/5">
                      <Code2 className="w-4 h-4 mr-2" />
                      Skills
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[350px] p-4 bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                          <Code2 className="w-5 h-5 text-[#20b9f0]" />
                          <span className="font-bold text-white">
                            My Skills
                          </span>
                        </div>
                        <div className="space-y-3">
                          <SkillCard
                            title="Full-Stack Development"
                            description="Proficient in both front-end and back-end development with modern technologies."
                            icon="🚀"
                          />
                          <SkillCard
                            title="Problem Solving"
                            description="Strong analytical skills with a focus on efficient solutions."
                            icon="🧩"
                          />
                          <SkillCard
                            title="UI/UX Design"
                            description="Creating beautiful and intuitive user experiences."
                            icon="🎨"
                          />
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Experience */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 data-[state=open]:bg-white/5">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Experience
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                          <Briefcase className="w-5 h-5 text-[#20b9f0]" />
                          <span className="font-bold text-white">
                            Experience
                          </span>
                        </div>
                        <ExperienceCard
                          company="Symphonics Co. Ltd."
                          role="Front-End Developer"
                          period="2024 - Present"
                          type="Full-time"
                          href="https://symphonicsco.com/"
                        />
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Contact */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 data-[state=open]:bg-white/5">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] p-4 bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                          <Mail className="w-5 h-5 text-[#20b9f0]" />
                          <span className="font-bold text-white">
                            Get in Touch
                          </span>
                        </div>
                        <div className="space-y-3">
                          <ContactCard
                            icon={<Phone className="w-4 h-4" />}
                            label="Phone"
                            value="09608757182"
                            href="tel:09608757182"
                          />
                          <ContactCard
                            icon={<Mail className="w-4 h-4" />}
                            label="Email"
                            value="ramelopanisjr.06@gmail.com"
                            href="mailto:ramelopanisjr.06@gmail.com"
                          />
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/assets/files/resume.pdf"
                download
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-xl text-white font-semibold shadow-lg shadow-[#20b9f0]/25 hover:shadow-xl hover:shadow-[#20b9f0]/30 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.nav>
      ) : (
        /* Mobile Navbar */
        <>
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              scrolled || mobileMenuOpen
                ? "py-2 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
                : "py-3 bg-transparent"
            }`}
          >
            <div className="px-4 flex items-center justify-between">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => router.push("/")}
                className="flex items-center gap-1 cursor-pointer"
              >
                <div className="relative w-[50px] h-[50px]">
                  <Image
                    src="/assets/images/nameLogo.png"
                    alt="Logo"
                    fill
                    sizes="50px"
                    priority
                    className="object-contain"
                  />
                </div>
                <span className="font-rubik text-2xl text-white">ams</span>
              </motion.div>

              {/* Hamburger Menu */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AlignJustify className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.nav>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                />

                {/* Menu Panel */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 z-50 h-full w-[85%] max-w-[400px] bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 overflow-y-auto"
                >
                  {/* Menu Header */}
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-[#20b9f0]/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-[#20b9f0]" />
                      </div>
                      <span className="font-bold text-white">Menu</span>
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"
                    >
                      <X className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Menu Items */}
                  <div className="p-4 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.href ? (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-[#20b9f0]/10 hover:border-[#20b9f0]/20 transition-all duration-300"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-[#20b9f0]/10 flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-[#20b9f0]" />
                              </div>
                              <span className="font-medium text-white">
                                {item.name}
                              </span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                          </Link>
                        ) : (
                          <MobileNavDropdown
                            title={item.name}
                            icon={
                              <item.icon className="w-5 h-5 text-[#20b9f0]" />
                            }
                          >
                            {item.name === "Projects" && (
                              <div className="space-y-2 mt-2">
                                {components.map((comp) => (
                                  <Link
                                    key={comp.title}
                                    href={comp.href}
                                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-[#20b9f0]/10 transition-colors"
                                  >
                                    <div>
                                      <p className="font-medium text-white text-sm">
                                        {comp.title}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {comp.description}
                                      </p>
                                    </div>
                                    {comp.status === "live" && (
                                      <span className="px-2 py-0.5 text-[10px] bg-green-500/20 text-green-400 rounded-full">
                                        LIVE
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            )}
                            {item.name === "Skills" && (
                              <div className="space-y-2 mt-2">
                                <SkillCard
                                  title="Full-Stack Development"
                                  description="Front-end & Back-end"
                                  icon="🚀"
                                  compact
                                />
                                <SkillCard
                                  title="Problem Solving"
                                  description="Analytical thinking"
                                  icon="🧩"
                                  compact
                                />
                                <SkillCard
                                  title="UI/UX Design"
                                  description="Beautiful interfaces"
                                  icon="🎨"
                                  compact
                                />
                              </div>
                            )}
                            {item.name === "Experience" && (
                              <div className="mt-2">
                                <ExperienceCard
                                  company="Symphonics Co. Ltd."
                                  role="Front-End Developer"
                                  period="2024 - Present"
                                  type="Full-time"
                                  href="https://symphonicsco.com/"
                                  compact
                                />
                              </div>
                            )}
                            {item.name === "Contact" && (
                              <div className="space-y-2 mt-2">
                                <ContactCard
                                  icon={<Phone className="w-4 h-4" />}
                                  label="Phone"
                                  value="09608757182"
                                  href="tel:09608757182"
                                  compact
                                />
                                <ContactCard
                                  icon={<Mail className="w-4 h-4" />}
                                  label="Email"
                                  value="ramelopanisjr.06@gmail.com"
                                  href="mailto:ramelopanisjr.06@gmail.com"
                                  compact
                                />
                              </div>
                            )}
                          </MobileNavDropdown>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="p-4 mt-4 border-t border-white/10">
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      href="/assets/files/resume.pdf"
                      download
                      className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-[#20b9f0] to-[#0ea5e9] rounded-xl text-white font-semibold shadow-lg shadow-[#20b9f0]/25"
                    >
                      <Download className="w-5 h-5" />
                      Download CV
                    </motion.a>
                  </div>

                  {/* Footer */}
                  <div className="p-4 text-center">
                    <p className="text-xs text-gray-500">
                      © 2024 Ramel Panis. All rights reserved.
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

// Helper Components
function NavDropdownItem({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
    >
      <p className="text-sm font-bold text-white group-hover:text-[#20b9f0] transition-colors flex items-center gap-2">
        {title}
        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </p>
      <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
        {description}
      </p>
    </div>
  );
}

function SkillCard({
  title,
  description,
  icon,
  compact,
}: {
  title: string;
  description: string;
  icon: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-[#20b9f0]/10 hover:border-[#20b9f0]/20 transition-all duration-300 ${
        compact ? "p-2" : ""
      }`}
    >
      <div className="w-10 h-10 rounded-lg bg-[#20b9f0]/10 flex items-center justify-center text-lg shrink-0">
        {icon}
      </div>
      <div>
        <p className={`font-bold text-white ${compact ? "text-sm" : ""}`}>
          {title}
        </p>
        <p className={`text-gray-400 ${compact ? "text-xs" : "text-sm"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

function ExperienceCard({
  company,
  role,
  period,
  type,
  href,
  compact,
}: {
  company: string;
  role: string;
  period: string;
  type: string;
  href: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`group block p-4 rounded-xl bg-gradient-to-br from-[#20b9f0]/10 to-transparent border border-[#20b9f0]/20 hover:border-[#20b9f0]/40 transition-all duration-300 ${
        compact ? "p-3" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className={`font-bold text-white group-hover:text-[#20b9f0] transition-colors ${
              compact ? "text-sm" : ""
            }`}
          >
            {company}
          </p>
          <p className={`text-gray-400 ${compact ? "text-xs" : "text-sm"}`}>
            {role}
          </p>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#20b9f0] transition-colors" />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="px-2 py-0.5 text-xs bg-[#20b9f0]/20 text-[#20b9f0] rounded-full">
          {type}
        </span>
        <span className="text-xs text-gray-500">{period}</span>
      </div>
    </Link>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  compact,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-[#20b9f0]/10 hover:border-[#20b9f0]/20 transition-all duration-300 ${
        compact ? "p-2" : ""
      }`}
    >
      <div className="w-10 h-10 rounded-lg bg-[#20b9f0]/10 flex items-center justify-center text-[#20b9f0] shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        <p
          className={`font-medium text-white truncate group-hover:text-[#20b9f0] transition-colors ${
            compact ? "text-sm" : ""
          }`}
        >
          {value}
        </p>
      </div>
    </Link>
  );
}

function MobileNavDropdown({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl bg-white/5 border border-white/5 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#20b9f0]/10 flex items-center justify-center">
            {icon}
          </div>
          <span className="font-medium text-white">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
