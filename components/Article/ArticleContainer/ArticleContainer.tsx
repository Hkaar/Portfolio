import { twMerge } from "tailwind-merge";

export default function ArticleContainer({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="min-h-screen flex justify-center container py-4">
        <div className={twMerge("flex-1 flex flex-col gap-6 max-w-[55rem]", props.className)}>
          {props.children}
        </div>
    </div>
  )
}