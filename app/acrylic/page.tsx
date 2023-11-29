let fs = [{ src: "1" }];
let cs = [{ src: "0" }];
for (let i = 2; i <= 13; i++) {
  fs.push({
    src: i.toString(),
  });
}
for (let i = 1; i <= 13; i++) {
  cs.push({
    src: i.toString(),
  });
}
export default function Acrylic() {
  return (
    <div>
      <div id="finished">
        <h1 className="text-center">โล่รางวัลอะคริลิคสำเร็จรูป</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {fs.map((f, index) => (
            <div key={index}>
              <img src={"/catalog/finished_acrylic/" + f.src + ".jpg"} />
            </div>
          ))}
        </div>
      </div>
      <div id="custom">
        <h1 className="text-center">โล่รางวัลอะคริลิคสั่งทำ</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {cs.map((c, index) => (
            <div key={index}>
              <img src={"/catalog/custom_acrylic/" + c.src + ".webp"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
