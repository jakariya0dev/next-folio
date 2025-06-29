import info from "@/data/info";
import Image from "next/image";
import Link from "next/link";
import Squares from "../components/Squares";

export default function Hero() {
  return (
    <section className="hero max-w min-h-screen bg-base-200 relative" id="hero">
      <Squares />
      <div className="max-w-6xl hero-content flex-col lg:flex-row-reverse gap-20 relative z-10">
        <Image
          className="rounded-full border-amber-400 border-4 hover:border-8 transition-all"
          src="/images/pro-pic.jpg"
          alt="My Profile"
          width={400}
          height={400}
        />
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-amber-400">{info.name}</span> 👋
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
            {info.title}
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            {info.description}
          </p>
          <p className="text-blue-300">
            Available for Freelance Projects | Remote Work
          </p>
          <div className="flex gap-4">
            <Link
              href="#contact"
              className="inline-block px-6 py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              Let’s Talk
            </Link>
            <Link
              href="#projects"
              className="inline-block px-6 py-3 mt-4 text-black bg-amber-400 hover:bg-amber-500 rounded-xl font-semibold transition"
            >
              See My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
