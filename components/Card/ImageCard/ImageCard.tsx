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
        className="block aspect-video object-cover rounded-md"
        width={640}
        height={480}
        alt="No image was loaded ..."
      />

      <div className="flex flex-col gap-3 flex-1 justify-center">
        {props.children}
      </div>
    </Card>
  );
}
