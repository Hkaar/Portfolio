import ArticleHeader from "@/components/Article/ArticleHeader";
import Badge from "@/components/Badge";
import LinkButton from "@/components/LinkButton";
import client from "@/lib/client";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { formatDate } from "@/lib/commonUtils";
import ImagePreview from "@/components/ImagePreview";

type Slug = {
  current: string;
  _type: string;
};

type Project = {
  title: string;
  images: Array<string>;
  slug: Slug;
  repo: string;
  preview: string;
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
    repo,
    preview,
    publishedAt,
    "images": images[].asset->url,
    "categories": categories[]->title,
    "icons": categories[]->icon->icon,
  }`,
  );

  if (response === null) return undefined;
  return response;
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const fetchCache = "force-no-store";

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params;
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="container py-4 space-y-4 lg:space-y-6">
        <ArticleHeader>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col lg:flex-row lg:items-end gap-3">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-primary dark:text-primary-dark tracking-tighter flex-1">
                  {project.title}
                </h1>

                <LinkButton
                  href="#"
                  icon="material-symbols:share-outline"
                  className="lg:hidden border-none shadow-none"
                >
                  Share
                </LinkButton>
              </div>

              <div className="flex items-center gap-2 flex-1 lg:justify-end">
                <LinkButton
                  href="#"
                  icon="material-symbols:share-outline"
                  className="hidden lg:flex border-none shadow-none"
                >
                  Share
                </LinkButton>

                <LinkButton
                  href={project.repo || "#"}
                  type="outline-accent"
                  icon="material-symbols:collections-bookmark-outline"
                  target={project.repo ? "_blank" : ""}
                  disabled={project.repo ? false : true}
                >
                  Repository
                </LinkButton>

                <LinkButton
                  href={project.preview || "#"}
                  type="primary"
                  target={project.preview ? "_blank" : ""}
                  icon={project.preview
                    ? "mdi:eye-outline"
                    : "mdi:eye-off-outline"}
                  disabled={project.preview ? false : true}
                >
                  Preview
                </LinkButton>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow-md bg-neutral-100 dark:bg-neutral-900 space-y-5">
            <ImagePreview src={project.images} />
          </div>
        </ArticleHeader>

        <div className="flex w-full gap-8">
          <div className="max-w-[55rem] flex-1 flex flex-col gap-3 md:gap-6 min-h-screen py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {project.categories.map((category, i) => (
                <Badge
                  key={category}
                  icon={project.icons[i] || "material-symbols-light:tag"}
                >
                  <span className="text-sm text-gray-500">{category}</span>
                </Badge>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold">
                About this project
              </h3>

              <div className="text-neutral-400 w-4/5">
                <PortableText value={project.body}></PortableText>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-col gap-6 py-4 hidden">
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold">
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
