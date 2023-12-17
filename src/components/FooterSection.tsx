import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between border-[#CEDEBD] border-t-2 rounded-tl-md w-3/2 text-[#435334] p-4 text-center mt-24">
      <div className=" font-montserrat">
        <Link href={"/contact"} className="">
          Contact me
        </Link>
      </div>
      <div className="flex justify-center items-center mt-2">
        <p className="mr-2 flex flex-row">
          Made with ❤️ and proudly opensourced on{"    "}
          <Link href={"https://github.com/AchrafHannoun/portfolio"}>
            <Image
              src={"/github.svg"}
              alt="github repo for this portfolio"
              width={20}
              height={20}
            ></Image>
          </Link>{" "}
        </p>
      </div>
    </footer>
  );
}
