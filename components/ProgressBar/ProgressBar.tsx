import { twMerge } from "tailwind-merge";

export default function ProgressBar({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={twMerge("w-full bg-secondary p-1 rounded-xl flex", props.className)}>
      {props.children}
    </div>
  )  
}