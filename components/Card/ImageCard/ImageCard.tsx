import Image from "next/image";
import Card from "..";
import { twMerge } from "tailwind-merge";

interface ImageCardProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
}

export default function ImageCard({ src, ...props }: ImageCardProps) {
  return (
    <Card className={twMerge("p-4 gap-5", props.className)}>
      <Image
        src={src}
        className="block aspect-video object-cover rounded-md border border-neutral-200 dark:border-neutral-800"
        width={640}
        height={480}
        alt="No image was loaded ..."
      />

      {props.children}
    </Card>
  );
}
