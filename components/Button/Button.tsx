import { Icon } from "@iconify/react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: string;
  icon?: string;
  rightIcon?: boolean;
  disabled?: boolean;
  actionType?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
}

const getTypeClasses = (type?: string): string => {
  const baseClass = type && type.startsWith("outline") ? "border" : "bg";
  const color = type?.replace("outline-", "") || "inherit";

  const hoverClasses = type?.startsWith("outline-")
    ? `hover:bg-${color} dark:hover:bg-${color}-dark hover:text-base-light dark:hover:text-base-dark`
    : "";
  const textClasses = type
    ? type.startsWith("outline-")
      ? `text-${color} dark:text-${color}-dark`
      : "text-base-light dark:text-base-dark"
    : "text-base-dark dark:text-base-light";

  return `${baseClass}-${color} dark:${baseClass}-${color}-dark ${textClasses} ${hoverClasses}`;
};

export default function Button(
  { disabled, type, actionType, icon, rightIcon, children, className, ...props }:
    ButtonProps,
) {
  return (
    <button
      type={actionType || "button"}
      {...props}
      className={`${className} 
            ${
        disabled
          ? ""
          : "hover:scale-105 active:scale-90 active:opacity-50 shadow-sm"
      } ${
        getTypeClasses(type)
      } w-fit flex items-center gap-2 border ease-in-out 
            duration-150 rounded-md px-3 py-2 border-gray-200 dark:border-gray-800`}
      disabled={disabled ? true : false}
    >
      {!rightIcon && icon ? <Icon icon={icon} fontSize={24} fontWeight={300}></Icon> : ""}
      {children ? children : ""}
      {rightIcon && icon ? <Icon icon={icon} fontSize={24} fontWeight={300}></Icon> : ""}
    </button>
  );
}
