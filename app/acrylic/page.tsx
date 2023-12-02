import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "ราคาโล่รางวัลอะคริลิค",
  description: "ราคาโล่รางวัลอะคริลิค",
  keywords:
    "RS AWARD, โล่รางวัล, โล่อะคริลิค, โล่รางวัลอะคริลิค, ราคาโล่รางวัลอะคริลิค",
};
const images = [
  {
    name: "โล่อะคริลิคสำเร็จรูป",
    link: "/acrylic/finished",
    description: "",
    src: "/panel/finished_acrylic.webp",
    alt: "",
  },
  {
    name: "โล่อะคริลิคสั่งทำ",
    link: "/acrylic/custom",
    description: "",
    src: "/panel/custom_acrylic.webp",
    alt: "",
  },
];
export default function Acrylic() {
  return (
    <div className="py-4">
      <h1 className="text-center">โล่รางวัลอะคริลิค</h1>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 py-2">
        {images.map((image) => (
          <div
            className="relative h-full transition-transform duration-300 hover:scale-105"
            key={image.name}
          >
            <Link href={image.link}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg bg-gray-100 "
                aria-label=""
              />
              <div className="mx-auto text-center">
                <h2>{image.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
