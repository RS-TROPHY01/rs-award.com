import Link from "next/link";

export default function Example() {
  const links = [{ text: "หน้าแรก", href: "/" }];

  return (
    <header className="w-full sticky top-0 z-50">
      <Link
        href={"/"}
        className="flex items-center font-medium text-gray-900 title-font transition-transform duration-300 hover:scale-110"
      >
        <div className="flex gap-2 mx-auto">
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
    </header>
  );
}
