import { twMerge } from "tailwind-merge";
import LinkButton from "../LinkButton";
import { randomUUID } from "crypto";

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentId: number;
  href: string;
  maxId: number;
  query?: boolean
}

const generateIds = (id: number, amount: number, maxId: number) => {
  const results: Array<number> = [];

  Array(amount).keys().forEach(i => {
    if ((id + i) < maxId) {
      results.push(id + i);
    } else {
      results.push(id - i)
    }
  });

  return results;
};

export default function Pagination(
  { currentId, maxId, href, query, ...props }: PaginationProps,
) {
  const idList = generateIds(currentId, 5, maxId).toSorted((a, b) => a - b);

  return (
    <div className={twMerge("flex items-center gap-2 w-fit", props.className)}>
      {currentId > 0
        ? (
          <LinkButton
          className="px-3 py-2"
            href={`${href}${query ? '?page=' : '/'}${currentId - 1}`}
            icon="mdi-light:arrow-left"
          >
            Previous
          </LinkButton>
        )
        : null}

      {idList.map((id) => (
        <LinkButton
          className="px-3 py-2"
          key={`paginator-${randomUUID()}`}
          href={`${href}${query ? '?page=' : '/'}${id}`}
          type="tertiary"
        >
          <span className="px-1">
            {id}
          </span>
        </LinkButton>
      ))}

      {currentId < maxId
        ? (
          <LinkButton
            className="px-4 py-2"
            href={`${href}${query ? '?page=' : '/'}${currentId + 1}`}
            icon="mdi-light:arrow-right"
            rightIcon
          >
            Next
          </LinkButton>
        )
        : null}
    </div>
  );
}
