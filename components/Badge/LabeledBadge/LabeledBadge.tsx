import { twMerge } from "tailwind-merge";
import Badge from "../Badge";

interface LabeledBadgeProps extends React.HTMLAttributes<HTMLElement> {
  icon?: string,
  title: string
}

export default function LabeledBadge({ icon, title, ...props }: LabeledBadgeProps) {
  return (
    <div {...props} className={twMerge("flex items-center rounded-md border border-gray-100 dark:border-gray-900 shadow-sm", props.className)}>
      <Badge className="flex-1 rounded-none rounded-s-md border-none border-e">
        {title}
      </Badge>

      <Badge icon={icon} className="flex-1 rounded-none rounded-e-md border-none">
        {props.children}
      </Badge>
    </div>
  )
}