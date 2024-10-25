import { twMerge } from "tailwind-merge";

export default function ArticleHeader({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={twMerge("flex flex-col gap-5", props.className)}>
      {props.children}
    </div>
  )
}