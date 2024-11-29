import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface SkillCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: string;
}

export default function SkillCard({ icon, ...props }: SkillCardProps) {
  return (
    <div
      {...props}
      className={twMerge("flex flex-col h-full w-full items-center justify-center gap-3 p-6 rounded-md border border-gray-200 dark:border-neutral-700 bg-base-light hover:shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out dark:bg-base-dark text-center", props.className)}
    >
      <Icon
        icon={icon}
        fontSize={48}
        fontWeight={300}
        className="dark:fill-base-dark"
      >
      </Icon>

      {props.children}
    </div>
  );
}
