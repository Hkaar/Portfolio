interface SectionContentProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  centered?: boolean;
}

export default function SectionContent(
  { title, centered, ...props }: SectionContentProps,
) {
  return (
    <div
      className={`${
        centered ? "text-center items-center" : "text-center lg:text-start"
      } flex-1 flex flex-col gap-5 ${props.className}`}
    >
      <h3 className="font-bold text-2xl md:text-4xl xl:text-5xl">{title}</h3>

      <p className="text-lg md:text-xl text-gray-400 tracking-wide leading-relaxed">
        {props.children}
      </p>
    </div>
  );
}
