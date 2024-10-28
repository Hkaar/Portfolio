"use client";

import { twMerge } from "tailwind-merge";
import InputField from "../InputField";
import Button from "../Button";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface SearchBoxProps extends React.HTMLAttributes<HTMLElement> {
  placeholder?: string;
  value?: string;
}

export default function SearchBox({ placeholder, ...props }: SearchBoxProps) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const previous = searchParams.get('search');
  const [search, setSearch] = useState(previous ? previous : "");

  const handleSearch = () => {
    const queries = new URLSearchParams(searchParams.toString());
    queries.set("search", search);

    router.push(`${pathName}?${queries}`);
  }  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key.toLowerCase();

    if (key === "enter" || key === "return") {
      handleSearch();
    }
  }

  return (
    <div {...props} className={twMerge("flex items-center", props.className)}>
      <InputField onChange={handleChange} onKeyDown={handleKeyDown}
        value={search}
        className="flex-1 rounded-none rounded-s-md focus:ring-0 dark:focus:ring-0"
        placeholder={placeholder || "Start searching here!"}
      />

      <Button icon="material-symbols:search" onClick={handleSearch} type="accent" className="rounded-none rounded-e-md">
        <span className="hidden md:block">Search</span>
      </Button>
    </div>
  );
}
