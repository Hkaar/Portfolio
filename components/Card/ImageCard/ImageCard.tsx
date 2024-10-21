import Image from "next/image";
import Card from "..";

interface ImageCardProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
}

export default function ImageCard({ src, ...props }: ImageCardProps) {
  return (
    <Card className={props.className}>
      <Image
        src={src}
        className="block aspect-video object-cover rounded-t-md"
        width={640}
        height={480}
        alt="No image was loaded ..."
      />

      <div className="flex flex-col gap-5 px-4 py-6 flex-1 justify-center">
        {props.children}
      </div>
    </Card>
  );
}
