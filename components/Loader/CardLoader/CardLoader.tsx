import Card from "@/components/Card";
import Loader from "../Loader";
import { twMerge } from "tailwind-merge";

export default function CardLoader({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <Card className={twMerge("w-80 h-96", props.className)}>
      <Loader className="rounded-t-md flex-1">
        <span className="h-32"></span>
      </Loader>

      <div className="px-3 py-4 flex flex-col gap-3 flex-1">
        <Loader className="w-1/2 h-6 rounded-md" />

        <Loader className="h-28 rounded-md" />

        <Loader className="w-1/2 h-6 rounded-md" />
      </div>
    </Card>
  )
}