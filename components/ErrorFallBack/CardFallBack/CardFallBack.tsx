import Card from "@/components/Card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";

export default function CardFallBack(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <Card
      className={twMerge("w-80 h-96 justify-center items-center")}
      {...props}
    >
      <div className="flex flex-col text-center gap-3">
        <Icon icon="mdi:cancel" fontSize={64} fontWeight={400} />
        <span className="font-bold text-danger dark:text-danger-dark">
          Oops! Looks like something went wrong!
        </span>
      </div>

      {props.children}
    </Card>
  );
}
