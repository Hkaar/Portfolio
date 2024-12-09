import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import Badge from "@/components/Badge";
import Card from "..";
import { twMerge } from "tailwind-merge";

interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  title: string;
  slug?: string;
  topics: Array<string>;
  topicIcons: Array<string>;
  previewLink?: string;
}

export default function ProjectCard(
  { src, topics, topicIcons, slug, title, previewLink, ...props }: ProjectCardProps,
) {
  return (
    <Card className={twMerge("p-4 gap-5 rounded-lg border-gray-200 dark:border-neutral-700 shadow-none hover:shadow-xl transition-all duration-300 ease-in-out", props.className)}>
      <Image
        src={src}
        className="block aspect-video object-cover rounded-md border border-neutral-200 dark:border-neutral-800"
        width={640}
        height={480}
        alt="No image was loaded ..."
      />

      <div className="flex flex-col gap-4 flex-1 justify-center">
        {topics
          ? (
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {topics.map((item, i) => (
                <Badge key={item} icon={topicIcons[i] || "material-symbols-light:tag"}>
                  <span className="text-sm text-neutral-400">{item}</span>
                </Badge>
              ))}
            </div>
          )
          : null}

        <div className="flex flex-col gap-3">
          <h6 className="font-bold text-3xl tracking-tight">{title}</h6>

          <div className="text-gray-400 line-clamp-3 tracking-wide leading-relaxed">
            {props.children}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <LinkButton
            href={slug ? `/projects/${slug}` : "#"}
            icon="material-symbols:info-outline"
            type="info"
            disabled={slug ? false : true}
          >
            Details
          </LinkButton>

          <LinkButton
            href={previewLink || ""}
            icon="material-symbols:chevron-right"
            rightIcon
            type="tertiary"
            disabled={previewLink ? false : true}
          >
            Preview
          </LinkButton>
        </div>
      </div>
    </Card>
  );
}
