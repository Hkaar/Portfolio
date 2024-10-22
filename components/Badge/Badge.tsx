import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  icon?: string;
}

export default function Badge({ icon, className, ...props }: BadgeProps) {
  return (
    <span {...props} className={twMerge("px-3 py-2 border rounded-md shadow flex items-center gap-2 justify-center border-gray-200 dark:border-gray-800", className)}>
      {icon
        ? <Icon icon={icon} fontWeight={300} fontSize={24} className="dark:fill-base-dark"></Icon>
        : null}
      {props.children}
    </span>
  );
}
