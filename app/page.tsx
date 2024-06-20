"use client";

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import "@/styles/home.css";
import { Amenities } from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <div className="px-4">
        <Amenities />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}
