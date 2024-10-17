import Link from "next/link";
import React from "react";
import Icon from "../Icon";

interface MenuProps {
  href: string;
  icon?: string;
  active: boolean;
  children: React.ReactNode;
}

export default function Menu({ href, icon, active, children }: MenuProps) {
  return (
    <Link
      href={href}
      passHref
      className={`${
        active
          ? "bg-tertiary dark:bg-tertiary-dark text-base-light dark:text-base-dark font-semibold"
          : "hover:bg-tertiary hover:dark:bg-tertiary-dark hover:text-base-light dark:hover:text-base-dark active:opacity-50 active:scale-90 hover:scale-105"
      }
            flex items-center gap-2  duration-150 ease-in-out px-3 py-2 rounded-md`}
    >
      {icon ? <Icon>{icon}</Icon> : null}
      {children}
    </Link>
  );
}
