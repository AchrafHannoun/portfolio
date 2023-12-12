import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css"; // Create a separate CSS file

export default function ProjectsSection() {
  return (
    <div>
      <h2 className="font-montserrat font-bold text-xl mb-4">PROJECTS</h2>
      <section className="w-full pl-5">
        <div className="carousel">
          <ProjectCard
            projectTitle="This portfolio"
            imageSrc="/portfolio.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sed fugit eos aperiam debitis in cum nostrum illum unde consequatur rem, ullam dicta adipisci. Enim velit temporibus excepturi sequi illum."
            technologies={["nextJS", "Typescript", "TailwindCss"]}
            link="/"
          />

          <ProjectCard
            projectTitle="This portfolio"
            imageSrc="/portfolio.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sed fugit eos aperiam debitis in cum nostrum illum unde consequatur rem, ullam dicta adipisci. Enim velit temporibus excepturi sequi illum."
            technologies={["nextJS", "Typescript", "TailwindCss"]}
            link="/"
          />

          <ProjectCard
            projectTitle="This portfolio"
            imageSrc="/portfolio.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sed fugit eos aperiam debitis in cum nostrum illum unde consequatur rem, ullam dicta adipisci. Enim velit temporibus excepturi sequi illum."
            technologies={["nextJS", "Typescript", "TailwindCss"]}
            link="/"
          />

          <ProjectCard
            projectTitle="This portfolio"
            imageSrc="/portfolio.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sed fugit eos aperiam debitis in cum nostrum illum unde consequatur rem, ullam dicta adipisci. Enim velit temporibus excepturi sequi illum."
            technologies={["nextJS", "Typescript", "TailwindCss"]}
            link="/"
          />
        </div>
      </section>
    </div>
  );
}
