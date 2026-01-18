import UnderlinedText from "../components/UnderlindText";
import Link from "next/link";
import { getAllArticles } from "@/libs/blog";
import ArticleCard from "../components/ArticleCard";

export default function BlogSection() {
  let articles = getAllArticles();
  //  sort by date descending
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  //  get only 3 articles 
  articles = articles.slice(0, 3);
  

  return (
    <section className="bg-gray-800 py-20 px-5 md:px-0" id="articles">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          Latest <UnderlinedText text="Articles" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            className="text-center btn btn-primary px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all"
            href="/blogs"
          >
            More Articls
          </Link>
        </div>
      </div>
    </section>
  );
}
