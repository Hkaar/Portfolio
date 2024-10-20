"use client";

import SkillContent from "./SkillContent";
import SkillCard from "./SkillCard";

import { useState } from "react";
import { Icon } from "@iconify/react";

type SkillCard = {
  icon: string
  name: string
}

type Tab = {
  icon: string
  name: string
}

export default function SkillContainer({ ...props }: React.HTMLAttributes<HTMLElement>) {
  const tabs: Array<Tab> = [
    { name: "Languages", icon: "cil:language" },
    { name: "Frameworks", icon: "bi:boxes" },
    { name: "Tools", icon: "la:tools" }
  ]
  const languages: Array<SkillCard> = [
    { name: 'HTML 5', icon: "html5" },
    { name: 'CSS 3', icon: "css3" },
    { name: 'JavaScript', icon: "javascript" },
    { name: 'TypeScript', icon: "typescript" },
    { name: 'Python', icon: "python" },
    { name: 'PHP', icon: "php" },
  ];

  const frameworks: Array<SkillCard> = [
    { name: 'Tailwind CSS', icon: "tailwindcss" },
    { name: 'Bootstrap', icon: "bootstrap" },
    { name: 'React', icon: "react" },
    { name: 'Vue.js', icon: "vuejs" },
    { name: 'FastAPI', icon: "fastapi" },
    { name: 'Laravel', icon: "laravel" },
    { name: 'Next.js', icon: "nextjs" },
    { name: 'Node JS', icon: "nodejs"},
  ];

  const tools: Array<SkillCard> = [
    { name: 'MySQL', icon: "mysql" },
    { name: 'PostgreSQL', icon: "postgresql" },
    { name: 'Git', icon: "git" },
    { name: 'Figma', icon: "figma" },
    { name: 'GitHub', icon: "github" },
    { name: 'Inkscape', icon: "inkscape" },
    { name: 'Vite', icon: "vitejs" },
  ];

  const [tab, setTab] = useState(0);

  const switchTab = (tabKey: number) => {
    setTab(tabKey);
  };

  return (
    <div
      className={`${props.className} shadow-md flex flex-col border rounded-md border-gray-200 dark:border-gray-800 w-full h-full`}
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
              tab === index ? `dark:bg-secondary-dark bg-secondary text-base-light dark:text-base-dark font-bold` : ""
            } first:rounded-tl-md last:rounded-tr-md border-r last:border-r-0 border-gray-200 dark:border-gray-800 flex items-center justify-center gap-2`}
          >
            <Icon icon={item.icon} fontSize={24} fontWeight={400}></Icon>
            <span className="hidden md:block">{item.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <SkillContent
          className={`${
            tab === 0 ? null : "hidden"
          } border-r border-gray-200 dark:border-gray-800`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {languages.map((item) => (
              <SkillCard
                key={item.name}
                title={item.name}
                icon={`devicon:${item.icon}`}
              />
            ))}
          </div>
        </SkillContent>

        <SkillContent
          className={`${
            tab === 1 ? null : "hidden"
          } border-r border-gray-200 dark:border-gray-800`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {frameworks.map((item) => (
              <SkillCard
                key={item.name}
                title={item.name}
                icon={`devicon:${item.icon}`}
              />
            ))}
          </div>
        </SkillContent>

        <SkillContent
          className={`${
            tab === 2 ? null : "hidden"
          } border-r border-gray-200 dark:border-gray-800`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {tools.map((item) => (
              <SkillCard
                key={item.name}
                title={item.name}
                icon={`devicon:${item.icon}`}
              />
            ))}
          </div>
        </SkillContent>

        <div className="px-6 py-4 hidden lg:block">
          Description tab
        </div>
      </div>
    </div>
  );
}
