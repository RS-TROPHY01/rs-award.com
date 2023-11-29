import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ราคาโล่รางวัลคริสตัล ",
  description: "ราคาโล่รางวัลคริสตัล",
  keywords:
    "RS AWARD, โล่รางวัล, โล่คริสตัล, โล่รางวัลคริสตัล, ราคาโล่รางวัลคริสตัล",
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
      <h1 className="text-center">โล่รางวัลคริสตัล</h1>
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
