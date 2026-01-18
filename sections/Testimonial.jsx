"use client";

import reviews from "@/data/reviews.json";
import UnderlinedText from "../components/UnderlindText";

export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        What Clients <UnderlinedText text="Say" />
      </h2>
      <div className="overflow-hidden relative group">
        <div className="flex gap-6 animate-scroll hover:pause-scroll">
          {reviews.map((t, index) => (
            <div
              key={index}
              className="min-w-[320px] bg-gray-800 p-6 rounded-xl shadow-md hover:scale-[1.03] transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-18 h-18 rounded-full border-2 border-white"
                />
                <div>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.designation}</p>
                  <p className=" text-gray-400">@{t.company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
