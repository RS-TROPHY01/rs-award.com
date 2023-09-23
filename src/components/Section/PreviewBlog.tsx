import React from "react";
import Link from "next/link";
import Image from "next/image";
interface BlogItem {
  Link: string;
  Img: string;
  Title: string;
  Description: string;
}

interface BlogListProps {
  blogs: BlogItem[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <>
      <div className="blog-list container mx-auto gap-4 p-2 max-w-2xl lg:max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog, index) => (
          <div
            className="blog-preview hover:shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
            key={index}
          >
            <Link href={"/blog/" + blog.Link} aria-label={blog.Title}>
              <div>
                <div className="relative h-full">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    src={blog.Img}
                    alt={blog.Title}
                    className="w-full h-auto p-1 rounded-lg"
                    aria-label=""
                  />
                </div>
              </div>
            </Link>
            <div>
              <Link href={"/blog/" + blog.Link} aria-label={blog.Title}>
                <h3 className="p-1 ">{blog.Title}</h3>
              </Link>
              <p className="pb-1 px-1">{blog.Description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          aria-label="ดูบทความเพิ่มเติม"
          href={"/blog"}
          className="transition-transform duration-300 hover:scale-125"
        >
          <button className="py-1">ดูบทความเพิ่มเติม</button> {" >"}
        </Link>
      </div>
    </>
  );
};

export default BlogList;
