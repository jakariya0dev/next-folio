import Image from "next/image";
import UnderlinedText from "../components/UnderlindText";

export default function About() {
  return (
    <section className="bg-gray-900 py-20 px-5 md:px-0" id="about">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8 md:mb-16 text-center">
          About <UnderlinedText text="Me" />
        </h2>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center ">
        <Image
          src="/images/about-pic.jpg"
          alt="My Profile"
          width={400}
          height={400}
          className="rounded md:rotate-3 hover:rotate-0 transition-all"
        />
        <div className="space-y-6 text-gray-200">
          <p className="text-justify text-lg">
            I'm a full-stack web developer providing professional website
            development services to startups, entrepreneurs, and businesses
            worldwide. I specialize in custom website development, building
            fast, secure, and scalable modern web applications using the MERN
            stack (MongoDB, Express.js, React.js, Node.js), Laravel, and
            Next.js. I also offer cross-platform mobile app development using
            Flutter, delivering high-performance apps that work seamlessly
            across Android and iOS. From responsive website design to advanced
            backend and frontend development, I create user-friendly solutions
            tailored to your business goals.
          </p>
          <p className="text-justify text-lg">
            As a freelance web developer, I’ve successfully delivered projects
            for clients across the USA, UK, Canada, Australia, UAE, and Europe —
            including both small startups and large enterprises. My focus is on
            delivering clean code, intuitive interfaces, and high-performing
            digital products that are optimized for speed, SEO, and conversion.
            Whether you need a landing page, business website, or a complex web
            application, I help bring your ideas to life through result-driven
            custom web and mobile app development.
          </p>
        </div>
      </div>
    </section>
  );
}
