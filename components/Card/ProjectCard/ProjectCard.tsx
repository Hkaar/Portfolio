import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { ArrowUpRight, Info } from "lucide-react";

import LinkButton from "@/components/LinkButton";
import Badge from "@/components/Badge";
import Card from "@/components/Card";

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
    <Card className={twMerge("p-4 gap-5 rounded-xl border bg-gray-50 dark:bg-neutral-950 border-gray-200 dark:border-neutral-700 shadow-md hover:-translate-y-3 transition-all duration-300 ease-in-out h-full", props.className)}>
      <Image
        src={src}
        className="block aspect-video object-cover rounded-md border border-neutral-200 dark:border-neutral-800"
        width={640}
        height={480}
        alt="No image was loaded ..."
      />

      <div className="flex flex-col gap-3 flex-1 justify-center">
        {topics
          ? (
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {topics.map((item, i) => (
                <Badge key={item} icon={topicIcons[i] || "material-symbols-light:tag"}>
                  <span className="text-xs md:text-sm text-gray-400 dark:text-neutral-500">{item}</span>
                </Badge>
              ))}
            </div>
          )
          : null}

        <div className="flex flex-col gap-3 flex-1">
          <h6 className="font-bold text-3xl tracking-tight">{title}</h6>

          <div className="text-gray-400 line-clamp-3 tracking-wide leading-relaxed">
            {props.children}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <LinkButton
            href={slug ? `/projects/${slug}` : "#"}
            variant="info"
            disabled={slug ? false : true}
          >
            <Info size={18} strokeWidth={1.5} />
            Details
          </LinkButton>

          <LinkButton
            href={previewLink || ""}
            disabled={previewLink ? false : true}
            className="bg-accent dark:bg-accent-dark text-body-light dark:text-text-dark"
          >
            Preview
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </LinkButton>
        </div>
      </div>
    </Card>
  );
}
