import { twMerge } from "tailwind-merge";

interface ProgressItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
}

export default function ProgressItem({ value, ...props }: ProgressItemProps) {
  return (
    <span {...props} className={twMerge("first:rounded-s-xl last:rounded-e-xl p-2", props.className)} style={{width: `${value}%`}}></span>
  )
}