import { ButtonVariants } from "@/types/variants";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  icon?: string;
  rightIcon?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

const getTypeClasses = (variant?: string): string => {
  switch (variant) {
    case "primary":
      return "bg-primary text-base-light dark:bg-primary-dark dark:text-base-dark";
    case "secondary":
      return "bg-secondary dark:bg-secondary-dark text-base-light dark:text-base-dark";
    case "accent":
      return "bg-accent dark:bg-accent-dark text-body-light dark:text-text-dark";
    case "success":
      return "bg-success text-base-light dark:bg-success-dark";
    case "info":
      return "bg-info text-base-light dark:bg-info-dark dark:text-base-dark";
    case "warning":
      return "bg-warning text-base-light dark:bg-warning-dark";
    case "danger":
      return "bg-danger text-base-light dark:bg-danger-dark";
    case "outline-primary":
      return "border-primary dark:border-primary-dark hover:bg-primary dark:hover:bg-primary-dark";
    case "outline-secondary":
      return "border-secondary dark:border-secondary-dark hover:bg-secondary dark:hover:bg-secondary-dark";
    case "outline-accent":
      return "border-accent hover:bg-accent hover:text-body-light dark:hover:text-text-dark dark:border-accent-dark dark:hover:bg-accent-dark";
    case "outline-success":
      return "border-success dark:border-success-dark hover:bg-success dark:hover:bg-success-dark";
    case "outline-info":
      return "border-info dark:border-info-dark hover:bg-info dark:hover:bg-info-dark";
    case "outline-warning":
      return "border-warning hover:bg-warning dark:hover:bg-warning-dark";
    case "outline-danger":
      return "border-danger dark:border-danger-dark hover:bg-danger dark:hover:bg-danger-dark";
    default:
      return "border-gray-200 dark:border-gray-800";
  }
};

export default function Button(
  {
    disabled,
    variant,
    type,
    icon,
    rightIcon,
    children,
    className,
    ...props
  }: ButtonProps,
) {
  return (
    <button
      type={type || "button"}
      {...props}
      className={twMerge(
        "w-fit flex items-center gap-2 border ease-in-out duration-150 rounded-md px-3 py-2 border-gray-200 dark:border-gray-800",
        getTypeClasses(variant),
        disabled
          ? "opacity-30 cursor-not-allowed"
          : "hover:scale-105 active:scale-90 active:opacity-50 shadow-sm",
        className,
      )}
      disabled={disabled ? true : false}
    >
      {!rightIcon && icon
        ? <Icon icon={icon} fontSize={24} fontWeight={300}></Icon>
        : ""}
      {children}
      {rightIcon && icon
        ? <Icon icon={icon} fontSize={24} fontWeight={300}></Icon>
        : ""}
    </button>
  );
}
