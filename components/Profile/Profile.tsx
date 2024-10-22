import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ProfileProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  name: string;
  occupation?: string;
}

export default function Profile(
  { src, name, occupation, ...props }: ProfileProps,
) {
  return (
    <div {...props} className={twMerge("flex items-center gap-3", props.className)}>
      <Image
        src={src}
        alt="No Image available"
        width={640}
        height={480}
        className="size-12 rounded-full object-cover"
      />

      <div className="flex flex-col gap-1 tracking-wide">
        <span className="font-semibold">
          {name}
        </span>

        <span className="text-gray-400">
          {occupation}
        </span>
      </div>

      {props.children}
    </div>
  );
}
