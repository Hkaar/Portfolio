import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface SkillCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: string;
}

export default function SkillCard({ icon, ...props }: SkillCardProps) {
  return (
    <div
      {...props}
      className={twMerge("flex flex-col h-full w-full items-center justify-center gap-3 p-6 rounded-md border border-gray-200 dark:border-gray-800 bg-base-light shadow shadow-gray-200 dark:shadow-gray-800 dark:bg-base-dark text-center", props.className)}
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
