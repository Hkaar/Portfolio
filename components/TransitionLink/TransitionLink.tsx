"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

function sleep(duration: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, duration));
}

export default function TransitionLink(
  { href, children, className, ...props }: TransitionLinkProps,
) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    await sleep(300);

    router.push(href);

    await sleep(350);

    body?.classList.remove("page-transition");
  };

  return (
    <Link
      href={href}
      onClick={handleTransition}
      {...props}
      className={className}
    >
      {children}
    </Link>
  );
}
