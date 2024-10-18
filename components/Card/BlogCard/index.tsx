import Badge from "@/components/Badge";
import ImageCard from "@/components/Card/ImageCard"
import LinkButton from "@/components/LinkButton";
import { Icon } from "@iconify/react";
import Image from "next/image";

type Topic = {
  name: string;
  icon?: string;
};

interface BlogCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  topic: Topic
  src: string
  slug: string
  date: string
  desc: string
  author: string
}

export default function BlogCard(
  {title, topic, src, slug, date, desc, author, ...props}: BlogCardProps
) {
  return (
    <ImageCard src={src} className={props.className}>
      <div className="flex justify-between gap-3 items-center">
        <Badge icon={topic.icon ? topic.icon : 'material-symbols-light:tag'}>
          {topic.name}
        </Badge>

        <div className="flex items-center gap-2 text-gray-400">
          <Icon icon="material-symbols-light:calendar-month-outline" fontSize={24} fontWeight={400} />

          <span className="tracking-normal">{date}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h6 className="font-bold text-2xl tracking-tight">{title}</h6>

        <span className="text-gray-400 tracking-wide line-clamp-3">
          {desc}
        </span>
      </div>

      <LinkButton href={`/blog/${slug}`} type="accent" icon="material-symbols-light:chevron-right" rightIcon>
        Read More
      </LinkButton>

      <div className="flex items-center gap-3">
        <Image
          src="https://placehold.co/600x480"
          className="block aspect-square size-12 object-cover rounded-full"
          width={640}
          height={480}
          alt="No image was loaded ..."
        />

        <span className="text-accent tracking-wide">
          {author}
        </span>
      </div>
    </ImageCard>
  )
}