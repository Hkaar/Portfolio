"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { loadStoredTheme } from "@/utils/theme";
import Link from "next/link";

import { Box, Cat, House, MenuIcon, Phone, ScrollText } from "lucide-react";

import Menu from "@/components/Header/Menu";
import ThemeToggle from "@/components/Header/ThemeToggle";
import Button from "@/components/Button";

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
      className={`py-3 bg-base-light dark:bg-base-dark sticky top-0 z-40 border-b border-gray-200 dark:border-neutral-700
            ${
        isScrolled
          ? "drop-shadow-md" // (THIS IS CURRENTLY DISABLED 'KAY?) bg-opacity-20 dark:bg-base-light dark:bg-opacity-[7%] backdrop-blur-lg drop-shadow-lg
          : ""
      }`}
    >
      <div className="container flex items-center flex-col gap-4 lg:flex-row justify-between">
        <div className="flex justify-between items-center w-full lg:w-fit lg:justify-start">
          <Link
            href="/"
            className="flex justify-center lg:justify-start gap-2 items-center"
          >
            <Cat size={24} strokeWidth={2} />

            <span className="font-bold text-xl d-flex items-center tracking-tighter">
              Shava Jaya
            </span>
          </Link>

          <Button
            className="lg:hidden"
            onClick={handleCollapse}
          >
            <MenuIcon size={24} strokeWidth={1.5} />
          </Button>
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
            >
              <House size={18} strokeWidth={1.5} />
              Home
            </Menu>

            <Menu
              href="/projects"
              active={path.startsWith("/projects")}
            >
              <Box size={18} strokeWidth={1.5} />
              Projects
            </Menu>

            <Menu
              href="/blog"
              active={path.startsWith("/blog")}
            >
              <ScrollText size={18} strokeWidth={1.5} />
              Blog
            </Menu>

            <Menu
              href="/contact"
              active={path.startsWith("/contact")}
            >
              <Phone size={18} strokeWidth={1.5} />
              Contact
            </Menu>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
