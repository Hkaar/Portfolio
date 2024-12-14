"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";
import { Award, Boxes, Info, Languages, PencilRuler } from "lucide-react";

import SkillContent from "./SkillContent";
import SkillCard from "./SkillCard";
import SlideUp from "../Transitions/SlideUp";
import SlideDown from "../Transitions/SlideDown";
import Badge from "../Badge";

type Skill = {
  name: string;
  icon: string;
  level: string;
  description: string;
  category: string;
};

type Tab = {
  icon: React.ReactNode;
  name: string;
};

interface SkillContainerProps extends React.HTMLAttributes<HTMLElement> {
  skills: Array<Skill>;
}

export default function SkillContainer(
  { skills, ...props }: SkillContainerProps,
) {
  const tabs: Array<Tab> = [
    { name: "Languages", icon: <Languages size={24} strokeWidth={1.5} /> },
    { name: "Frameworks", icon: <Boxes size={24} strokeWidth={1.5} /> },
    { name: "Tools", icon: <PencilRuler size={24} strokeWidth={1.5} /> },
  ];

  const skillsByCategory = {
    Languages: skills.filter((skill) => skill.category === "Languages"),
    Frameworks: skills.filter((skill) => skill.category === "Frameworks"),
    Tools: skills.filter((skill) => skill.category === "Tools"),
  };

  const [activeTab, setActiveTab] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillSelect = (skill: Skill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };

  const renderSkillGrid = (categorySkills: Skill[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 overflow-y-auto max-h-[36rem] md:max-h-[18rem] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 px-2">
      {categorySkills.map((skill, i) => (
        <SlideUp key={skill.name} delay={1 + (0.2 * i)}>
          <SkillCard
            disabled={selectedSkill?.name === skill.name}
            icon={skill.icon}
            onClick={() =>
              handleSkillSelect(skill)}
          >
            <div className="flex flex-col gap-1">
              <span className="font-semibold tracking-tight">
                {skill.name}
              </span>
              <span className="text-sm lg:hidden text-gray-400 tracking-wide">
                {skill.level}
              </span>
            </div>
          </SkillCard>
        </SlideUp>
      ))}
    </div>
  );

  const renderSkillDescription = () => {
    if (!selectedSkill) {
      return (
        <div className="tracking-tight h-full grid place-items-center">
          <span className="flex items-center gap-2">
            <Info size={24} strokeWidth={1.5} />
            Select a card to display its information!
          </span>
        </div>
      );
    }

    return (
      <SlideDown className="h-full">
        <div className="flex flex-col gap-5 h-full">
          <div className="flex items-center gap-4">
            <Icon
              icon={selectedSkill.icon}
              fontWeight={400}
              fontSize={64}
              className="dark:fill-base-dark"
            />
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-2xl">
                {selectedSkill.name}
              </h5>
              <Badge className="bg-gray-100 dark:bg-neutral-900 px-3 py-2">
                <Award
                  size={18}
                  strokeWidth={1.5}
                  className="fill-accent dark:fill-accent-dark"
                />
                {selectedSkill.level}
              </Badge>
            </div>
          </div>
          <p className="leading-relaxed tracking-wide border rounded-md h-full px-4 py-3 border-neutral-200 dark:border-neutral-800">
            {selectedSkill.description}
          </p>
        </div>
      </SlideDown>
    );
  };

  return (
    <div
      className={twMerge(
        "shadow-md flex flex-col border rounded-md border-gray-200 dark:border-gray-800 w-full h-full",
        props.className,
      )}
    >
      <div className="flex items-center rounded-t-md border-b border-gray-200 dark:border-gray-800">
        {tabs.map((item, index) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-3 flex-1 ${
              activeTab === index
                ? `dark:bg-accent-dark bg-accent text-base-light font-bold`
                : "bg-gray-50 dark:bg-neutral-950"
            } first:rounded-tl-md last:rounded-tr-md border-r last:border-r-0 border-gray-200 dark:border-gray-800 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out`}
          >
            {item.icon}
            <span className="hidden md:block">{item.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {Object.entries(skillsByCategory).map((
          [category, categorySkills],
          index,
        ) => (
          <SkillContent
            key={category}
            className={`${
              activeTab === index ? null : "hidden opacity-0"
            } border-r border-gray-200 opacity-100 transition-all duration-200 ease-in-out dark:border-gray-800`}
          >
            {renderSkillGrid(categorySkills)}
          </SkillContent>
        ))}

        {/* Description Sidebar */}
        <div className="px-6 py-4 hidden lg:block">
          {renderSkillDescription()}
        </div>
      </div>
    </div>
  );
}
