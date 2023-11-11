import Image from "next/image";
import Link from "next-intl/link";
import SwitchLanguageButton from "./SwitchLanguage";
import { langProp } from "@/types/langType";
export default function NavBar(props: langProp) {
  const currentLanguage = props.lang;
  const switchButtonMessage = props.message;
  return (
    <nav className="flex mx-64 mt-5 items-center justify-between font-cal font-semibold text-gray-900">
      <h1>
        <Link href="/">Achraf;</Link>
      </h1>
      <ul className="flex w-1/3 items-center justify-between">
        <li>
          <Link href="/about-me">About Me</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button>
            <Image
              src="/darkModeIcon.png"
              width={15}
              height={15}
              alt="Icon for the dark mode"
            />
          </button>
        </li>
        <li>
          <SwitchLanguageButton
            lang={currentLanguage}
            message={switchButtonMessage}
          />
        </li>
      </ul>
    </nav>
  );
}
