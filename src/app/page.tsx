import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />

        <Marquee text="EDUCATIONAL BACKGROUND" badge="[3]" className="mb-16" />
        <Education />

        <Marquee text="MY PERSONAL PROJECTS" badge="[3]" className="mb-16" />
        <Projects />

        <Marquee text="SERVICES I OFFER" badge="[3]" className="mb-16" />
        <Services />

        <Marquee text="ABOUT MARVIN" badge="[3]" className="mb-16" />
        <AboutMe />
      </main>

      <Footer />
    </>
  );
}
