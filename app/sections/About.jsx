import info from "@/data/info";
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
          <p className="text-justify text-lg">{info.longDescription1}</p>
          <p className="text-justify text-lg">{info.longDescription2}</p>
          <p className="text-justify text-lg">{info.longDescription3}</p>
        </div>
      </div>
    </section>
  );
}
