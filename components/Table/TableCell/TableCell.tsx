import { twMerge } from "tailwind-merge";

export default function TableCell(props: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={twMerge("px-4 py-3", props.className)}>
      {props.children}
    </td>
  )
}