import { twMerge } from "tailwind-merge";
import LinkButton from "../LinkButton";

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentId: number;
  href: string;
  maxId: number;
  query?: boolean;
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
  { currentId, maxId, href, query, ...props }: PaginationProps,
) {
  const idList = generateIds(currentId, maxId+1);

  return (
    <div className={twMerge("flex items-center gap-2 w-fit", props.className)}>
      {currentId > 1 && (
        <LinkButton
          className="px-3 py-2"
          href={`${href}${query ? "?page=" : "/"}${currentId - 1}`}
          icon="mdi-light:arrow-left"
        >
          <span className="hidden lg:block">
            Previous
          </span>
        </LinkButton>
      )}

      {idList.map((id) => (
        <LinkButton
          className="px-3 py-2"
          key={`paginator-${id}`} // Use id as key
          href={`${href}${query ? "?page=" : "/"}${id}`}
          type={id === currentId ? "primary" : "tertiary"} // Highlight current page
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
          href={`${href}${query ? "?page=" : "/"}${currentId + 1}`}
          icon="mdi-light:arrow-right"
          rightIcon
        >
          <span className="hidden lg:block">
            Next
          </span>
        </LinkButton>
      )}
    </div>
  );
}
