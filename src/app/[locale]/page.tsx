import IntroSection from "@/components/IntroSection";
import ImageSection from "@/components/ImageSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="flex flex-col font-semibold items-center justify-between mx-64 mt-24 gap-24">
      <section className="w-full  font-sf flex flex-row gap-10 xl:gap-20 border-t-2 border-green-600 border-b-2 rounded-bl-xl rounded-tr-xl divide-x-2 animate-flip-up animate-delay-500">
        <IntroSection />
        <ImageSection />
      </section>

      <section className="w-full">
        <ProjectsSection />
      </section>

      <section className="w-full">
        <SkillsSection />
      </section>
    </main>
  );
}
