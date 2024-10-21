import { twMerge } from "tailwind-merge"

export default function Card({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={twMerge("flex flex-col rounded-md border border-gray-200 dark:border-gray-800 shadow-md", props.className)}>
      { props.children }
    </div>
  )
}