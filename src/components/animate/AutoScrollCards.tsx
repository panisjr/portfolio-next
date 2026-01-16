"use client";
import React, { useRef, useEffect, useState } from "react";

interface AutoScrollCardsProps {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export default function AutoScrollCards({
  children,
  duration = 50,
  reverse = false,
  pauseOnHover = true,
}: AutoScrollCardsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) {
      // Clone children for seamless loop
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Only add duplicates if not already added
      if (scrollerContent.length > 0 && !scrollerRef.current.dataset.cloned) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerRef.current?.appendChild(duplicatedItem);
        });
        scrollerRef.current.dataset.cloned = "true";
      }
      setIsReady(true);
    }
  }, [children]);

  return (
    <div
      className={`scroller overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] ${
        pauseOnHover ? "hover:[&_.scroller-inner]:pause" : ""
      }`}
    >
      <div
        ref={scrollerRef}
        className={`scroller-inner flex w-max gap-0 ${isReady ? "animate-scroll" : ""} ${
          reverse ? "direction-reverse" : ""
        }`}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
    </div>
  );
}