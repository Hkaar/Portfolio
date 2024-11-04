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

async function getProject(slug: string) {
  const response: Project = await sanityClient.fetch(
    `*[_type == "project" && slug.current == "${slug}"][0] {
    title,
    slug,
    body,
    summary,
    repo,
    preview,
    publishedAt,
    "license": license->name,
    "status": status->name,
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
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="devicon:windows11"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Windows
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2 text-success">
                      <Icon
                        icon="material-symbols:check"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Supported
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="devicon:apple"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Mac OS
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2 text-warning">
                      <Icon
                        icon="material-symbols:warning"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Untested
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="devicon:linux"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Linux
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2 text-warning">
                      <Icon
                        icon="material-symbols:warning"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Partial Support
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="material-symbols:globe"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Web
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2 text-success">
                      <Icon
                        icon="material-symbols:check"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Supported
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="devicon:android"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Android
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2 text-danger">
                      <Icon
                        icon="material-symbols:error"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Not Supported
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="devicon:apple"
                        fontSize={24}
                        fontWeight={400}
                      />
                      IOS
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2 text-danger">
                      <Icon
                        icon="material-symbols:error"
                        fontSize={24}
                        fontWeight={400}
                      />
                      Not Supported
                    </div>
                  </TableCell>
                </TableRow>
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
                <ProgressItem value={25} className="bg-black" />
                <ProgressItem value={25} className="bg-blue-500" />
                <ProgressItem value={10} className="bg-red-300" />
                <ProgressItem value={35} className="bg-green-800" />
                <ProgressItem value={5} className="bg-orange-600" />
              </ProgressBar>

              <ul className="grid grid-cols-2 list-disc list-d px-4">
                <li>Markdown 25.0%</li>
                <li className="text-blue-500">TypeScript 25.0%</li>
                <li className="text-red-300">Mako 10.0%</li>
                <li className="text-green-800">HTML5 35.0%</li>
                <li className="text-orange-600">Java 5.0%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
