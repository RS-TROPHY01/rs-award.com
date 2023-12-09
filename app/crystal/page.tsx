import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ราคาโล่รางวัลคริสตัล ",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลคริสตัลโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords:
    "RS AWARD, โล่รางวัล, โล่คริสตัล, โล่รางวัลคริสตัล, ราคาโล่รางวัลคริสตัล",
  icons: "/favicon.ico",
};
let photos = [{ src: "1" }];
for (let i = 2; i <= 10; i++) {
  photos.push({
    src: i.toString(),
  });
}
export default function Crystal() {
  return (
    <main>
      <div className="mx-auto max-w-4xl">
        {" "}
        <h1 className="text-center py-2">โล่รางวัลคริสตัล</h1>
        <div className="mx-auto">
          บริษัทจัดจำหน่ายโล่รางวัลคริสตัล
          โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={"/catalog/finished_crystal/" + photo.src + ".jpg"} />
          </div>
        ))}
      </div>
    </main>
  );
}
