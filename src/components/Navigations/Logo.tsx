import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <>
      <Link
        href="/"
        aria-label="RS AWARD Logo"
        className="transition-transform duration-300 hover:scale-110"
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
    </>
  );
}
