"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const { projects } = portfolioData;
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".project-row");

      rows.forEach((row) => {
        const imageBox = row.querySelector(".project-image-box");
        const infoBox = row.querySelector(".project-info-box");

        if (imageBox && infoBox) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              once: true,
            },
          });

          tl.fromTo(
            imageBox,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              clearProps: "transform,opacity",
            }
          ).fromTo(
            infoBox,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
            "-=0.5"
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="projects" className="py-8 sm:py-12 mb-20 sm:mb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="space-y-16 sm:space-y-24 lg:space-y-28">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-row grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-7 items-center group"
            >
              <div className="project-image-box lg:col-span-4 overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-800 bg-[#161616] shadow-2xl transition-all duration-300 group-hover:border-gray-700">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1080}
                    height={720}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 650px"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="project-info-box flex flex-col justify-between lg:col-span-3 py-1 sm:py-2 space-y-4 sm:space-y-6">
                <div>
                  <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-primary uppercase break-words">
                    {project.tags}
                  </p>

                  <div className="my-4 sm:my-6 w-full border-b border-gray-800" />

                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight break-words">
                    {project.title}
                  </h3>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-gray-200 transition-colors duration-200 hover:text-brand-primary group/link"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  )}

                  {project.statusText && (
                    <span className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/10 text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse mr-2" />
                      {project.statusText}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
