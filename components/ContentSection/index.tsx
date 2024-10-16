interface ContentSectionProps extends React.HTMLAttributes<HTMLElement> {
  centered?: boolean;
}

export default function ContentSection(
  { centered, ...props }: ContentSectionProps,
) {
  return (
    <section id={props.id} className="py-12">
      {centered
        ? (
          <div
            className={`${props.className} container flex items-center flex-col gap-12`}
          >
            {props.children}
          </div>
        )
        : null}

      {!centered
        ? (
          <div
            className={`${props.className} container flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12`}
          >
            {props.children}
          </div>
        )
        : null}
    </section>
  );
}
