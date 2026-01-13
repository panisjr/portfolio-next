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
  CircleChevronRightIcon,
  MoveUpRight,
  X,
} from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrollToPlugin);

export interface viewProjectTypes {
  projectName: string;
  description: string;
  image: string[];
  framework: { icon: string; name: string }[];
  link?: string;
}

const loc = "/assets/images";
const latestProject: viewProjectTypes[] = [
  {
    projectName: "SALIGAN - nextjs, mapbox, supabase",
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
      { icon: `${loc}/nextjs.png`, name: "Nextjs" },
      { icon: `${loc}/mapbox-logo.png`, name: "Mapbox" },
      { icon: `${loc}/supabase-logo.png`, name: "Supabase" },
    ],
    link: "https://saligan.vercel.app/",
  },
  {
    projectName: "DRSchecker - nextjs, gemini api",
    description:
      "A smart assessment tool designed to evaluate a user's stress and depression levels based on their responses to guided questions or statements, using a reliable rating scale. This application leverages AI to interpret results and provide personalized advice, coping strategies, and mental wellness resources.",
    image: [
      `${loc}/drsLatest.png`,
      `${loc}/d1.png`,
      `${loc}/d2.png`,
      `${loc}/d3.png`,
      `${loc}/d4.png`,
      `${loc}/d5.png`,
    ],
    framework: [
      { icon: `${loc}/nextjs.png`, name: "Nextjs" },
      { icon: `${loc}/gemini.png`, name: "Gemini" },
    ],
  },
  {
    projectName: "ATLS",
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
  },
];

export function ViewProjectsDialog({
  open,
  setOpen,
  projectView,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectView: string;
}) {
  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        gsap.to(window, {
          scrollTo: "#target-element",
          duration: 1,
          ease: "power2.inOut",
        });
      }, 300); // slight delay ensures DOM is rendered

      return () => clearTimeout(timeout);
    }
  }, [open]);

  const found = latestProject.filter((a) => a.projectName === projectView);

  return (
    <>
      {found &&
        found.map((item, index) => (
          <Dialog key={index} open={open}>
            <DialogContent
              showCloseButton={false}
              className="font-lexend w-full min-w-[1000px] h-[620px]"
              id="target-element"
            >
              <DialogHeader>
                <DialogClose
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 cursor-pointer"
                >
                  <X />
                </DialogClose>
                <div className="flex flex-row items-center gap-3">
                  <DialogTitle>{item.projectName}</DialogTitle>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center font-lexend border border-blue-400 rounded-full w-fit px-3 py-1 bg-blue-400 text-white hover:bg-white hover:text-blue-400"
                    >
                      Visit
                      <div className="pt-1">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </a>
                  )}
                </div>

                <div className="text-[#081b2b] w-full h-fit min-h-[140px] flex items-center justify-center">
                  <div className="w-full h-full">
                    <p>Description:</p>
                    <p className="px-2.5 font-light">{item.description}</p>
                  </div>
                  <div className="w-full h-full">
                    <p>Framework:</p>
                    <div className="flex flex-wrap gap-5 px-5 py-2">
                      {item.framework?.map((frame, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center flex-col"
                        >
                          <div className="relative w-[60px] h-[60px] rounded-md">
                            <Image
                              src={frame.icon}
                              alt="Framework Icon"
                              fill
                              priority
                              sizes="(max-width: 60px) 100vw, 60px"
                              className="object-contain rounded-md"
                            />
                          </div>
                          {frame.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="overflow-y-auto max-h-[400px]">
                {item.image.map((i, idx) => (
                  <div key={idx} className="flex flex-wrap items-center">
                    <div className="w-[500px] h-[500px] flex-1 space-y-2 gap-2 rounded-md px-3 py-10">
                      <div className="relative w-full h-full rounded-md">
                        <Image
                          src={i}
                          alt="Project Image"
                          fill
                          priority
                          sizes="(max-width: 500px) 100vw, 500px"
                          className="object-contain rounded-md shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
    </>
  );
}
