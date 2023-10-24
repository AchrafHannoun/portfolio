import Image from "next/image";
export default function ImageSection() {
  return (
    <section className="shadow-md h-64 w-64  rounded-full my-2">
      <Image
        className="rounded-full h-64 w-64"
        src="/achraf.png"
        width={500}
        height={500}
        alt=""
      />
    </section>
  );
}
