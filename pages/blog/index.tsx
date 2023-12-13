import type { Metadata } from "next";
import type { GetStaticProps, NextPage } from "next";
import { articles } from "@/components/data/blog";
import { Article } from "@/components/interface/blog"; // Adjust the path accordingly
import Link from "next/link";
interface HomeProps {
  articles: Article[];
}
export const metadata: Metadata = {
  title: "RS MEDAL | บทความ",
  description:
    "บริษัทจัดจำหน่ายเหรียญรางวัลคุณภาพดีแข็งแรงทนทาน โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords: "RS MEDAL, เหรียญรางวัล",
};

const Home: NextPage<HomeProps> = ({ articles }) => {
  return (
    <div>
      <h1 className="text-center">บทความ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {articles.map((article) => (
          <Link key={article.link} href={"/blog/" + article.link}>
            <div className="grid grid-cols-2 gap-2">
              <img src="/test/1600900.png" />
              <div className="my-auto grid grid-cols-1 gap-2">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full transition duration-300 ease-in-out">
                  ดูเพิ่มเติม {">"}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const fetchedArticles = articles;
  return {
    props: {
      articles: fetchedArticles,
    },
  };
};
export default Home;
