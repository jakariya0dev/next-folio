import Image from "next/image";
import Squares from "./Squares";

export default function Hero() {
  return (
    <div className="hero max-w min-h-screen bg-base-200 relative">
      <Squares />
      <div className="max-w-6xl hero-content flex-col lg:flex-row-reverse gap-20 relative z-10">
        <Image
          className="rounded-full border-amber-400 border-4"
          src="/images/pro-pic.jpg"
          alt="My Profile"
          width={400}
          height={400}
        />
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-amber-400">Jakariya</span> 👋
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
            Full-Stack Developer | MERN, Laravel, Flutter
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            I build modern, scalable web and mobile applications with clean UI
            and efficient backends.
          </p>
          <p className="text-sm text-blue-300">
            📍Available for Freelance Projects | Remote Work Preferred
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </div>
  );
}
