"use client";

import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import Button from "../Button";
import { Icon } from "@iconify/react";

import { usePathname } from "next/navigation";
import { loadStoredTheme } from "@/utils/theme";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    loadStoredTheme();

    const handleScroll = () => {
      setIsScrolled(globalThis.scrollY > 35);
    };

    globalThis.addEventListener("scroll", handleScroll);

    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <header
      className={`py-4 bg-base-light dark:bg-base-dark sticky top-0 z-40
            ${
        isScrolled
          ? "border-b border-neutral-200 dark:border-neutral-800 drop-shadow-md" // (THIS IS CURRENTLY DISABLED 'KAY?) bg-opacity-20 dark:bg-base-light dark:bg-opacity-[7%] backdrop-blur-lg drop-shadow-lg
          : ""
      }`}
    >
      <div className="container flex items-center flex-col gap-4 lg:flex-row justify-between">
        <div className="flex justify-between w-full lg:w-fit lg:justify-start">
          <Link href="/" className="flex lg:items-center justify-center lg:justify-start gap-2">
            <Icon
              icon="material-symbols-light:code-blocks"
              fontSize={36}
              fontWeight={300}
            >
            </Icon>

            <h5 className="font-semibold text-2xl d-flex items-center">
              Shava Jaya
            </h5>
          </Link>

          <Button
            className="lg:hidden"
            icon="mdi-light:menu"
            onClick={handleCollapse}
          />
        </div>
        
        <div
          id="navMenu"
          className={`flex lg:items-center flex-col lg:flex-row gap-3 w-full lg:w-fit transition-all ease-linear duration-200 ${
            isCollapsed ? "block" : "hidden lg:flex"
          }`}
        >
          <nav className="flex lg:items-center flex-col lg:flex-row gap-2">
            <Menu
              href="/"
              active={path === "/"}
              icon="material-symbols-light:home-outline"
            >
              Home
            </Menu>

            <Menu
              href="/projects"
              active={path.startsWith("/projects")}
              icon="material-symbols-light:deployed-code-outline"
            >
              Projects
            </Menu>

            <Menu
              href="/blog"
              active={path.startsWith("/blog")}
              icon="material-symbols-light:newspaper"
            >
              Blog
            </Menu>
            
            <Menu
              href="/contact"
              active={path.startsWith("/contact")}
              icon="mdi-light:phone"
            >
              Contact
            </Menu>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
