"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next-intl/link";
import SwitchLanguageButton from "./SwitchLanguage";
import { langProp } from "@/types/langType";

export default function NavBar(props: langProp) {
  const currentLanguage = props.lang;
  const switchButtonMessage = props.message;
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="flex flex-col md:flex-row w-full md:w-2/3 mx-auto mt-5 items-center justify-between font-cal font-extrabold text-xl md:text-2xl xl:font-semibold text-gray-900 ">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-lg md:text-xl">
          <Link href="/">Achraf;</Link>
        </h1>
        <button onClick={showMenu} className="md:hidden">
          <Image
            src="/menuIcon.svg"
            width={40}
            height={40}
            alt="hamburger menu"
          />
        </button>
      </div>
      <ul
        className={`w-full md:w-auto md:flex md:flex-row md:space-x-4 ${
          toggleMenu ? "flex-col items-center space-y-4" : "hidden md:flex"
        }`}
        style={{
          textAlign: toggleMenu ? "center" : "left",
          fontSize: toggleMenu ? "1.5rem" : "inherit",
        }}
      >
        <li className="mb-2 md:mb-0 text-sm md:text-base md:w-[80px] md:mx-auto">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="mb-2 md:mb-0 text-sm md:text-base">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="text-sm md:text-base">
          <SwitchLanguageButton
            lang={currentLanguage}
            message={switchButtonMessage}
          />
        </li>
      </ul>
    </nav>
  );
}
