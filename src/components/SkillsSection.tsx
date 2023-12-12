"use client";
import React, { useState } from "react";

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const skillsData = [
    {
      title: "Markup and Styling",
      items: ["HTML5", "CSS3"],
    },
    {
      title: "Styling Frameworks",
      items: ["SASS", "Tailwind CSS"],
    },
    {
      title: "Scripting Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      title: "Front End Frameworks",
      items: ["React", "Next.js"],
    },
    {
      title: "Backend Languages",
      items: ["PHP", "Node.js"],
    },
    {
      title: "Backend Frameworks",
      items: ["Laravel"],
    },
  ];

  return (
    <div className="w-full">
      <h2 className="font-montserrat font-bold text-xl pb-2">Skills</h2>
      {skillsData.map((section, index) => (
        <div className="border mb-2" key={index}>
          <div
            className={`p-2 cursor-pointer bg-[#CEDEBD] text-[#435334] hover:bg-[#9EB384] ${
              activeIndex === index ? "bg-[#9EB384]" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {section.title}
          </div>
          {activeIndex === index && (
            <div className="p-2 bg-[#CEDEBD] text-[#435334]">
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
