import projectsData from "@/data/projects.json";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import UnderlinedText from "../components/UnderlindText";

export default function Projects() {
  return (
    <section className="bg-gray-900 py-20 px-5 md:px-0" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          My <UnderlinedText text="Projects" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:scale-105 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-base-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 btn btn-outline btn-primary"
                  >
                    <FaGithub /> View Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 btn btn-outline btn-secondary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
