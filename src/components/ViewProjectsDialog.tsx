import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";

export interface viewProjectTypes {
  projectName: string;
  description: string;
  image: string[];
  framework: { icon: string; name: string }[];
}
const loc = "/assets/images";
const latestProject: viewProjectTypes[] = [
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
  const found = latestProject.filter((a) => a.projectName === projectView);
  return (
    <>
      {found ? (
        found.map((item, index) => (
          <Dialog key={index} open={open}>
            <DialogContent
              showCloseButton={false}
              className="font-lexend w-full min-w-[1000px] h-[620px]"
            >
              <DialogHeader>
                <DialogClose
                  onClick={() => setOpen((prev) => prev !== prev)}
                  className="absolute right-4 top-4 cursor-pointer"
                >
                  <X />
                </DialogClose>
                <DialogTitle>{item.projectName}</DialogTitle>
                <DialogDescription className="text-[#081b2b]">
                  <div className="w-full h-[140px] flex items-center justify-center">
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
                                src={`${frame.icon}`}
                                alt="Project Image"
                                fill
                                priority
                                sizes="w-full h-full"
                                className="object-contain rounded-md"
                              />
                            </div>
                            {frame.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="overflow-y-auto h-[400px]">
                {item.image &&
                  item.image.map((i, idx) => (
                    <div key={idx} className="flex flex-wrap items-center">
                      <div className="w-[500px] h-[500px] flex-1 space-y-2 gap-2 rounded-md px-3 py-10">
                        <div className="relative w-full h-full rounded-md">
                          <Image
                            src={`${i}`}
                            alt="Project Image"
                            fill
                            priority
                            sizes="w-full h-full"
                            className="object-cover rounded-md shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </DialogContent>
          </Dialog>
        ))
      ) : (
        <p>Not found</p>
      )}
    </>
  );
}
