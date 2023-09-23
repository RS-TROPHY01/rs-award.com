import Link from "next/link";
import Image from "next/image";
const products = [
  {
    id: 1,
    name: "โล่คริสตัล",
    to: "/crystal",
    src: "/panel/award_finished_crystal.webp",
  },
  {
    id: 2,
    name: "โล่อะคริลิคสำเร็จรูป",
    to: "/acrylic/finished",
    src: "/panel/award_finished_acrylic.webp",
  },
  {
    id: 3,
    name: "โล่อะคริลิคสั่งทำ",
    to: "/acrylic/custom",
    src: "/panel/award_custom_acrylic.webp",
  },
  {
    id: 4,
    name: "กล่องใส่โล่รางวัล",
    to: "/box",
    src: "/test/1600900.png",
  },
];

export default function Categories() {
  return (
    <div className="w-full container mx-auto p-4">
      <h1 className="text-center">โล่รางวัล</h1>
      <div className="grid-cols-2 grid md:grid-cols-4 gap-4 p-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="transition-transform duration-300 hover:scale-105"
          >
            <Link href={product.to} aria-label={product.name}>
              <div className="relative rounded-md p-3">
                <Image
                  src={product.src}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt={product.name}
                  aria-label={product.name}
                />
              </div>
            </Link>
            <div className="flex justify-center items-center">
              <Link
                className=" flex items-center"
                href={product.to}
                aria-label={product.name}
              >
                <h2>{product.name}</h2>
                <span className="text-2xl">{">"}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
