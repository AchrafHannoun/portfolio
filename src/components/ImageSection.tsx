import Image from "next/image";
export default function ImageSection() {
  return (
    <section className="h-64 w-64 md:h-[250px] md:w-[250px] rounded-full my-2 m-auto max-w-screen">
      <Image
        className="rounded-full h-64 w-64 lg:h-[250px] lg:w-[250px] shadow-md shadow-[#313c26]"
        src="/achraf.png"
        width={500}
        height={500}
        alt=""
      />
    </section>
  );
}
