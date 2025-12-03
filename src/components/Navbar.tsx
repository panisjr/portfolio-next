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
import { AlignJustify, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "DRSchecker",
    href: "https://drschecker.vercel.app",
    description:
      "Let me help you assess you level of stress and provide some advice that could help you to address emotional stress.",
  },
  {
    title: "ATLS",
    href: "",
    description: "Under construction!",
  },
  {
    title: "CodePulse",
    href: "",
    description: "Under construction!.",
  },
  {
    title: "NoteAI",
    href: "",
    description: "Under construction!.",
  },
];
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-bold">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
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
  const handleSmoothNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const checkScreen = () => {
      const currentWidth = window.innerWidth;
      const isNowMobile = currentWidth <= 1024;
      setIsWidth(isNowMobile);
    };

    checkScreen(); // Run immediately after hydration
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isWidth === null) {
    // Optional: show loader or nothing until screen size is known
    return null;
  }
  return (
    <>
      {isWidth ? (
        <div className="sticky top-0 w-full h-fit flex flex-row items-center py-2 gap-4 px-4 md:px-20 font-poppins bg-[#e5e7eb]/30 z-10 text-[#fafafa]">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-row-reverse"
            orientation="vertical"
          >
            <AccordionItem
              value="item-1"
              className="flex flex-col w-full items-start justify-center md:px-5 px-3"
            >
              <div className="w-full flex items-center justify-between">
                <div
                  onClick={() => router.push("/")}
                  className="flex flex-row items-center justify-center font-rubik text-[#fafafa] text-3xl cursor-pointer"
                >
                  <div className="relative w-[50px] h-[50px]">
                    <Image
                      src={"/assets/images/nameLogo.png"}
                      alt="Logo name"
                      sizes="w-full h-full"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <p>ams</p>
                </div>
                <AccordionTrigger className="[&>svg]:hidden flex items-center justify-center">
                  <div className=" hover:cursor-pointer">
                    <AlignJustify className="text-[#fafafa] w-8 h-8" />
                  </div>
                </AccordionTrigger>
              </div>

              <AccordionContent className="w-full flex flex-col items-center justify-center gap-4 text-balance">
                <div className="w-full bg-[#303030]/10 absolute inset-0 backdrop-blur-sm z-[-10]"></div>
                <div className="flex flex-col items-start gap-2 h-fit justify-center">
                  <NavigationMenu viewport={false}>
                    <NavigationMenuList className="flex flex-col items-start justify-center gap-3">
                      {/* Home */}
                      <NavigationMenuItem className="z-10">
                        <NavigationMenuTrigger
                          onClick={() => router.push("/")}
                          className="font-bold font-poppins text-md bg-transparent"
                        >
                          Home
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <div
                                  onClick={() =>
                                    router.push(
                                      "https://drschecker.vercel.app/"
                                    )
                                  }
                                  className="cursor-pointer from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                >
                                  <div className="relative w-[50px] h-[50px]">
                                    <Image
                                      src={"/assets/images/ai.png"}
                                      alt="Depression rating scale image"
                                      fill
                                      sizes="w-[50px] h-[50px]"
                                    />
                                  </div>
                                  <div className="mt-4 mb-2 text-lg font-bold font-poppins">
                                    latest project
                                  </div>
                                  <p className="text-muted-foreground text-sm leading-tight">
                                    Use the Depression Rating Scale to assess
                                    your stress level and support your physical
                                    and mental well-being.
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </li>
                            <ListItem href="/" title="Introduction">
                              Learn more about me . . .
                            </ListItem>
                            <div
                              className="px-2 cursor-pointer hover:bg-slate-100 rounded-md flex flex-col items-start justify-center"
                              onClick={() =>
                                handleSmoothNavigate("showOfMyLatestWork")
                              }
                            >
                              <p className="text-[14px] font-bold">
                                My Latest Projects
                              </p>
                              <p className="text-[14px] text-slate-500">
                                Take a little preview of my latest projects
                              </p>
                            </div>
                            <div
                              className="px-2 cursor-pointer hover:bg-slate-100 rounded-md flex flex-col items-start justify-center"
                              onClick={() =>
                                handleSmoothNavigate("frameworksList")
                              }
                            >
                              <p className="text-[14px] font-bold">
                                Frameworks
                              </p>
                              <p className="text-[14px] text-slate-500">
                                Let me show you some of my frameworks
                              </p>
                            </div>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      {/* About */}
                      <NavigationMenuItem className="z-10">
                        <NavigationMenuLink
                          asChild
                          className="font-bold font-poppins text-md bg-transparent"
                        >
                          <Link href="/about/" className="py-[6px] px-4">
                            About
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      {/* Projects */}
                      <NavigationMenuItem className="z-10">
                        <NavigationMenuTrigger className="font-bold font-poppins text-md bg-transparent">
                          Projects
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                              <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                              >
                                {component.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      {/* Skills */}
                      <NavigationMenuItem className="z-10">
                        <NavigationMenuTrigger className="font-bold font-poppins text-md bg-transparent">
                          Skills
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[300px] gap-4">
                            <li>
                              <NavigationMenuLink asChild>
                                <div>
                                  <div className="font-bold">
                                    Front-End and Back-End Developer
                                  </div>
                                  <div className="text-muted-foreground">
                                    While my strengths lie in design, I am also
                                    capable of handling back-end development
                                    tasks.
                                  </div>
                                </div>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="#">
                                  <div className="font-bold">
                                    Problem Solving
                                  </div>
                                  <div className="text-muted-foreground">
                                    Learn how to use the library.
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                              {/* <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink> */}
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      {/* Experience */}
                      <NavigationMenuItem className="z-10">
                        <NavigationMenuTrigger className="font-bold font-poppins text-md bg-transparent">
                          Experience
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[250px] gap-4">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link href="https://symphonicsco.com/">
                                  Internship and currently working at Symphonics
                                  Co. Ltd. as a Front-End Developer using Nextjs
                                </Link>
                              </NavigationMenuLink>
                              {/* <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink> */}
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      {/* Contact */}
                      <NavigationMenuItem className="z-10">
                        <NavigationMenuTrigger className="font-bold font-poppins text-md bg-transparent">
                          Contact
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[240px] gap-4">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="#"
                                  className="flex-row items-center gap-2"
                                >
                                  <Phone />
                                  09608757182
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="#"
                                  className="flex-row items-center gap-2"
                                >
                                  <Mail />
                                  ramelopanisjr.06@gmail.com
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
                <div className="w-full flex flex-row justify-start px-4">
                  <a
                    href="/assets/files/resume.pdf"
                    download
                    className="bg-[#20b9f0] rounded-md px-3 py-2 whitespace-nowrap text-white font-poppins font-bold"
                  >
                    Download CV
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ) : (
        <div className="sticky top-0 h-[80px] w-full flex flex-row items-center justify-between py-2 gap-4 px-20 font-poppins bg-[#e5e7eb]/30 z-10 text-[#fafafa]">
          <div className="bg-[#303030]/10 w-full absolute inset-0 backdrop-blur-sm z-[-10]"></div>
          <div className="flex flex-row gap-2 h-fit justify-start items-center">
            <div
              onClick={() => router.push("/")}
              className="flex flex-row items-center justify-center font-rubik text-[#fafafa] text-4xl cursor-pointer"
            >
              <div className="relative w-[70px] h-[70px]">
                <Image
                  src={"/assets/images/nameLogo.png"}
                  alt="Logo name"
                  sizes="w-full h-full"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <p>ams</p>
            </div>
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="flex flex-row gap-3">
                {/* Home */}
                <NavigationMenuItem className="z-10">
                  <NavigationMenuTrigger
                    onClick={() => router.push("/")}
                    className="font-bold font-poppins text-md bg-transparent"
                  >
                    Home
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div
                            onClick={() =>
                              router.push("https://drschecker.vercel.app/")
                            }
                            className="cursor-pointer from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          >
                            <div className="relative w-[50px] h-[50px]">
                              <Image
                                src={"/assets/images/ai.png"}
                                alt="Depression rating scale image"
                                fill
                                sizes="w-[50px] h-[50px]"
                              />
                            </div>
                            <div className="mt-4 mb-2 text-lg font-bold font-poppins">
                              latest project
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              Use the Depression Rating Scale to assess your
                              stress level and support your physical and mental
                              well-being.
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/" title="Introduction">
                        Learn more about me . . .
                      </ListItem>
                      <div
                        className="px-2 cursor-pointer hover:bg-slate-100 rounded-md flex flex-col items-start justify-center"
                        onClick={() =>
                          handleSmoothNavigate("showOfMyLatestWork")
                        }
                      >
                        <p className="text-[14px] font-bold">
                          My Latest Projects
                        </p>
                        <p className="text-[14px] text-slate-500">
                          Take a little preview of my latest projects
                        </p>
                      </div>
                      <div
                        className="px-2 cursor-pointer hover:bg-slate-100 rounded-md flex flex-col items-start justify-center"
                        onClick={() => handleSmoothNavigate("frameworksList")}
                      >
                        <p className="text-[14px] font-bold">Frameworks</p>
                        <p className="text-[14px] text-slate-500">
                          Let me show you some of my frameworks
                        </p>
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* About */}
                <NavigationMenuItem className="z-10">
                  <NavigationMenuLink
                    asChild
                    className="font-bold font-poppins text-md bg-transparent"
                  >
                    <Link href="/about/" className="py-[6px]">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Projects */}
                <NavigationMenuItem className="z-10">
                  <NavigationMenuTrigger className="font-bold font-poppins text-md bg-transparent">
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Skills */}
                <NavigationMenuItem className="z-10">
                  <NavigationMenuTrigger className="font-bold font-poppins text-md bg-transparent">
                    Skills
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <div>
                            <div className="font-bold">
                              Front-End and Back-End Developer
                            </div>
                            <div className="text-muted-foreground">
                              While my strengths lie in design, I am also
                              capable of handling back-end development tasks.
                            </div>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-bold">Problem Solving</div>
                            <div className="text-muted-foreground">
                              Learn how to use the library.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        {/* <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink> */}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Experience */}
                <NavigationMenuItem className="z-10">
                  <NavigationMenuTrigger className="font-bold font-poppins text-md bg-transparent">
                    Experience
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="https://symphonicsco.com/">
                            Internship and currently working at Symphonics Co.
                            Ltd. as a Front-End Developer using Nextjs
                          </Link>
                        </NavigationMenuLink>
                        {/* <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink> */}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Contact */}
                <NavigationMenuItem className="z-10">
                  <NavigationMenuTrigger className="font-bold font-poppins text-md bg-transparent">
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="flex-row items-center gap-2"
                          >
                            <Phone />
                            09608757182
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="flex-row items-center gap-2"
                          >
                            <Mail />
                            ramelopanisjr.06@gmail.com
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="border-l-2 border-l-[#20b9f0] ps-4">
            <a
              href="/assets/files/resume.pdf"
              download
              className="bg-[#20b9f0] rounded-md px-3 py-2 whitespace-nowrap text-white font-poppins font-bold"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}
