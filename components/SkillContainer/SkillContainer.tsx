"use client";

import SkillContent from "./SkillContent";
import SkillCard from "./SkillCard";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";
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
  icon: string;
  name: string;
};

interface SkillContainerProps extends React.HTMLAttributes<HTMLElement> {
  skills: Array<Skill>;
}

export default function SkillContainer(
  { skills, ...props }: SkillContainerProps,
) {
  const tabs: Array<Tab> = [
    { name: "Languages", icon: "cil:language" },
    { name: "Frameworks", icon: "bi:boxes" },
    { name: "Tools", icon: "la:tools" },
  ];

  const languages = skills.filter((skill) => {
    return skill.category === "Languages";
  });

  const frameworks = skills.filter((skill) => {
    return skill.category === "Frameworks";
  });

  const tools = skills.filter((skill) => {
    return skill.category === "Tools";
  });

  const [tab, setTab] = useState(0);

  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [level, setLevel] = useState("");
  const [desc, setDesc] = useState("");

  const switchTab = (tabKey: number) => {
    setTab(tabKey);
  };

  const showDescription = (
    name: string,
    icon: string,
    level: string,
    description: string,
  ) => {
    return () => {
      setName(name);
      setIcon(icon);
      setLevel(level);
      setDesc(description);

      console.log(description);
    };
  };

  return (
    <div
      className={twMerge(
        "shadow-md flex flex-col border rounded-md border-gray-200 dark:border-gray-800 w-full h-full shadow-gray-200 dark:shadow-gray-800",
        props.className,
      )}
    >
      <div className="flex items-center rounded-t-md border-b border-gray-200 dark:border-gray-800">
        {tabs.map((
          item,
          index,
        ) => (
          <button
            key={item.name}
            onClick={() => switchTab(index)}
            className={`px-4 py-3 flex-1 ${
              tab === index
                ? `dark:bg-tertiary-dark bg-tertiary text-base-light dark:text-base-dark font-bold`
                : ""
            } first:rounded-tl-md last:rounded-tr-md border-r last:border-r-0 border-gray-200 dark:border-gray-800 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out`}
          >
            <Icon icon={item.icon} fontSize={24} fontWeight={400}></Icon>
            <span className="hidden md:block">{item.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <SkillContent
          className={`${
            tab === 0 ? null : "hidden opacity-0"
          } border-r border-gray-200 opacity-100 transition-all duration-200 ease-in-out dark:border-gray-800`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 overflow-y-auto max-h-[36rem]">
            {languages.map((item, i) => (
              <SlideUp key={item.name} delay={1 + (0.2 * i)}>
                <SkillCard
                  icon={item.icon}
                  onClick={showDescription(
                    item.name,
                    item.icon,
                    item.level,
                    item.description,
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold tracking-tight">
                      {item.name}
                    </span>

                    <span className="text-sm lg:hidden text-gray-400 tracking-wide">
                      {item.level}
                    </span>
                  </div>
                </SkillCard>
              </SlideUp>
            ))}
          </div>
        </SkillContent>

        <SkillContent
          className={`${
            tab === 1 ? null : "hidden opacity-0"
          } border-r border-gray-200 opacity-100 transition-all duration-200 ease-in-out dark:border-gray-800`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 overflow-y-auto max-h-[36rem]">
            {frameworks.map((item, i) => (
              <SlideUp key={item.name} delay={1 + (0.2 * i)}>
                <SkillCard
                  icon={item.icon}
                  onClick={showDescription(
                    item.name,
                    item.icon,
                    item.level,
                    item.description,
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold tracking-tight">
                      {item.name}
                    </span>

                    <span className="text-sm lg:hidden text-gray-400 tracking-wide">
                      {item.level}
                    </span>
                  </div>
                </SkillCard>
              </SlideUp>
            ))}
          </div>
        </SkillContent>

        <SkillContent
          className={`${
            tab === 2 ? null : "hidden opacity-0"
          } border-r border-gray-200 opacity-100 transition-all duration-200 ease-in-out dark:border-gray-800`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 overflow-y-auto max-h-[36rem]">
            {tools.map((item, i) => (
              <SlideUp key={item.name} delay={1 + (0.2 * i)}>
                <SkillCard
                  icon={item.icon}
                  onClick={showDescription(
                    item.name,
                    item.icon,
                    item.level,
                    item.description,
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold tracking-tight">
                      {item.name}
                    </span>

                    <span className="text-sm lg:hidden text-gray-400 tracking-wide">
                      {item.level}
                    </span>
                  </div>
                </SkillCard>
              </SlideUp>
            ))}
          </div>
        </SkillContent>

        <div className="px-6 py-4 hidden lg:block">
          {desc
            ? (
              <SlideDown className="h-full">
                <div className="flex flex-col gap-5 h-full">
                  <div className="flex items-center gap-4">
                    <Icon
                      icon={icon}
                      fontWeight={400}
                      fontSize={64}
                      className="dark:fill-base-dark"
                    />

                    <div className="flex flex-col gap-2">
                      <h5 className="font-bold text-2xl">
                        {name}
                      </h5>

                      <Badge icon="mdi:certificate-outline" className="bg-secondary dark:bg-secondary-dark px-3 py-2">{level}</Badge>
                    </div>
                  </div>

                  <p className="leading-relaxed tracking-wide border rounded-md h-full px-4 py-3 border-neutral-200 dark:border-neutral-800">
                    {desc}
                  </p>
                </div>
              </SlideDown>
            )
            : (
              <div className="text-2xl tracking-tight h-full grid place-items-center">
                Select a card to display it’s information!
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
