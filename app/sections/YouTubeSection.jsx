"use client";
import { motion } from "framer-motion";

const youtubeVideos = [
    "https://www.youtube.com/embed/N0FVfJMX0BE",
    "https://www.youtube.com/embed/N0FVfJMX0BE",
    "https://www.youtube.com/embed/Fn4dMNJsaHM",
    "https://www.youtube.com/embed/Fn4dMNJsaHM",
    "https://www.youtube.com/embed/RrYMfz05apw",
    "https://www.youtube.com/embed/-0rQQvpAtw4",
  ];

export default function YouTubeSection() {
  return (
    <section className=" bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-12" id="youtube">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          🎥 Learn with Me on{" "}
          <a
            href="https://www.youtube.com/@cunningmentor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 underline underline-offset-10 decoration-4 hover:text-blue-500 transition-all"
          >
            Cunning Mentor
          </a>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          I regularly upload programming tutorials and project walkthroughs on
          my YouTube channel. Join thousands of learners and grow your skills!
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Replace with your actual video URLs */}
          {youtubeVideos.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="aspect-video rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src={url}
                title={`YouTube Video ${i + 1}`}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
