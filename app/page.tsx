"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { HeroSection } from "../components/HeroSection";
import { CommunityMoments } from "../components/CommunityMoments";
import { WeeklySchedule } from "../components/WeeklySchedule";
import { Footer } from "../components/Footer";
import runsData from "../data/runs.json";
import type { Run } from "../lib/types";

gsap.registerPlugin(ScrollTrigger);

const runs = runsData as Run[];

export default function Home() {
  const container = useRef<HTMLElement>(null);

  useSmoothScroll();

  useGSAP(
    () => {
      gsap.set(".invisible-on-load", { visibility: "visible" });

      // Hero text entrance
      gsap.from(".hero-text", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      // Scroll-triggered sections
      gsap.utils.toArray<HTMLElement>(".animate-section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="bg-canvas text-ink selection:bg-brandPink selection:text-white pb-0 overflow-hidden"
    >
      <HeroSection />
      <CommunityMoments />
      <WeeklySchedule runs={runs} />
      <Footer />
    </main>
  );
}
