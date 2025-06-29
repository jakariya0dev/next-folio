// components/Education.jsx
"use client";
import educationData from "@/data/education.json";
import { motion } from "framer-motion";
import UnderlinedText from "../components/UnderlindText";

export default function Education() {
  return (
    <section id="education" className="bg-gray-900 px-5 md:px-0 py-20">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">My <UnderlinedText text="Education" /></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="border border-gray-700 p-4 rounded bg-gray-800 shadow-2xl transition-all hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {edu.year} | {edu.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


