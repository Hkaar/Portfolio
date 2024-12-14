"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "@/components/Button";
import { ArrowUp } from "lucide-react";

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
      {...props}
      variant="secondary"
      onClick={scrollToTop}
      className={twMerge("z-30 right-8 bottom-6 fixed p-3 shadow-md", isScrolled ? 'block' : 'hidden', className)}
    >
      <ArrowUp size={24} strokeWidth={1.5} />
    </Button>
  );
}
