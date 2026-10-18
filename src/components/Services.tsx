"use client";

import { useRef } from "react";
import { portfolioData, ServiceItem } from "@/data/portfolioData";
import { Code2, Server, Boxes, Wrench, AppWindow } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const getIcon = (iconName: ServiceItem["iconName"]) => {
  const iconClasses =
    "w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5] transition-transform duration-300 group-hover:scale-105";

  switch (iconName) {
    case "code":
      return <Code2 className={iconClasses} />;
    case "server":
      return <Server className={iconClasses} />;
    case "cloud":
      return <Boxes className={iconClasses} />;
    case "repair":
      return <Wrench className={iconClasses} />;
    case "desktop":
      return <AppWindow className={iconClasses} />;
  }
};

export default function Services() {
  const { services } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = cardsContainerRef.current?.children;
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
    <section ref={sectionRef} id="services" className="py-8 sm:py-12 mb-20 sm:mb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 w-full"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-800 bg-[#161616] p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-gray-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-primary uppercase break-words">
                    {service.category}
                  </p>
                  <div className="text-zinc-500 group-hover:text-brand-primary transition-colors duration-300 shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <div className="my-4 sm:my-6 w-full border-b border-gray-800" />

                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight break-words group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
                  {service.description}
                </p>
              </div>

              {service.technologies && (
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-gray-800">
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wide leading-relaxed">
                    {service.technologies}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

