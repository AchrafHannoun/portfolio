import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="flex mx-64 mt-5 items-center justify-between font-cal font-semibold text-gray-900">
      <h1>
        <Link href="/">Achraf;</Link>
      </h1>
      <ul className="flex w-1/4 items-center justify-between">
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
      </ul>
    </nav>
  );
}
