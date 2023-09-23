import React from "react";
import { ProductProps } from "@/components/Props/Product";
import Link from "next/link";

interface ProductComponentProps {
  products: ProductProps[];
  limit?: number; // Add a limit prop with an optional number type
}

const Product: React.FC<ProductComponentProps> = ({
  products,
  limit = Infinity,
}) => {
  // Use the limit prop to slice the products array based on the specified limit
  const limitedProducts =
    limit !== Infinity ? products.slice(0, limit) : products;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
          {limitedProducts.map((product) => (
            <div
              key={product.sku}
              className="group relative transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-2"
            >
              <Link href={"/product/" + product.sku}>
                <img src="\test\1600900.png" alt={product.sku} />
              </Link>

              <div className="mt-1 flex justify-between">
                <div className="mx-auto">
                  <Link href={"/product/" + product.sku}>
                    <h2 className="text-center ">โล่รางวัล {product.sku}</h2>
                  </Link>

                  {!(
                    product.width === "" &&
                    product.length === "" &&
                    product.height === ""
                  ) && (
                    <p>
                      {product.width} x {product.length} x {product.height} mm
                    </p>
                  )}
                  {!(product.price === "") && (
                    <p className="">{product.price} บาท</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
