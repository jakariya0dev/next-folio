import Image from "next/image";
import SidebarArticleCard from "./../../components/SidebarAricleCard";
import { getArticleBySlug, getAllArticles } from "@/libs/blog";
import Link from "next/link";

export default async function BlogPage({ params }) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  const articles = getAllArticles()
    .filter((art) => art.slug !== slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // console.log(article);

  return (
    <section className="bg-gray-900 py-20 px-5 md:px-0" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Image
            src={article.thumbnail}
            alt={article.title}
            width={1000}
            height={400}
            className="rounded shadow-lg object-cover w-full max-h-1/2"
          />
          <article className="prose prose-invert prose-lg mt-8">
            {/* article title */}
            <h1 className="text-4xl font-bold text-white mt-8">
              {article.title}
            </h1>
            <div className="text-gray-400 mt-4 italic">
              By{" "}
              <span className="font-bold text-gray-300">{article.author}</span>{" "}
              <span className="text-gray-200">&bull;</span> Published at{" "}
              <span className="font-bold text-gray-300">
                {new Date(article.date).toDateString()}
              </span>{" "}
              <span className="text-gray-200">&bull;</span>{" "}
              {article.readingTime} read
            </div>
            {/* article body */}
            <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
            <p className="italic">
              Read this article on <Link href={article.mediumLink} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Medium</Link>
            </p>
          </article>
        </div>

        {/* Sidebar */}
        <div>
          <p className="text-gray-400">
            Category:{" "}
            <span className="font-bold text-gray-200">
              {article.category.charAt(0).toUpperCase() +
                article.category.slice(1)}
            </span>
          </p>
          <div className="flex flex-wrap gap-2 my-5">
            Tags:{" "}
            {article.tags.map((techItem, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {techItem}
              </span>
            ))}
          </div>

          {/* Latest Blog Post Section */}
          <h3 className="text-2xl font-semibold text-white mt-20 mb-4">
            Latest Articles
          </h3>
          <div className="">
            {articles.map((article, index) => (
              <SidebarArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
