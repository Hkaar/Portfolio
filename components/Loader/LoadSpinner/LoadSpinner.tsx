import { twMerge } from "tailwind-merge";

export default function LoadSpinner(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <div
      className={twMerge(
        "rounded-full border-8 border-neutral-200 border-t-neutral-400 dark:border-neutral-900 dark:border-t-neutral-400 size-16",
        props.className, "animate-rotate-360"
      )}
    >
      <span></span>
    </div>
  );
}
