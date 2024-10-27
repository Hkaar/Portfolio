import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  icon?: string;
}

export default function Badge({ icon, className, ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={twMerge(
        "px-2 py-1 border rounded-md shadow flex items-center gap-2 justify-center border-neutral-200 dark:border-neutral-800",
        className,
      )}
    >
      {icon
        ? (
          <Icon
            icon={icon}
            fontWeight={300}
            fontSize={24}
            className="dark:fill-base-dark"
          >
          </Icon>
        )
        : null}

      {props.children}
    </span>
  );
}
