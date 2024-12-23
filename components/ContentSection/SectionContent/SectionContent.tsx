import { twMerge } from "tailwind-merge";

interface SectionContentProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  centered?: boolean;
}

export default function SectionContent(
  { title, centered, ...props }: SectionContentProps,
) {
  return (
    <div
      className={twMerge(
        "flex-1 flex flex-col gap-2 md:gap-3",
        centered
          ? "text-center items-center"
          : "text-center lg:text-start items-center lg:items-start",
        props.className,
      )}
    >
      {title
        ? (
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-3/4">
            {title}
          </h3>
        )
        : null}

      {props.children}
    </div>
  );
}
