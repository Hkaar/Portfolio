import { Icon } from "@iconify/react";

interface SkillCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  title: string;
}

export default function SkillCard({ icon, title, ...props }: SkillCardProps) {
  return (
    <div className={`${props.className} flex flex-col items-center justify-center gap-3 p-6 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-base-dark text-center`}>
      <Icon icon={icon} fontSize={48} fontWeight={300} className="dark:fill-base-dark"></Icon>

      <span className="font-semibold">{title}</span>
    </div>
  );
}
