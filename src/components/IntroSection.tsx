import { useTranslations } from "next-intl";

export default function IntroSection() {
  const t = useTranslations("Index");
  return (
    <section className="flex flex-col justify-between w-2/3 my-2">
      <h1 className=" text-2xl text-[#435334]">{t("greetingSection")}</h1>
      <div className="flex flex-row gap-4 shadow-sm rounded-lg shadow-green-600">
        <div className="border-solid border-l-2 rounded-md border-green-600"></div>
        <p className=" text-lg font-medium font-montserrat hidden">
          I'm a full stack web developer with a passion for crafting elegant and
          well-documented code. Formerly an educator, I've channeled my teaching
          experience into my roles as a fullstack dev. Whether in coding,
          explaining my code, or creating content, I take pride in deleviring
          high-quality work that not only functions flawlessly, but also
          empowers others to learn and grow in the magic world of web
          development.
        </p>
        <p className=" text-lg font-medium font-montserrat ">
          I'm a full-stack web developer with a background in education. I'm
          passionate about crafting elegant, well-documented code. Whether I'm
          coding, explaining my work, or creating content, I take pride in
          delivering high-quality solutions that empower others to thrive in the
          web development world.
        </p>
      </div>

      <ul className="flex flex-row justify-center gap-10 text-green-600">
        <li>Twitter</li>
        <li>Github</li>
        <li>Linked-in</li>
      </ul>
    </section>
  );
}
