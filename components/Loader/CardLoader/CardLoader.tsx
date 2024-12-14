import Card from "@/components/Card";
import Loader from "../Loader";
import { twMerge } from "tailwind-merge";

export default function CardLoader({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <Card className={twMerge("min-w-80 min-h-96 h-full w-full p-4", props.className)}>
      <Loader className="rounded-md flex-1 mb-5">
        <span className="min-h-64 aspect-video"></span>
      </Loader>

      <div className="flex flex-col gap-3 flex-1">
        <Loader className="w-1/2 h-6 rounded-md" />

        <Loader className="h-28 rounded-md" />

        <Loader className="w-1/3 h-10 rounded-md" />
      </div>
    </Card>
  )
}