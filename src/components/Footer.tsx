import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { personalInfo, socials } = portfolioData;

  return (
    <footer id="contacts" className="border-t border-[#42424280] bg-[#0c0c0c] text-gray-400 py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-12 mt-auto w-full">
      <div className="max-w-7xl mx-auto flex flex-col space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0">
        {/* Left: Logo & Copyright */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Image
            src="/logo.gif"
            alt="Logo"
            width={40}
            height={30}
            style={{ width: "auto", height: "30px", maxHeight: "30px" }}
            className="h-7 lg:h-8 w-auto object-contain"
            unoptimized
          />
          <div className="flex flex-col sm:flex-row sm:gap-2 text-xs sm:text-sm font-light text-gray-400">
            <p>© Marvin Fabricante 2025</p>
            <p className="hidden sm:inline">All rights reserved.</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6 lg:space-x-10">
          {/* Email Me Button */}
          <Link
            href={personalInfo.contactEmail}
            className="inline-flex items-center space-x-1.5 py-1.5 font-medium text-white transition-colors duration-200 hover:text-brand-primary group w-fit"
          >
            <span className="text-sm sm:text-base md:text-lg">EMAIL ME</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 font-medium">
            {socials.map((social) => (
              <Link
                key={social.shortLabel}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 py-1 text-sm sm:text-base md:text-lg text-gray-400 transition-colors duration-200 hover:text-brand-primary group"
                aria-label={social.label}
              >
                <span>{social.shortLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
