import Link from "next/link";

export default function Example() {
  const links = [
    { text: "หน้าแรก", href: "/" },
    { text: "โล่รางวัล", href: "/award" },
    { text: "เกี่ยวกับเรา", href: "/aboutus" },
    { text: "บทความ", href: "/blog" },
  ];
  return (
    <header className="w-full bg-white sticky top-0 z-50 mx-auto">
      <div className="max-w-7xl grid grid-1 md:grid-cols-3 mx-auto">
        <Link
          href={"/"}
          className="flex items-center font-medium text-gray-900 title-font m-auto"
        >
          <div className="flex gap-2 mx-auto">
            <img
              src="\logo\RSTROPHY.ico"
              alt="RS MEDAL Logo"
              width="40px"
              height="40px"
              className="m-auto"
            />
            <h2 className="m-auto font-bold">RS AWARD</h2>
          </div>
        </Link>
        <span className="text-center m-auto col-span-1 md:col-span-2">
          {links.map((link, index) => (
            <Link href={link.href} key={index} className="px-2">
              {link.text}
            </Link>
          ))}
        </span>
      </div>
    </header>
  );
}
