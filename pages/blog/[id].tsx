import { useRouter } from "next/router";
import { articles } from "@/components/data/blog";
import { Article } from "@/components/interface/blog"; // Adjust the path accordingly

interface ArticlePageProps {
  article: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-1">
      <div>
        <img src={article.src} />
      </div>
      <div>
        <h1 className="text-center p-1">{article.title}</h1>
        <p className="p-1">{article.content}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { id: article.link },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.link === params.id);
  return {
    props: {
      article,
    },
  };
}

export default ArticlePage;
