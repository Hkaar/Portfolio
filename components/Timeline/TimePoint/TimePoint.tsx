import { CalendarRange, Circle } from "lucide-react";

interface TimePoint extends React.HTMLAttributes<HTMLElement> {
  title: string;
  date?: string;
  desc?: string;
  icon?: React.ReactNode;
}

export default function TimePoint(
  { title, date, desc, icon, ...props }: TimePoint,
) {
  return (
    <div className="relative">
      <div className={`${props.className} relative flex flex-col gap-3 ms-6`}>
        <div className="flex flex-col gap-2">
          <h6 className="text-xl font-bold">{title}</h6>

          {desc
            ? (
              <p className="tracking-wide leading-relaxed font-medium">
                {desc}
              </p>
            )
            : null}
        </div>

        {props.children}

        {date
        ? (
          <span className="text-gray-400 tracking-wide leading-snug flex items-center gap-2">
            <CalendarRange size={16} strokeWidth={1.5} /> 
            {date}
          </span>
        )
        : null}
      </div>

      <div className="grid place-items-center absolute top-0 -left-[1.85rem] z-10 border-gray-200 dark:border-gray-800 border bg-gray-50 dark:bg-gray-950 rounded-full p-2">
        {icon || <Circle size={16} strokeWidth={1.5} />}
      </div>
    </div>
  );
}
