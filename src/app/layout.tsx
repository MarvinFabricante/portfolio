import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DevSecurity from "@/components/DevSecurity";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marvin Fabricante — Full-Stack Developer & DevOps Engineer",
  description:
    "Self-taught full-stack developer with a focus on backend development using Java EE, Spring Framework, and .NET. Skilled in building scalable, maintainable applications through clean architecture, microservices, and design patterns to deliver exceptional results.",
  icons: {
    icon: "/logo.gif",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body
        className={`${inter.className} bg-[#111111] text-[#e0e0e0] antialiased selection:bg-[#EEAA18] selection:text-[#111111] min-h-screen relative`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        <DevSecurity />
        <SmoothScroll>
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
