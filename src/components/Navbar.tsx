"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navbar() {
  const handleSmoothNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const router = useRouter();
  return (
    <>
      <div className="flex flex-wrap items-center justify-evenly py-5 gap-4 font-poppins">
        <div
          onClick={() => router.push("/")}
          className="flex flex-row items-center justify-center font-rubik text-[#303030] text-4xl cursor-pointer"
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
          <p className="pt-5">ams</p>
        </div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem className="z-10">
              <NavigationMenuTrigger onClick={() => router.push("/")}>
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
                        <div className="mt-4 mb-2 text-lg font-medium">
                          latest project
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Use the Depression Rating Scale to assess your stress
                          level and support your physical and mental well-being.
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/home/" title="Introduction">
                    Learn more about me . . .
                  </ListItem>
                  <div
                    className="px-2 cursor-pointer hover:bg-slate-100 rounded-md flex flex-col items-start justify-center"
                    onClick={() => handleSmoothNavigate("showOfMyLatestWork")}
                  >
                    <p className="text-[14px]">My Latest Projects</p>
                    <p className="text-[14px] text-slate-500">
                      Take a little preview of my latest projects
                    </p>
                  </div>
                  <div
                    className="px-2 cursor-pointer hover:bg-slate-100 rounded-md flex flex-col items-start justify-center"
                    onClick={() => handleSmoothNavigate("frameworksList")}
                  >
                    <p className="text-[14px]">Frameworks</p>
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
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about/">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Projects */}
            <NavigationMenuItem className="z-10">
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
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
              <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <div>
                        <div className="font-medium">
                          Front-End and Back-End Developer
                        </div>
                        <div className="text-muted-foreground">
                          While my strengths lie in design, I am also capable of
                          handling back-end development tasks.
                        </div>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Problem Solving</div>
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
              <NavigationMenuTrigger>Experience</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[250px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="https://symphonicsco.com/">
                        Internship at Symphonics Co. Ltd. as a Front-End
                        Developer using frameworks such as Nextjs
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
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[240px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <Phone />
                        09608757182
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
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
        <div className="border-l-2 border-l-[#ff6347] ps-4">
          <a
            href="/assets/files/resume.pdf"
            download
            className="bg-[#ff6347] rounded-md px-3 py-2.5 whitespace-nowrap text-white font-poppins"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
