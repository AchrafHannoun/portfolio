import IntroSection from "@/components/IntroSection";
import ImageSection from "@/components/ImageSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="flex flex-col font-semibold items-center justify-between lg:w-2/3 md:w-5/6 md:m-auto pt-24 mx-0 gap-24">
      <div className=" max-w-screen mx-auto">
        <section className="flex flex-col-reverse md:flex-row w-full gap-10 md:gap-20 border-t-2 md:border-green-600 md:border-b-2 md:rounded-bl-xl md:rounded-tr-xl divide-x-2 animate-flip-up animate-delay-500 sm:flex-col">
          <IntroSection />
          <ImageSection />
        </section>
      </div>

      <section className="max-w-screen w-full">
        <ProjectsSection />
      </section>

      <section className="w-full">
        <SkillsSection />
      </section>
    </main>
  );
}
