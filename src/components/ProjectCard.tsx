import { project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(props: project) {
  const technologies = props.technologies.map((techno) => {
    return (
      <span className="bg-[#CEDEBD] rounded-md m-auto w-fit font-sf text-sm shadow-lg">
        {techno}
      </span>
    );
  });
  return (
    <div className="flex flex-col w-[250px] border-2 border-green-400 bg-[#ECE3CE] rounded-md hover:shadow-lg hover:shadow-green-300">
      <Image
        src={props.imageSrc}
        width={250}
        height={250}
        alt={"image for the projet " + props.projectTitle}
        className="rounded-t-md"
      />
      <div className="">
        <h3 className="m-auto w-fit pt-2 font-montserrat font-bold text-xl">
          {props.projectTitle.toUpperCase()}
        </h3>
        <div className="flex flex-row gap-2 items-center">{technologies}</div>
      </div>
      <p className="p-2 font-thin text-sm font-sf">{props.description}</p>
      <Link
        href={props.link}
        className="w-fit m-auto p-1 mb-2 border-2 border-[#9EB384] bg-[#CEDEBD] rounded-sm hover:bg-[#9EB384] hover:text-white shadow-xl"
      >
        view Project
      </Link>
    </div>
  );
}
