import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonial from "./sections/Testimonial";
import YouTubeSection from "./sections/YouTubeSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <YouTubeSection />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
