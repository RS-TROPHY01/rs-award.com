import React from "react";
import Link from "next/link";
const images = [
  {
    name: "โล่รางวัลคริสตัล",
    link: "",
    description: "",
    src: "/test/800450.png",
    alt: "",
  },
  {
    name: "โล่รางวัลอะคริลิค",
    link: "",
    description: "",
    src: "/test/800450.png",
    alt: "",
  },
  {
    name: "โล่รางวัลไม้",
    link: "",
    description: "",
    src: "/test/800450.png",
    alt: "",
  },
  {
    name: "กล่องโล่รางวัล",
    link: "",
    description: "",
    src: "/test/800450.png",
    alt: "",
  },
];

const Awards: React.FC = () => {
  return (
    <div className="bg-white pb-4">
      <div className="mx-auto grid grid-cols-1 items-center gap-x-8 gap-y-16 p-2 max-w-2xl lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="transition-transform duration-300 hover:scale-110">
          <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
            RS AWARD
            <br />
            โล่รางวัลคุณภาพดี
          </h2>
          <p className="mt-4 text-gray-500 ">
            บริษัทจัดจำหน่ายโล่รางวัลราคาถูกและดี โดยเรามีทั้งในรูปแบบหน้าร้าน
            และออนไลน์ อีกทั้งยังมีร้านในเครือให้คุณได้เลือกใช้บริการในหลากหลาย
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image) => (
            <div
              className="relative h-full transition-transform duration-300 hover:scale-110"
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
  );
};

export default Awards;
