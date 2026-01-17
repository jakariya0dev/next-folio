import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function SidebarArticleCard({ article }) {
  return (
    <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="bg-gray-800 p-4 mb-8 rounded">
        <Link href={`/blogs/${article.slug}`}>
          <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mb-4 text-gray-300 italic">
            {new Date(article.date).toDateString()} <span>&bull;</span> {article.category?.charAt(0).toUpperCase() + article.category.slice(1)}
          </p>

          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        </Link>
      </div>
    </div>
  );
}
