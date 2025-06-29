import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import UnderlineText from "./UnderlindText";

export default function Contact() {
  return (
    <section className="bg-gray-800" id="contact">
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
            <p className="text-gray-400">Dhaka, Bangladesh</p>
          </div>
          <div>
            <p className="font-semibold">📧 Email:</p>
            <p className="text-gray-400">jakariya@example.com</p>
          </div>
          <div>
            <p className="font-semibold">📞 Phone:</p>
            <p className="text-gray-400">+880 1234-567890</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-xl ring-2 rounded-full hover:opacity-80 p-2 transition-all hover:ring-amber-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-xl ring-2 rounded-full hover:opacity-80 p-2 transition-all hover:ring-amber-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-xl ring-2 rounded-full hover:opacity-80 p-2 transition-all hover:ring-amber-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-xl ring-2 rounded-full hover:opacity-80 p-2 transition-all hover:ring-amber-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="md:w-1/2 p-6 space-y-5">
          <h3 className="text-2xl font-semibold">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
