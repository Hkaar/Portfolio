import Badge from "@/components/Badge";
import Card from "..";
import { Icon } from "@iconify/react";

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
}

export default function JobCard(
  { title, desc, date, job, topics, ...props }: JobCardProps,
) {
  return (
    <Card className={`${props.className} gap-5 px-6 py-4 border-l-4 border-l-primary dark:border-l-primary-dark`}>
      <div className="flex flex-col gap-3">
        <h5 className="font-bold text-2xl tracking-tight">
          {title}
        </h5>

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
        <div className="flex items-center gap-2 text-gray-400">
          <Icon icon="material-symbols-light:calendar-month-outline" fontSize={24} fontWeight={400} />

          <span className="tracking-normal">{date}</span>
        </div>
      </div>
    </Card>
  );
}
