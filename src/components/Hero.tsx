"use client";

import { useRef } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const { headline, intro, contactEmail } = portfolioData.personalInfo;
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        headlineRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, clearProps: "transform,opacity" }
      )
        .fromTo(
          buttonRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "transform,opacity" },
          "-=0.5"
        )
        .fromTo(
          introRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "transform,opacity" },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative z-10 pt-28 sm:pt-36 lg:pt-44 px-4 sm:px-6 lg:px-12 mb-24 sm:mb-36 lg:mb-48"
    >
      <div className="max-w-7xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-extrabold tracking-tight leading-tight md:leading-[1.1] uppercase break-words"
        >
          {headline}
        </h1>

        <div className="mt-12 sm:mt-16 lg:mt-24 flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-10 lg:space-x-16">
          <div ref={buttonRef} className="flex flex-col space-y-3 sm:flex-1">
            <Link
              href={contactEmail}
              className="inline-block w-fit rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:bg-brand-primary hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
            >
              Get in Touch
            </Link>
          </div>

          <div ref={introRef} id="about" className="sm:flex-1">
            <p className="text-lg sm:text-xl font-semibold tracking-wider text-[#666] uppercase">
              INTRO
            </p>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 font-normal">
              {intro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
