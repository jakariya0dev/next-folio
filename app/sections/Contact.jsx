"use client";

import info from "@/data/info";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Swal from "sweetalert2";
import UnderlineText from "../components/UnderlindText";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          form.current.reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email Sent Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Failde to send email",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <section className="bg-gray-800 px-5 md:px-0" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10 p-6 md:p-12">
        {/* Left Side: Contact Info */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Get in <UnderlineText text="Touch" />
          </h2>
          <p className="text-gray-400">
            I'd love to hear from you. Reach out to me anytime!
          </p>

          <div>
            <p className="font-semibold">📍 Address:</p>
            <p className="text-gray-400">{info.address}</p>
          </div>
          <div>
            <p className="font-semibold">📧 Email:</p>
            <p className="text-gray-400">{info.email} or jhalhadi@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">📞 WhatsApp:</p>
            <p className="text-gray-400">{info.whatsapp}</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href={info.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-xl ring-2 rounded-full hover:opacity-80 p-2 transition-all hover:ring-amber-400"
            >
              <FaFacebookF />
            </a>
            <a
              href={info.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xl ring-2 rounded-full hover:opacity-80 p-2 transition-all hover:ring-amber-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={info.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-xl ring-2 rounded-full hover:opacity-80 p-2 transition-all hover:ring-amber-400"
            >
              <FaTwitter />
            </a>
            <a
              href={info.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-xl ring-2 rounded-full hover:opacity-80 p-2 transition-all hover:ring-amber-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="md:w-1/2  space-y-5" ref={form} onSubmit={sendEmail}>
          <h3 className="text-2xl font-semibold">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {loading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
