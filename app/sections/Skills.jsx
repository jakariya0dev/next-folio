"use client";
import skillsData from "@/data/skills-data";
import AnimatedOnScroll from "../components/AnimatedOnScroll";
import UnderlinedText from "../components/UnderlindText";

export default function Skills() {
  return (
    <section className="bg-gray-800 py-20 px-5 md:px-0" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-center">
          My <UnderlinedText text="Skills" />
        </h2>
        <AnimatedOnScroll>
          <div className="grid grid-cols-3 md:grid-cols-8 gap-4 ">
            {skillsData.map((skill, i) => (
              <div
                key={skill.name}
                className="p-4 rounded shadow text-center flex flex-col items-center bg-gray-900 hover:scale-105 transition-all"
                title={skill.description}
              >
                <div className="text-3xl text-amber-400 mb-2">{skill.icon}</div>
                <div className="text-sm font-semibold">{skill.name}</div>
              </div>
            ))}
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
