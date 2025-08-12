import info from "@/data/info";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {

  const links = (
    <>
      <li>
        <Link href="#hero">Home</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#skills">Skills</Link>
      </li>
      <li>
        <Link href="#projects">Projects</Link>
      </li>
      <li>
        <Link href="#experience">Experience</Link>
      </li>
      <li>
        <Link href="#testimonials">Testimonials</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </>
  );
  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto navbar shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FiMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="text-amber-300 text-xl font-semibold">
            {info.name}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <Link
            target="_blank"
            href={info.links.fiverrGig || "#"}
            className="inline-block px-6 py-2 text-black bg-amber-400 hover:bg-amber-500 rounded-xl font-semibold transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
