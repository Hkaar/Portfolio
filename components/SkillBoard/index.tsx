import Card from "../Card";

import { toPascalCase } from "@std/text";

export default function SkillBoard() {
  const items = [
    "html5",
    "css3",
    "javascript",
    "python",
    "php",
    "tailwindcss",
    "bootstrap",
    "react",
    "vuejs",
    "fastapi",
    "laravel",
    "nextjs",
    "mysql",
    "git",
    "figma",
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 border rounded-md px-8 py-6 shadow-md border-gray-200 dark:border-gray-800 gap-3 dark:fill-base-dark dark:text-base-dark">
      {items.map((item) => (
        <Card
          key={item}
          icon={`devicon:${item}`}
          tooltip={toPascalCase(item)}
        />
      ))}
    </div>
  );
}
