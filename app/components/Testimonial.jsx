"use client";

import testimonials from "@/data/testimonials.json";

export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">
        What Clients <span className="underline underline-offset-8 decoration-amber-400">Say</span>
      </h2>
      <div className="overflow-hidden relative group">
        <div className="flex gap-6 animate-scroll hover:pause-scroll">
          {testimonials.map((t, index) => (
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
