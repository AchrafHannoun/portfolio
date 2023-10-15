import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col font-semibold items-center justify-between mx-64 mt-24">
      <section className="w-full font-cal flex flex-row gap-10 xl:gap-20">
        <div className="flex flex-col justify-between">
          <h1 className=" text-2xl text-[#435334]">Hi, I'm Achraf Hannoun</h1>
          <div className="flex flex-row gap-4 shadow-sm rounded-lg shadow-green-600">
            <div className="border-solid border-l-2 rounded-md border-green-600"></div>
            <p className="font-normal font-montserrat ">
              I’m a full-stack engineer, a designer, and a content creator. I
              work at CodeChem as a developer/designer, and I’m a core member at
              Chakra UI , contributing as a Developer Advocate. I’m also an
              egghead.io instructor.
            </p>
          </div>

          <ul className="flex flex-row justify-center gap-10 text-green-600">
            <li>Twitter</li>
            <li>Github</li>
            <li>Linked-in</li>
          </ul>
        </div>

        <div className="shadow-md hover:shadow-green-600 rounded-full">
          <Image
            className="rounded-full"
            src="/achraf.png"
            width={500}
            height={500}
            alt="me, Achraf Hannoun"
          />
        </div>
      </section>
    </main>
  );
}
