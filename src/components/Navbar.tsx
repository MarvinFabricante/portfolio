"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinksLeft = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "EDUCATION", href: "#education" },
  ];

  const navLinksRight = [
    { name: "PROJECTS", href: "#projects" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACTS", href: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-[#42424280] bg-[rgba(14,14,14,0.7)] shadow-[0_2px_10px_rgba(0,0,0,0.25)] backdrop-blur-[30px] backdrop-saturate-180 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 h-16 sm:h-20 max-w-7xl mx-auto w-full">
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-14 border-r border-[#42424280] pr-8 xl:pr-12 font-medium text-gray-400">
          {navLinksLeft.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-brand-primary py-4 text-center text-sm xl:text-base tracking-wider transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex justify-start lg:justify-center items-center flex-1 lg:flex-none">
          <Link
            href="#home"
            className="flex items-center transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Home"
          >
            <Image
              src="/logo.gif"
              alt="Marvin Fabricante Logo"
              width={48}
              height={36}
              style={{ width: "auto", height: "34px", maxHeight: "34px" }}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-14 border-l border-[#42424280] pl-8 xl:pl-12 font-medium text-gray-400">
            {navLinksRight.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-brand-primary py-4 text-center text-sm xl:text-base tracking-wider transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer relative z-50 p-2 text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ease-in-out origin-center ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-full my-1.5 transition-all duration-300 ease-in-out ${mobileMenuOpen ? "opacity-0 -translate-x-4" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ease-in-out origin-center ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[rgba(14,14,14,0.96)] backdrop-blur-2xl border-[#42424280] text-gray-300 ${mobileMenuOpen
            ? "max-h-96 py-6 px-6 sm:px-8 border-b opacity-100"
            : "max-h-0 py-0 px-6 sm:px-8 border-b-0 opacity-0"
          }`}
      >
        <div className="flex flex-col space-y-3 font-medium tracking-wide">
          {[...navLinksLeft, ...navLinksRight].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base text-gray-300 hover:text-brand-primary transition-colors duration-200 border-b border-white/5 last:border-b-0"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
