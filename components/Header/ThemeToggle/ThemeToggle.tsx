"use client";

import { useEffect, useState } from "react";

import { getAppTheme, setAppTheme } from "@/utils/theme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(getAppTheme());
  }, []);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setAppTheme("light");
    } else {
      setTheme("dark");
      setAppTheme("dark");
    }
  };

  return (
    <button
      className="bg-none outline-none p-1 flex items-center gap-2"
      onClick={handleTheme}
    >
      {theme === "dark"
        ? (
          <Sun size={18} strokeWidth={1.5} />
        )
        : (
          <Moon size={18} strokeWidth={1.5} />
        )}

      <span className="block lg:hidden">
        Switch to {theme === "dark" ? "Light" : "Dark"} Theme
      </span>
    </button>
  );
}
