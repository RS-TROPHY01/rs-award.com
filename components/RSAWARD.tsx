import React from "react";
const features = [
  { name: "โล่รางวัลคริสตัล", description: "โล่รางวัลคริสตัล" },
  {
    name: "โล่รางวัลอะคริลิค",
    description: "โล่รางวัลอะคริลิค",
  },
  { name: "โล่รางวัลไม้", description: "โล่รางวัลไม้" },
  { name: "กล่องโล่รางวัล", description: "กล่องโล่รางวัล" },
];

const images = [
  {
    key: "1",
    src: "/test/1000750.png",
    alt: "",
  },
  {
    key: "2",
    src: "/test/1000750.png",
    alt: "",
  },
  {
    key: "3",
    src: "/test/1000750.png",
    alt: "",
  },
  {
    key: "4",
    src: "/test/1000750.png",
    alt: "",
  },
];

const Awards: React.FC = () => {
  return (
    <div className="bg-white pb-4">
      <div className="mx-auto grid grid-cols-1 items-center gap-x-8 gap-y-16 p-2 max-w-2xl lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <div className="transition-transform duration-300 hover:scale-110">
            <h2 className="text-3xl  tracking-tight text-gray-900 sm:text-4xl">
              RS AWARD
              <br />
              โล่รางวัลคุณภาพดี
            </h2>
            <p className="mt-4 text-gray-500 ">
              บริษัทจัดจำหน่ายโล่รางวัลราคาถูกและดี โดยเรามีทั้งในรูปแบบหน้าร้าน
              และออนไลน์
              อีกทั้งยังมีร้านในเครือให้คุณได้เลือกใช้บริการในหลากหลาย
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="border-t border-gray-200 pt-4 transition-transform duration-300 hover:scale-110"
              >
                <dt className="font-medium text-gray-900">
                  <h3>{feature.name}</h3>
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  <p>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image) => (
            <div className="relative h-full" key={image.key}>
              <img
                src={image.src}
                alt={image.alt}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg bg-gray-100 transition-transform duration-300 hover:scale-110"
                aria-label=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
