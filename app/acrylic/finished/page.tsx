let fs = [{ src: "1" }];
for (let i = 2; i <= 13; i++) {
  fs.push({
    src: i.toString(),
  });
}
export default function finished() {
  return (
    <div>
      <h1 className="text-center">โล่รางวัลอะคริลิคสำเร็จรูป</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {fs.map((f, index) => (
          <div key={index}>
            <img src={"/catalog/finished_acrylic/" + f.src + ".jpg"} />
          </div>
        ))}
      </div>
    </div>
  );
}
