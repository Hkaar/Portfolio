import { twMerge } from "tailwind-merge";

interface SectionContentProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  centered?: boolean;
  descriptionClassName?: string;
}

export default function SectionContent(
  { title, centered, descriptionClassName, ...props }: SectionContentProps,
) {
  return (
    <div
      className={twMerge(
        "flex-1 flex flex-col gap-2 md:gap-3",
        centered ? "text-center items-center" : "text-center lg:text-start items-center lg:items-start",
        props.className,
      )}
    >
      <h3 className="font-bold text-3xl md:text-4xl xl:text-5xl w-3/4">
        {title}
      </h3>

      <div
        className={twMerge("md:text-lg lg:text-xl text-gray-400 tracking-wide leading-relaxed", descriptionClassName)}
      >
        {props.children}
      </div>
    </div>
  );
}
