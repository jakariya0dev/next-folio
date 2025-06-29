import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
