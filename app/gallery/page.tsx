"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Gallery() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".invisible-on-load", { visibility: "visible" });

      gsap.from(".gallery-header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".gallery-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="bg-canvas text-ink min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* Header */}
        <div className="mb-16 gallery-header invisible-on-load">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-brandPink mb-4">
            GALLERY
          </h1>
          <p className="text-xl font-bold text-body max-w-2xl">
            Community moments. Sweat, smiles, and PRs.
          </p>
          <div className="w-24 h-2 bg-ink rounded-full mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`gallery-card invisible-on-load aspect-square bg-surfaceSoft border-4 border-ink p-4 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(255,20,147,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-300 group cursor-pointer ${i % 2 === 0 ? "-rotate-1" : "rotate-2"}`}
            >
              <div className="w-full h-full border-2 border-dashed border-ink/20 flex flex-col items-center justify-center bg-white group-hover:border-brandPink transition-colors relative overflow-hidden mb-4">
                <div className="text-center p-4">
                  {/* Camera icon */}
                  <svg
                    className="w-12 h-12 mx-auto mb-3 text-ink/30 group-hover:scale-125 group-hover:text-brandPink transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                    />
                  </svg>
                  <p className="text-sm font-bold text-ink/50 uppercase">
                    Past Run {i}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-2 font-black uppercase tracking-widest text-xs text-ink">
                <span>Run With Bee</span>
                <span>2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
