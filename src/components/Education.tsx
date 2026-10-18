"use client";

import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Education() {
  const { education } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = cardsRef.current?.children;
      if (!cards || cards.length === 0) return;

      gsap.fromTo(
        Array.from(cards),
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="education" className="py-12 sm:py-16 mb-24 sm:mb-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-[#131313]/90 border border-white/[0.07] shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 relative transition-all duration-500 hover:border-zinc-700/80 hover:bg-[#171717] group flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top border highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary/70 transition-all duration-500" />

              <div>
                {/* Header row: Index, Institution & Badge with Arrow */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-zinc-400">
                    <span className="font-semibold text-brand-primary/90">
                      {item.index}
                    </span>
                    <span className="text-zinc-600">/</span>
                    <span className="text-zinc-300 font-sans font-medium text-xs tracking-wider">
                      {item.institution}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {item.badge && (
                      <span className="inline-flex items-center text-[11px] font-medium tracking-wider uppercase text-brand-primary bg-brand-primary/10 border border-brand-primary/25 px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 transition-all duration-300 group-hover:text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Typography: Spacious & Modern Title */}
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white group-hover:text-brand-primary transition-colors duration-300 mb-4">
                  {item.title}
                </h3>

                {/* Description: High legibility body */}
                <p className="text-sm sm:text-base leading-relaxed text-zinc-400 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Minimalist Footer: Period Tag */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-brand-primary/80" />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
