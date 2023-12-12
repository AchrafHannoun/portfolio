import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#CEDEBD] text-[#435334] p-4 text-center flex-row justify-between">
      <Link href={"/contact"} className="">
        Contact me
      </Link>
      <div className="flex justify-center items-center mt-2">
        <p className="mr-2">Made with ❤️</p>
      </div>
    </footer>
  );
}
