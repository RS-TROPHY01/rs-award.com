import React from "react";
import { BlogProps } from "@/components/Props/Blog";

interface ProductComponentProps {
  blogs: BlogProps[];
  limit?: number; // Make 'limit' optional by adding '?'
}

const Product: React.FC<ProductComponentProps> = ({ blogs, limit }) => {
  const limitedBlogs = limit === Infinity ? blogs : blogs.slice(0, limit);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {limitedBlogs.map((blog, index) => (
            <div key={index}>
              <img src="\test\1000750.png" alt={blog.Title} />
              <h2>{blog.Title}</h2>
              <p>{blog.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
