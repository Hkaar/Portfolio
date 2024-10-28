import { twMerge } from "tailwind-merge";

export default function TableRow(props: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={twMerge("px-4 py-3 divide-x divide-neutral-200 dark:divide-neutral-800", props.className)}>
      {props.children}
    </tr>
  )
}