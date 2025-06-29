import skillsData from "@/data/skills-data";

export default function Skills() {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-center">
          My <span className="underline underline-offset-8 decoration-amber-400">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded shadow text-center flex flex-col items-center bg-base-100"
            >
              <div className="text-3xl text-amber-400 mb-2">{skill.icon}</div>
              <div className="text-sm font-semibold">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
