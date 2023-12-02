import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "RS AWARD | โล่รางวัล",
  description: "RS AWARD โล่รางวัล",
  keywords:
    "RS AWARD, โล่รางวัล, โล่คริสตัล, โล่รางวัลคริสตัล, โล่อะคริลิค, โล่รางวัลอะคริลิค",
};
const images = [
  {
    name: "โล่คริสตัล",
    link: "/crystal",
    description: "",
    src: "/panel/finished_crystal.webp",
    alt: "",
  },
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
export default function Home() {
  return (
    <main>
      <div className="relative h-full">
        <img
          src="/panel/hero_section.webp"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt="RS AWARD PANEL"
          aria-label=""
        />
      </div>
      <div className="bg-white py-4">
        <div className="mx-auto items-center gap-x-8 gap-y-16 p-2 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl text-gray-900 sm:text-4xl mx-auto">
              RS AWARD โล่รางวัลคุณภาพดี
            </h2>
            <p className="mt-4 text-gray-500  text mx-auto">
              บริษัทจัดจำหน่ายโล่รางวัลคุณภาพดีแข็งแรงทนทาน
              มีให้เลือกทั้งโล่รางวัลคริสตัล โล่รางวัลอะคริลิคสำเร็จรูป
              โล่รางวัลอะคริลิคสั่งทำ
              โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-center">โล่รางวัล</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-2">
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
        </div>
      </div>
    </main>
  );
}
