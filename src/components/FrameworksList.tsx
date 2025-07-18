import React from "react";
import FrameworksCards from "./cards/FrameworksCards";
import AutoScrollCards from "./animate/AutoScrollCards";
export default function FrameworksList() {
  const cards = Array.from({ length: 5 });
  return (
    <div
      className="border-b-2 border-b-gray-300 shadow-lg m-0"
      id="frameworksList"
    >
      <div className=" bg-slate-100 text-[#081b2b] border-t-2 border-t-gray-300">
        <div className="flex items-center justify-center pt-5">
          <p className="font-amarante text-3xl font-semibold text-nowra tracking-widest">
            FRAMEWORKS
          </p>
        </div>
        <div className="flex items-center justify-center overflow-hidden">
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
