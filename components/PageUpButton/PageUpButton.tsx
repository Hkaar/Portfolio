"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../Button";

export default function PageUpButton(
  { className, ...props }: React.HTMLAttributes<HTMLButtonElement>,
) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (globalThis.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
    };

    globalThis.addEventListener("scroll", handleScroll);

    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    globalThis.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      icon="mdi:arrow-up"
      {...props}
      type="accent"
      onClick={scrollToTop}
      className={twMerge("z-30 right-8 bottom-6 fixed px-3 py-3", isScrolled ? 'block' : 'hidden', className)}
    >
    </Button>
  );
}
