import { Project } from "@/types/project";

import ArticleHeader from "@/components/Article/ArticleHeader";
import Badge from "@/components/Badge";
import sanityClient from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { formatDate } from "@/lib/commonUtils";
import ImagePreview from "@/components/ImagePreview";
import Table from "@/components/Table";
import TableRow from "@/components/Table/TableRow";
import TableCell from "@/components/Table/TableCell";
import ProjectHeader from "@/components/ProjectHeader";
import ProgressBar from "@/components/ProgressBar";
import ProgressItem from "@/components/ProgressBar/ProgressItem";
import { twMerge } from "tailwind-merge";

async function getProject(slug: string) {
  const response: Project = await sanityClient.fetch(
    `*[_type == "project" && slug.current == "${slug}"][0] {
    title,
    body,
    repo,
    preview,
    publishedAt,
    "license": license->name,
    "status": status->name,
    "images": images[].asset->url,
    "categories": categories[]->title,
    "icons": categories[]->icon->icon,
    "languages": languages[]{
      "name": language->name,
      "color": language->color,
      percentage
    },
    "platforms": platforms[]{
      "name": platform->name,
      "icon": platform->icon->icon,
      "status": status->name,
      "statusIcon": status->icon->icon,
      "statusColor": status->color
    }
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

  const host = process.env.APP_HOST || "localhost:3000";

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="container py-4 space-y-4 lg:space-y-6">
        <ArticleHeader>
          <ProjectHeader project={project} host={host} />

          <div className="space-y-5">
            <ImagePreview src={project.images} />
          </div>
        </ArticleHeader>

        <div className="grid grid-cols-6 gap-12">
          <div className="col-span-4 flex flex-col gap-3 md:gap-6 min-h-screen py-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold">
                About this project
              </h3>

              <div className="text-neutral-400">
                <PortableText value={project.body}></PortableText>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold">
                Supported platforms
              </h3>

              <Table headings={[{ name: "Platforms" }, { name: "Status" }]}>
                {project.platforms?.map((platform, i) => (
                  <TableRow key={platform.name}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Icon
                          icon={platform.icon}
                          fontSize={24}
                          fontWeight={400}
                        />
                        {platform.name}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2" style={{color: platform.statusColor || "#a1a1aa"}}>
                        <Icon
                          icon={platform.statusIcon || "mdi:close"}
                          fontSize={24}
                          fontWeight={400}
                        />
                        {platform.status || "Unknown"}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </div>
          </div>

          <div className="lg:flex flex-col gap-6 h-fit col-span-2 hidden">
            <div className="space-y-3">
              <h5 className="text-xl font-semibold">
                More info
              </h5>

              <div className="space-y-3 leading-relaxed">
                <span className="flex items-center gap-3">
                  <Icon
                    icon="mdi:calendar-month-outline"
                    fontSize={24}
                    fontWeight={400}
                  />

                  {formatDate(project.publishedAt)}
                </span>

                <span className="flex items-center gap-3">
                  <Icon icon="octicon:law-24" fontSize={24} fontWeight={400} />

                  {project.license}
                </span>

                <span className="flex items-center gap-3">
                  <Icon
                    icon="pajamas:status-health"
                    fontSize={24}
                    fontWeight={400}
                  />

                  {project.status}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="text-xl font-semibold">
                Categories
              </h5>

              <div className="text-neutral-400">
                <div className="flex flex-wrap items-center gap-2">
                  {project.categories.map((category, i) => (
                    <Badge
                      key={category}
                      icon={project.icons[i] || "material-symbols-light:tag"}
                      className="px-3 py-2"
                    >
                      <span className="text-sm text-gray-500">{category}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="text-xl font-semibold">
                Languages
              </h5>

              <ProgressBar className="p-0">
                {project.languages?.map((language, i) => (
                  <ProgressItem
                    style={{ backgroundColor: language.color }}
                    key={`${language}${i}`}
                    value={language.percentage || 0}
                    className="p-1"
                  />
                ))}
              </ProgressBar>

              <ul className="grid grid-cols-2 list-disc list-d px-4">
                {project.languages?.map((language, i) => (
                  <li
                    style={{ color: language.color }}
                    key={`text-${language}${i}`}
                  >
                    {language.name} {language.percentage}%
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
