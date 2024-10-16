interface SectionContentProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  desc: string;
  centered?: boolean;
}

export default function SectionContent(
  { title, desc, centered, ...props }: SectionContentProps,
) {
  return (
    <div
      className={`${
        centered ? "text-center items-center" : "text-center lg:text-start"
      } flex-1 flex flex-col gap-8`}
    >
      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-2xl md:text-4xl xl:text-5xl">{title}</h3>

        <p className="md:text-lg xl:text-xl text-gray-400 tracking-wide leading-relaxed">
          {desc}
        </p>
      </div>

      {props.children}
    </div>
  );
}
