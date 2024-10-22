import { twMerge } from "tailwind-merge"

export default function ArticleBlock({...props}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div {...props} className={twMerge("flex flex-col gap-3 tracking-wide leading-relaxed", props.className)}>
      {props.children}
    </div>
  )
}