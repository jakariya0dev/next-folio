import experienceData from "@/data/experience.json";
import UnderlinedText from "../components/UnderlindText";
import Link from "next/link";

export default function PhotoSection() {
  return (
    <section className="py-20 bg-gray-800 px-5 md:px-0" id="experience">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4">
          My <UnderlinedText text="Captures" />
        </h2>
        <p className="text-center mb-5">
          A collection of my favorite photographs taken over the years.
        </p>
        <Link href={"/photos"} className="bg-blue-800 px-4 py-2 rounded text-gray-100 hover:text-gray-200 transition-all">See Photos </Link>
      </div>
    </section>
  );
}
