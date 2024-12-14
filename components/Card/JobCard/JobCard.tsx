import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { CalendarRange, LinkIcon } from "lucide-react";

import Badge from "@/components/Badge";
import Card from "@/components/Card";

type Topic = {
  name: string;
  icon: string;
};

interface JobCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  desc: string;
  date: string;
  job: string;
  topics?: Array<Topic>;
  link?: string;
}

export default function JobCard(
  { title, desc, date, job, link, topics, ...props }: JobCardProps,
) {
  return (
    <Card
      className={twMerge(
        `gap-5 px-6 py-4 border-l-[6px] border-gray-200 dark:border-neutral-700 border-l-accent dark:border-l-accent-dark bg-gray-50 dark:bg-neutral-950`,
        props.className,
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-2">
          <h5 className="font-bold text-xl tracking-tight">
            {title}
          </h5>

          {link
            ? (
              <Link href={link} className="hidden lg:block" target="_blank">
                <LinkIcon size={18} strokeWidth={1.5} className="stroke-accent dark:stroke-accent-dark" />
              </Link>
            )
            : null}
        </div>

        <span className="font-medium tracking-wide">
          {job}
        </span>
      </div>

      {topics
        ? (
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {topics.map((item) => (
              <Badge key={item.name} icon={`devicon:${item.icon}`}>
                {item.name}
              </Badge>
            ))}
          </div>
        )
        : null}

      <p className="tracking-wide text-gray-400 line-clamp-5">
        {desc}
      </p>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-accent dark:text-accent-dark">
          <CalendarRange size={18} strokeWidth={1.5} />

          <span className="tracking-normal">{date}</span>
        </div>
      </div>
    </Card>
  );
}
