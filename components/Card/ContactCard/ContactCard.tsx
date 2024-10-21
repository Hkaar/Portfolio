import { twMerge } from "tailwind-merge";
import Card from "..";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ContactCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  icon: string;
}

export default function ContactCard(
  { title, icon, ...props }: ContactCardProps,
) {
  return (
    <Card
      className={twMerge(
        "px-4 py-3 flex items-center flex-col md:flex-row gap-1 md:gap-3",
        props.className,
      )}
    >
      <div className="flex gap-2 items-center">
        <Icon icon={icon} fontSize={28} fontWeight={400} />
        <span className="text-gray-400 text-sm block md:hidden">{title}</span>
      </div>

      <div className="flex-1 text-center md:text-start flex flex-col gap-1">
        <span className="text-gray-400 text-sm hidden md:block">{title}</span>
        <span className="font-semibold text-lg">{props.children}</span>
      </div>
    </Card>
  );
}
