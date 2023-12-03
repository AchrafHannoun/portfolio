import Image from "next/image";
export default function ImageSection() {
  return (
    <section className=" h-64 w-64 rounded-full my-2">
      <Image
        className="rounded-full h-64 w-64 shadow-md shadow-[#313c26]"
        src="/achraf.png"
        width={500}
        height={500}
        alt=""
      />
    </section>
  );
}
