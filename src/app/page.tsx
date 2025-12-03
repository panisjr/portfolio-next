"use client"
import React from "react";
import LandingPage from "@/components/LandingPage";
import LatestWorkPage from "@/components/LatestProjectsPage";
import FrameworksList from "@/components/FrameworksList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="home" className="w-[700px] md:w-full overflow-y-auto overflow-hidden">
      <div className="mx-auto overflow-auto">
        {/* Header */}
        {/* Main sections */}
        <LandingPage />
        <FrameworksList />
        <LatestWorkPage />
        <Footer/>
      </div>
    </div>
  );
}
