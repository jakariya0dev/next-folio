import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ArticleCard({ article }) {
  return (
    <div
      
      className="bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all"
    >
      <div className="p-8">
        <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
          <Image
            src={article.thumbnail}
            alt={article.title}
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm absolute px-2 py-1 bottom-2 right-2 bg-amber-50 rounded border-2 border-amber-400 text-gray-800"
          >
            Programming
          </Link>
        </div>

        <p className="mb-4 text-gray-400 italic">
          Published at: {new Date(article.date).toDateString()}
        </p>

        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-400 text-base-400 mb-3">
          {article.description}
        </p>

        <div className="flex gap-4">
          <div className="flex gap-2">
            <a
              href={article.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200"
            >
              <FaGithub />
            </a>
            <a
              href={article.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
          <Link
            href={`/blogs/${article.slug}`}
            className="ml-auto text-amber-400 underline underline-offset-6 decoration-2 hover:text-amber-300 transition-all"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
