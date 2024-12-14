import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { CalendarRange, ArrowUpRight} from "lucide-react";

import Badge from "@/components/Badge";
import ImageCard from "@/components/Card/ImageCard";
import LinkButton from "@/components/LinkButton";

interface BlogCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  topic: string;
  topicIcon: string;
  src: string;
  slug: string;
  date: string;
  desc: string;
  author: string;
  authorImage?: string;
}

export default function BlogCard(
  {
    title,
    topic,
    topicIcon,
    src,
    slug,
    date,
    desc,
    author,
    authorImage,
    ...props
  }: BlogCardProps,
) {
  return (
    <ImageCard
      src={src}
      className={twMerge(
        "gap-5 rounded-xl border bg-gray-50 dark:bg-neutral-950 border-gray-200 dark:border-neutral-700 shadow-md hover:-translate-y-3 transition-all duration-300 ease-in-out",
        props.className,
      )}
    >
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <Badge
            icon={topicIcon ? topicIcon : "material-symbols-light:tag"}
          >
            <span className="text-sm text-neutral-400">{topic}</span>
          </Badge>

          <div className="flex items-center gap-2 text-gray-400">
            <CalendarRange size={18} strokeWidth={1.5} />

            <span className="tracking-normal text-sm">{date}</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h6 className="font-extrabold text-2xl tracking-tight">{title}</h6>

            <span className="tracking-wide line-clamp-3 text-gray-400 dark:text-neutral-600">
              {desc}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <LinkButton
              href={`/blog/${slug}`}
              variant="accent"
              className="text-body-light dark:text-text-dark"
            >
              Read more
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </LinkButton>

            <div className="flex items-center gap-3">
              <Image
                src={authorImage || "https://placehold.co/600x480"}
                className="block aspect-square size-8 object-cover rounded-full"
                width={640}
                height={480}
                alt="No image was loaded ..."
              />

              <span className="text-accent font-medium">
                {author}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ImageCard>
  );
}
