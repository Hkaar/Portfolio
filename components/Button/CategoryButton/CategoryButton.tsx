"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button, { ButtonProps } from "../Button";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

interface CategoryButtonProps extends ButtonProps {
  slug: string;
}

export default function CategoryButton(
  { slug, ...props }: CategoryButtonProps,
) {
  const [active, setActive] = useState(false);

  const router = useRouter();
  const pathName = usePathname();
  const categoryParams = useSearchParams();

  const previous = categoryParams.get("categories");
  let categories = previous ? previous.split("-") : [];

  useEffect(() => {
    setActive(categories.includes(slug));
  }, [categoryParams, slug]);

  const handleCategorySearch = (category: string) => {
    if (categories.includes(category)) {
      categories = categories.filter((item) => item !== category);
      setActive(false);
    } else {
      categories.push(category);
      setActive(true);
    }

    const queries = new URLSearchParams(categoryParams.toString());
    queries.set("categories", categories.toString().replaceAll(",", "-"));

    router.push(`${pathName}?${queries}`);
  };

  return (
    <Button
      onClick={() => handleCategorySearch(slug)}
      icon={props.icon}
      className={twMerge(
        "justify-center",
        active ? "bg-opacity-20 bg-gray-300 dark:bg-neutral-700" : "",
        props.className,
      )}
    >
      {props.children}
    </Button>
  );
}
