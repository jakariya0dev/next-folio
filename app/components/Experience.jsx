import experienceData from "@/data/experience.json";
import UnderlinedText from "./UnderlindText";

export default function Experience() {
  return (
    <section className="py-20 bg-gray-800" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-10">
          My <UnderlinedText text="Experience" />
        </h2>
        <div className="grid gap-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-md rounded-xl p-6 border-l-6 border-blue-500"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-sm ">{exp.duration}</span>
              </div>
              <p className=" font-medium mb-2">{exp.company}</p>
              <ul className="list-disc list-inside  text-sm space-y-1 text-gray-400">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
