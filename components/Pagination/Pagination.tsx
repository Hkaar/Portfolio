"use client";

import { twMerge } from "tailwind-merge";
import { useSearchParams } from "next/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

import LinkButton from "@/components/LinkButton";

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentId: number;
  href: string;
  maxId: number;
}

const generateIds = (currentId: number, maxId: number) => {
  const results: Array<number> = [];
  const totalDisplayed = 3;

  let start = Math.max(1, currentId - Math.floor(totalDisplayed / 2));
  const end = Math.min(maxId, start + totalDisplayed);

  if (end === maxId) {
    start = Math.max(1, maxId - totalDisplayed);
  }

  for (let i = start; i < end; i++) {
    results.push(i);
  }

  return results;
};

export default function Pagination(
  { currentId, maxId, href, ...props }: PaginationProps,
) {
  const idList = generateIds(currentId, maxId + 1);

  const searchParams = useSearchParams();

  const buildUrl = (page: number) => {
    const queries = new URLSearchParams(searchParams.toString());
    queries.set("page", page.toString());

    return `${href}?${queries}`;
  };

  return (
    <div className={twMerge("flex items-center gap-2 w-fit", props.className)}>
      {currentId > 1 && (
        <LinkButton
          className="px-3 py-2"
          href={buildUrl(currentId - 1)}
          variant="secondary"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />

          <span className="hidden lg:block">
            Previous
          </span>
        </LinkButton>
      )}

      {idList.map((id) => (
        <LinkButton
          className="px-3 py-2"
          key={`paginator-${id}`}
          href={buildUrl(id)}
          disabled={id === currentId}
          variant={id === currentId ? "primary" : undefined}
        >
          <span
            className={twMerge("px-1", id === currentId ? "bg-opacity-50" : "")}
          >
            {id}
          </span>
        </LinkButton>
      ))}

      {currentId <= maxId - 1 && (
        <LinkButton
          className="px-4 py-2"
          href={buildUrl(currentId + 1)}
          variant="secondary"
        >
          <span className="hidden lg:block">
            Next
          </span>
          <ChevronRight size={24} strokeWidth={1.5} />
        </LinkButton>
      )}
    </div>
  );
}
