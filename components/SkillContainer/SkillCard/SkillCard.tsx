import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface SkillCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  disabled?: boolean
}

export default function SkillCard({ icon, disabled, ...props }: SkillCardProps) {
  return (
    <div
      {...props}
      className={twMerge("flex flex-col h-full w-full items-center justify-center gap-3 p-6 rounded-md border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-950 hover:shadow-lg active:opacity-35 transition-all duration-300 ease-in-out whitespace-nowrap text-center", 
        disabled && 'opacity-45', 
        props.className)}
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
