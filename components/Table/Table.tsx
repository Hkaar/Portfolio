import { twMerge } from "tailwind-merge";

type TableHeading = {
  name: string;
  className?: string
}

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  headings: Array<TableHeading>;
}

export default function Table({ headings, ...props }: TableProps) {
  return (
    <div className={twMerge("border border-neutral-200 dark:border-neutral-800 rounded-md", props.className)}>
      <table className="w-full divide-y divide-x divide-neutral-200 dark:divide-neutral-800">
        <thead>
          <tr className="divide-x divide-neutral-200 dark:divide-neutral-800">
            {headings.map((heading) => (
              <th scope="col" className={twMerge("px-4 py-3 text-start", heading.className)}>{heading.name}</th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-x divide-neutral-200 dark:divide-neutral-800">
          {props.children}
        </tbody>
      </table>
    </div>
  );
}
