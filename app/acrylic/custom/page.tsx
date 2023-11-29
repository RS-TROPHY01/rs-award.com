let cs = [{ src: "0" }];
for (let i = 1; i <= 13; i++) {
  cs.push({
    src: i.toString(),
  });
}
export default function Custom() {
  return (
    <div>
      <h1 className="text-center">โล่รางวัลอะคริลิคสั่งทำ</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {cs.map((c, index) => (
          <div key={index}>
            <img src={"/catalog/custom_acrylic/" + c.src + ".webp"} />
          </div>
        ))}
      </div>
    </div>
  );
}