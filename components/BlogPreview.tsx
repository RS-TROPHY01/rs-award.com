import Link from "next/link";
import { Article } from "@/components/interface/blog";
interface BlogPreviewProps {
  articles: Article[];
}
const BlogPreview: React.FC<BlogPreviewProps> = ({ articles }) => {
  const previewArticles = articles.slice(0, 4); // Get the first four articles for preview
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {previewArticles.map((article) => (
        <div key={article.link}>
          <div className="grid grid-cols-2 gap-2">
            <Link href={"/blog/" + article.link}>
              <img src="/test/1600900.png" />
            </Link>
            <div className="my-auto grid grid-cols-1 gap-2">
              <Link href={"/blog/" + article.link}>
                <h2>{article.title}</h2>
              </Link>
              <p>{article.description}</p>
              <Link href={"/blog/" + article.link}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full transition duration-300 ease-in-out">
                  ดูเพิ่มเติม {">"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPreview;
