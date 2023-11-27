import Link from "next/link";

export default function Example() {
  const links = [{ text: "หน้าแรก", href: "/" }];

  return (
    <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font sticky top-0 z-50 mx-auto">
      <div className="container flex flex-col flex-wrap items-center p-1 mx-auto md:flex-row max-w-7xl">
        <Link
          href={"/"}
          className="flex items-center font-medium text-gray-900 title-font transition-transform duration-300 hover:scale-110"
        >
          <div className="flex gap-2">
            <img
              src="\logo\RSTROPHY.ico"
              alt="RS AWARD Logo"
              width="50px"
              height="50px"
              className="my-auto"
            />
            <h2 className="my-auto">RS AWARD</h2>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="mx-2 font-medium hover:text-gray-900 text-center"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
