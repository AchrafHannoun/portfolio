import { useTranslations } from "next-intl";
import SocialMedia from "./Socialmedia";

export default function IntroSection() {
  const t = useTranslations("Index");
  return (
    <section className="flex flex-col justify-between w-2/3 my-2 ">
      <h1 className=" text-2xl text-[#435334] animate-fade-down animate-duration-[2000ms] animate-delay-1000">
        {t("greetingSection")}
      </h1>
      <div className="flex flex-row gap-4  shadow-sm rounded-lg shadow-green-600 animate-fade-right animate-duration-[2000ms] animate-delay-[2500ms]">
        <div className="border-solid border-l-2 rounded-md border-green-600"></div>
        <p className=" text-lg font-medium font-sf ">{t("whoAmI")}</p>
      </div>
      <SocialMedia />
    </section>
  );
}
