import { twMerge } from "tailwind-merge";

interface ContentSectionProps extends React.HTMLAttributes<HTMLElement> {
  centered?: boolean;
}

export default function ContentSection(
  { centered, ...props }: ContentSectionProps,
) {
  return (
    <section id={props.id} className={twMerge("py-8 md:py-12", props.className)}>
      {centered
        ? (
          <div className="container flex items-center flex-col gap-12">
            {props.children}
          </div>
        )
        : null}

      {!centered
        ? (
          <div className="container flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
            {props.children}
          </div>
        )
        : null}
    </section>
  );
}
