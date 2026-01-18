import About from "@/sections/About";
import Blogpost from "@/sections/BlogSection";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Testimonial from "@/sections/Testimonial";
import YouTubeSection from "@/sections/YouTubeSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Blogpost/>
      <YouTubeSection />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Testimonial />
      <Contact />
    </>
  );
}
