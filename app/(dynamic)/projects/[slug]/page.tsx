import ArticleHeader from "@/components/Article/ArticleHeader";
import Badge from "@/components/Badge";
import LinkButton from "@/components/LinkButton";
import client from "@/lib/client";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import { Icon } from "@iconify/react/dist/iconify.js";
import { formatDate } from "@/lib/commonUtils";

type Slug = {
  current: string;
  _type: string;
};

type Project = {
  title: string;
  image: string;
  images: Array<string>;
  slug: Slug;
  summary: string;
  categories: Array<string>;
  icons: Array<string>;
  publishedAt: string;
  body: PortableTextBlock;
};

async function getProject(slug: string) {
  const response: Project = await client.fetch(
    `*[_type == "project" && slug.current == "${slug}"][0] {
    title,
    slug,
    body,
    summary,
    publishedAt,
    "image": cover.asset->url,
    "images": images[].asset->url,
    "categories": categories[]->title,
    "icons": categories[]->icon->icon,
  }`);

  if (response === null) return undefined;
  return response;
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const fetchCache = 'force-no-store';

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params;
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="container py-4">
        <ArticleHeader>
          <div className="flex flex-col gap-3">
            <div className="flex items-end">
              <h1 className="text-6xl font-bold text-primary dark:text-primary-dark tracking-tighter flex-1">
                {project.title}
              </h1>

              <div className="flex items-center gap-2 flex-1 justify-end">
                <LinkButton
                  href="#"
                  icon="material-symbols:share-outline"
                  className="border-none shadow-none"
                >
                  Share
                </LinkButton>

                <LinkButton
                  href="#"
                  type="outline-accent"
                  icon="material-symbols:collections-bookmark-outline"
                >
                  Repository
                </LinkButton>

                <LinkButton href="#" type="primary" icon="mdi:eye-outline">
                  Preview
                </LinkButton>
              </div>
            </div>
          </div>

          <Image
            src={project.image || "https://placehold.co/600x480"}
            alt="No Image available"
            width={1920}
            height={1080}
            className="w-full h-[35rem] object-cover rounded-md"
          />
        </ArticleHeader>

        <div className="flex w-full gap-8">
          <div className="max-w-[55rem] flex-1 flex flex-col gap-6 min-h-screen py-4">
            <ImageCarousel src={project.images} />

            <div className="grid grid-cols-6 gap-2">
              {project.categories.map((category, i) => (
                <Badge key={category} icon={project.icons[i]}>
                  <span className="text-sm text-gray-500">{category}</span>
                </Badge>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-bold">
                About {project.title}
              </h3>

              <div className="tracking-wide leading-relaxed w-3/4">
                <PortableText value={project.body}></PortableText>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 py-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-bold">
                More info
              </h3>

              <div className="flex flex-col gap-2 text-gray-400 dark:text-gray-500 leading-relaxed">
                <span className="flex items-center gap-2">
                  <Icon icon="mdi:calendar-month-outline" fontSize={24} />

                  {formatDate(project.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
