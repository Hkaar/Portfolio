import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import Badge from "@/components/Badge";
import Card from "..";

type Topic = {
  icon: string
  name: string
}

interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  title: string;
  topics?: Array<Topic>
  previewLink?: string;
}

export default function ProjectCard(
  { src, topics, title, previewLink, ...props }: ProjectCardProps,
) {
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
        {topics 
          ? (
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {topics.map((item) => (<Badge key={item.name} icon={`devicon:${item.icon}`}>{item.name}</Badge>))}
            </div>
          )
          : null}

        <div className="flex flex-col gap-3">
          <h6 className="font-bold text-2xl">{title}</h6>

          <p className="text-gray-400 line-clamp-3">
            {props.children}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <LinkButton href="#" icon="material-symbols-light:info-outline" type="info">
            Details
          </LinkButton>

          <LinkButton
            href={previewLink || ""}
            icon="material-symbols-light:chevron-right"
            rightIcon
            type="accent"
            disabled={previewLink ? false : true}
          >
            Preview
          </LinkButton>
        </div>
      </div>
    </Card>
  );
}
