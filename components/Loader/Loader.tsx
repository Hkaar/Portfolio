import { twMerge } from "tailwind-merge";

export default function Loader({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={twMerge("w-full h-full bg-accent animate-fade-pulse px-3 py-2", props.className)} role="status" aria-live="polite">
      {props.children ? props.children : <span></span>}
    </div>
  )
}