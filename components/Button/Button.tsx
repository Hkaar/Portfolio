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
  switch (type) {
    case "primary":
      return "bg-primary text-base-light dark:bg-primary-dark dark:text-base-dark";
    case "secondary":
      return "bg-secondary text-base-light dark:bg-secondary-dark dark:text-base-dark";
    case "tertiary":
      return "bg-tertiary text-base-light dark:bg-tertiary-dark dark:text-base-dark";
    case "accent":
      return "bg-accent dark:bg-accent-dark";
    case "success":
      return "bg-success text-base-light dark:bg-success-dark";
    case "info":
      return "bg-info text-base-light dark:bg-info-dark dark:text-base-dark";
    case "warning":
      return "bg-warning text-base-light dark:bg-warning-dark";
    case "danger":
      return "bg-danger text-base-light dark:bg-danger-dark";
    case "outline-primary":
      return "border-primary text-primary dark:border-primary-dark dark:text-primary-dark hover:bg-primary dark:hover:bg-primary-dark hover:text-base-light dark:hover:text-base-dark";
    case "outline-secondary":
      return "border-secondary text-secondary dark:border-secondary-dark dark:text-secondary-dark hover:bg-secondary dark:hover:bg-secondary-dark hover:text-base-light dark:hover:text-base-dark";
    case "outline-tertiary":
      return "border-tertiary text-tertiary dark:border-tertiary-dark dark:text-tertiary-dark hover:bg-tertiary dark:hover:bg-tertiary-dark hover:text-base-light dark:hover:text-base-dark";
    case "outline-accent":
      return "border-accent hover:bg-accent dark:border-accent-dark dark:hover:bg-accent-dark";
    case "outline-success":
      return "border-success text-success dark:border-success-dark hover:bg-success dark:hover:bg-success-dark hover:text-base-light dark:hover:text-base-dark";
    case "outline-info":
      return "border-info text-info dark:border-info-dark dark:text-info-dark hover:bg-info dark:hover:bg-info-dark hover:text-base-light dark:hover:text-base-dark";
    case "outline-warning":
      return "border-warning text-warning hover:bg-warning dark:hover:bg-warning-dark hover:text-base-light dark:hover:text-base-dark";
    case "outline-danger":
      return "border-danger text-danger dark:border-danger-dark hover:bg-danger dark:hover:bg-danger-dark hover:text-base-light dark:hover:text-base-dark";
    default:
      return "border-gray-200 dark:border-gray-800";
  }
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
