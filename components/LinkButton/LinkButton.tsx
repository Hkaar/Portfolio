import { Icon } from "@iconify/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  disabled?: boolean;
  type?: string;
  icon?: string;
  rightIcon?: boolean;
  target?: string;
}

// FOR SOME REASON THIS SOMETIMES DOESNT RENDER THE COLORS
const getTypeClasses = (type?: string): string => {
  const baseClass = type && type.startsWith("outline") ? "border" : "bg";
  const color = type?.replace("outline-", "") || "inherit";

  const hoverClasses = type?.startsWith("outline-")
    ? `hover:bg-${color} dark:hover:bg-${color}-dark hover:text-base-light dark:hover:text-base-dark`
    : `hover:bg-${color} dark:hover:bg-${color}-dark`;

  const textClasses = type
    ? type.startsWith("outline-")
      ? `text-${color} dark:text-${color}-dark`
      : "text-base-light dark:text-base-dark"
    : "text-base-dark dark:text-base-light";

  return `${baseClass}-${color} dark:${baseClass}-${color}-dark ${textClasses} ${hoverClasses}`.trim();
};

export default function LinkButton(
  { href, disabled, type, target, icon, rightIcon, ...props }: LinkButtonProps,
) {
  return (
    <Link
      target={target}
      {...props}
      href={href}
      passHref
      className={twMerge(
        "w-fit flex items-center gap-2 border ease-in-out duration-150 rounded-md px-3 py-2 border-gray-100 dark:border-gray-900",
        disabled
          ? "opacity-30 cursor-not-allowed"
          : "hover:scale-105 active:scale-90 active:opacity-50 shadow-md",
        getTypeClasses(type),
        props.className,
      )}
    >
      {!rightIcon && icon
        ? <Icon icon={icon} fontSize={24} fontWeight={300}></Icon>
        : null}
      {props.children}
      {rightIcon && icon
        ? <Icon icon={icon} fontSize={24} fontWeight={300}></Icon>
        : null}
    </Link>
  );
}
