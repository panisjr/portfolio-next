import React from "react";
import FrameworksCards from "./cards/FrameworksCards";
import AutoScrollCards from "./animate/AutoScrollCards";
export default function FrameworksList() {
  const cards = Array.from({ length: 5 });
  return (
    <div
      className="md:w-full w-screen border-b-2 border-b-gray-300 shadow-lg m-0"
      id="frameworksList"
    >
      <div className=" bg-[#161616] text-[#fafafa] border-t-2 border-t-gray-300">
        <div className="flex items-center justify-center pt-5">
          <p className="font-amarante text-3xl font-bold text-nowrap tracking-widest">
            FRAMEWORKS
          </p>
        </div>
        <div className="flex items-center justify-center overflow-hidden py-5">
          <AutoScrollCards duration={70}>
            {cards.map((_, index) => (
              <FrameworksCards key={index} />
            ))}
          </AutoScrollCards>
        </div>
      </div>
    </div>
  );
}
