"use client";

import SkillContent from "./SkillContent";
import SkillCard from "./SkillCard";

import { useState } from "react";
import { toPascalCase } from "@std/text";

import styles from "./styles.module.css";

interface SkillContainerProps extends React.HTMLAttributes<HTMLElement> {}

export default function SkillContainer({ ...props }: SkillContainerProps) {
  const languages = [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "python",
    "php",
  ];
  const frameworks = [
    "tailwindcss",
    "bootstrap",
    "react",
    "vuejs",
    "fastapi",
    "laravel",
    "nextjs",
  ];
  const tools = ["mysql", "postgresql", "git", "figma", "github", "inkscape"];

  const [tab, setTab] = useState(0);

  const switchTab = (tabKey: number) => {
    setTab(tabKey);
  };

  return (
    <div
      className={`${props.className} shadow-md flex flex-col border rounded-md border-gray-200 dark:border-gray-800 w-full h-full`}
    >
      <div className="flex items-center rounded-t-md border-b border-gray-200 dark:border-gray-800">
        {["Languages", "Frameworks & Libraries", "Tools"].map((
          label,
          index,
        ) => (
          <button
            key={label}
            onClick={() => switchTab(index)}
            className={`px-4 py-3 ${
              tab === index ? `${styles.active}` : ""
            } first:rounded-tl-md border-r border-gray-200 dark:border-gray-800`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2">
        <SkillContent
          className={`${
            tab === 0 ? null : "hidden"
          } border-r border-gray-200 dark:border-gray-800 bg-base-light dark:bg-base-dark`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((item) => (
              <SkillCard
                key={item}
                title={toPascalCase(item)}
                icon={`devicon:${item}`}
              />
            ))}
          </div>
        </SkillContent>

        <SkillContent
          className={`${
            tab === 1 ? null : "hidden"
          } border-r border-gray-200 dark:border-gray-800 bg-base-light dark:bg-base-dark`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {frameworks.map((item) => (
              <SkillCard
                key={item}
                title={toPascalCase(item)}
                icon={`devicon:${item}`}
              />
            ))}
          </div>
        </SkillContent>

        <SkillContent
          className={`${
            tab === 2 ? null : "hidden"
          } border-r border-gray-200 dark:border-gray-800 bg-base-light dark:bg-base-dark`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((item) => (
              <SkillCard
                key={item}
                title={toPascalCase(item)}
                icon={`devicon:${item}`}
              />
            ))}
          </div>
        </SkillContent>

        <div className="px-6 py-4">
          Description tab
        </div>
      </div>
    </div>
  );
}
