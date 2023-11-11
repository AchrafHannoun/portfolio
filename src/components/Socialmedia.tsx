import Image from "next/image";
import Link from "next/link";
export default function SocialMedia() {
  return (
    <ul className="flex flex-row justify-center gap-10 text-green-600">
      <li className="hover:border-2 border-green-300 rounded-full">
        <Link href="">
          <Image
            src="/linkedin.svg"
            width={40}
            height={40}
            alt="follow me on linkedin"
          />
        </Link>
      </li>
      <li className="hover:border-2 border-green-300 rounded-full">
        <Link href="">
          <Image
            src="/github.svg"
            width={40}
            height={40}
            alt="follow me on github"
          />
        </Link>
      </li>
      <li className="hover:border-2 border-green-300 rounded-full">
        <Link href="">
          <Image
            src="/x.svg"
            width={40}
            height={40}
            alt="follow me on X (twitter)"
          />
        </Link>
      </li>
    </ul>
  );
}
