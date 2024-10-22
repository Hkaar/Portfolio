import { twMerge } from "tailwind-merge";

export default function LoadSpinner(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <div
      className={twMerge(
        "rounded-full border-gray-100 border-8 border-t-gray-400 dark:border-t-gray-500 dark:border-gray-900 size-16",
        props.className, "animate-rotate-360"
      )}
    >
      <span></span>
    </div>
  );
}
