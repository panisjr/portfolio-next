import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-[480px] bg-[#e5e7eb]">
      {/* top-left,top-right,bottom-right, bottom-left, top-right */}
      <div className="w-full h-full bg-[#303030] [clip-path:polygon(100%_0%,100%_0%,100%_100%,0%_100%,0%_110px)]"></div>
    </footer>
  );
}
