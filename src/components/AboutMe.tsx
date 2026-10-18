"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const paragraphs = textContainerRef.current?.querySelectorAll("p");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { x: -35, opacity: 0, scale: 0.96 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
          }
        );
      }

      if (paragraphs && paragraphs.length > 0) {
        tl.fromTo(
          Array.from(paragraphs),
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.5"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="about-details" className="py-8 sm:py-12 mb-20 sm:mb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8 lg:space-x-16">
          {/* Photo */}
          <div ref={imageRef} className="flex w-full justify-center md:w-1/2 lg:w-5/12 mb-8 md:mb-0">
            <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-gray-800 bg-[#161616] p-2.5 shadow-2xl w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[480px]">
              <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-xl md:rounded-2xl">
                <Image
                  src="/mukhaq.png"
                  alt="Marvin Fabricante"
                  fill
                  sizes="(max-width: 768px) 340px, (max-width: 1200px) 460px, 500px"
                  className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          <div ref={textContainerRef} className="w-full md:w-1/2 lg:w-7/12 text-left space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] text-gray-300">
              I&apos;m a <span className="font-semibold text-white">Full-Stack Software Developer</span>,{" "}
              <span className="font-semibold text-white">System Administrator</span>, and{" "}
              <span className="font-semibold text-white">DevOps Engineer</span> dedicated to delivering reliable end-to-end software solutions, enterprise server infrastructure, and hands-on computer systems servicing.
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] text-gray-300">
              My expertise spans web and desktop software with{" "}
              <span className="font-semibold text-white underline decoration-brand-primary decoration-2 underline-offset-4">
                Next.js, FastAPI, Spring Boot, and .NET
              </span>
              , alongside Windows & Linux system administration, cloud automation using{" "}
              <span className="font-semibold text-white underline decoration-brand-primary decoration-2 underline-offset-4">
                Docker, Kubernetes, CI/CD, and AWS
              </span>
              , and certified hardware, network, and system servicing.
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] text-gray-300">
              Let&apos;s connect if you&apos;re looking to collaborate on high-impact software, infrastructure, and technical projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

