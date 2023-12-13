import Link from "next/link";
const OtherProducts = [
  {
    name: "ถ้วยรางวัล",
    href: "https://www.rs-trophy.com/",
  },
  {
    name: "เหรียญรางวัล",
    href: "https://www.rs-meddal.com/",
  },
  {
    name: "โล่รางวัล",
    href: "https://www.rs-award.com/",
  },
];
export default function AppHeader() {
  return (
    <footer className="shadow bg-gray-900 bottom-0 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 text-white mx-auto text-center p-4 max-w-7xl">
        <div className="text-center mx-auto my-auto col-span-1">
          <h5 className="text-center p-2 font-bold text-2xl text-white">
            สินค้าอื่นๆ
          </h5>
          {OtherProducts.map((OtherProduct) => (
            <div className="p-1 " key={OtherProduct.name}>
              <Link href={OtherProduct.href} className="hover:text-blue-500">
                <h6 className="font-bold text-xl text-white">
                  {OtherProduct.name}
                </h6>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mx-auto my-auto col-span-1">
          <h5 className="text-center p-2 font-bold text-2xl text-white">
            เบอร์โทร
          </h5>
          <div className="p-1 text-white">
            <ul>
              <li className="text-white">0649370011</li>
              <li className="text-white">0649370033</li>
              <li className="text-white">0649370066</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 rounded-lg w-full h-60 p-4 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.01552442906!2d100.54981097587556!3d13.957681286455957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e281423d9ee0cb%3A0xc0c6c349cc115b53!2zUnMgdHJvcGh5IOC4o-C5iOC4p-C4oeC4quC4uOC4guC4luC5ieC4p-C4ouC4o-C4suC4h-C4p-C4seC4pQ!5e0!3m2!1sth!2sth!4v1695441505250!5m2!1sth!2sth"
            loading="lazy"
            className="w-full h-full rounded-lg "
          ></iframe>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
        <span className="block text-sm sm:text-center text-gray-400">
          © 2023 <Link href="/">RS AWARD</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
