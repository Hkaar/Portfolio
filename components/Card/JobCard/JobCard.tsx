import Badge from "@/components/Badge";
import Card from "..";
import { Icon } from "@iconify/react";
import Link from "next/link";

type Topic = {
  name: string
  icon: string
}

interface JobCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  desc: string;
  date: string;
  job: string;
  topics?: Array<Topic>;
  link?: string
}

export default function JobCard(
  { title, desc, date, job, link, topics, ...props }: JobCardProps,
) {
  return (
    <Card className={`${props.className} gap-5 px-6 py-4 border-l-4 border-l-primary-700 dark:border-l-primary-100`}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-2">
          <h5 className="font-bold text-xl tracking-tight">
            {title}
          </h5>

          {link 
            ? (
              <Link href={link} className="hidden lg:block" target="_blank">
                <Icon icon="material-symbols-light:link" fontSize={24} fontWeight={400} className="text-accent"></Icon>
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
            {topics.map((item) => (<Badge key={item.name} icon={`devicon:${item.icon}`}>{item.name}</Badge>))}
          </div>
        )
        : null}

      <p className="tracking-wide text-gray-400 line-clamp-5">
        {desc}
      </p>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-accent">
          <Icon icon="material-symbols-light:calendar-month-outline" fontSize={24} fontWeight={400} />

          <span className="tracking-normal">{date}</span>
        </div>
      </div>
    </Card>
  );
}
