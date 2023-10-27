import IntroSection from "@/components/IntroSection";
import ImageSection from "@/components/ImageSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex flex-col font-semibold items-center justify-between mx-64 mt-24 ">
      <h1>{t("title")}</h1>
      <section className="w-full  font-cal flex flex-row gap-10 xl:gap-20 border-t-2 border-green-600 border-b-2 rounded-bl-xl rounded-tr-xl">
        <IntroSection />
        <ImageSection />
      </section>
    </main>
  );
}
