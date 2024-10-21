import { Icon } from "@iconify/react";

interface BadgeProps {
  icon?: string;
  children?: React.ReactNode;
}

export default function Badge({ icon, children }: BadgeProps) {
  return (
    <span className="px-3 py-2 border rounded-md shadow flex items-center gap-2 justify-center border-gray-200 dark:border-gray-800">
      {icon
        ? <Icon icon={icon} fontWeight={300} fontSize={24} className="dark:fill-base-dark"></Icon>
        : null}
      {children}
    </span>
  );
}
