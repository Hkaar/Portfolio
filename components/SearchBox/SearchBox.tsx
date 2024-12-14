"use client";

import { twMerge } from "tailwind-merge";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Search } from "lucide-react";

interface SearchBoxProps extends React.HTMLAttributes<HTMLElement> {
  placeholder?: string;
  value?: string;
}

export default function SearchBox({ placeholder, ...props }: SearchBoxProps) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const previous = searchParams.get("search");
  const [search, setSearch] = useState(previous ? previous : "");

  const handleSearch = () => {
    const queries = new URLSearchParams(searchParams.toString());
    queries.set("search", search);

    router.push(`${pathName}?${queries}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key.toLowerCase();

    if (key === "enter" || key === "return") {
      handleSearch();
    }
  };

  return (
    <div {...props} className={twMerge("flex items-center", props.className)}>
      <div className="relative w-full">
        <InputField
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={search}
          className="flex-1 rounded-none rounded-s-md focus:ring-0 dark:focus:ring-0 ps-11"
          placeholder={placeholder || "Start searching here!"}
        />

        <div className="absolute start-0 inset-y-3 ps-3">
          <Search size={18} strokeWidth={1.5} />
        </div>
      </div>

      <Button
        onClick={handleSearch}
        variant="primary"
        className="rounded-none rounded-e-md"
      >
        Search
      </Button>
    </div>
  );
}
