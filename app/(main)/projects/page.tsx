import Button from "@/components/Button";
import ProjectCard from "@/components/Card/ProjectCard";
import InputField from "@/components/InputField";
import CardLoader from "@/components/Loader/CardLoader";
import Pagination from "@/components/Pagination";
import SlideUp from "@/components/Transitions/SlideUp";
import client from "@/lib/client";
import { PortableTextBlock } from "@portabletext/react";
import { Suspense } from "react";

type Slug = {
  current: string;
  _type: string;
};

type Project = {
  title: string;
  image: string;
  slug: Slug;
  categories: Array<string>;
  summary: string;
  icons: Array<string>;
  publishedAt: string;
  body: PortableTextBlock;
};

interface ProjectPageProps {
  searchParams: Promise<{ page: number }>;
}

const getProjects = async (start: number, end: number) => {
  const projects: Array<Project> = await client.fetch(
    `*[_type == "project"][${start}..${end}] {
    title,
    slug,
    body,
    summary,
    "image": cover.asset->url,
    "categories": categories[0..2]->title,
    "icons": categories[0..2]->icon->icon,
  }`,
  );

  return projects;
};

const getMaxPage = async () => {
  const amount = await client.fetch(`count(*[_type == "project"])`);

  return Math.round(amount / 5) + 1;
};

export default async function ProjectPage(props: ProjectPageProps) {
  const searchParams = await props.searchParams;

  const currentPage = Number(searchParams.page);
  const maxPage = await getMaxPage();

  const start = searchParams.page && currentPage != 1
    ? 4 * (currentPage - 1) + 1
    : 0;
  const end = searchParams.page ? 4 * currentPage + 1 : 4;

  const projects = await getProjects(start, end);

  return (
    <div className="min-h-screen flex">
      <div className="container flex-1 flex flex-col gap-12 py-12">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-2 text-center items-center">
            <h1 className="text-5xl font-bold">
              My Projects
            </h1>

            <p className="text-lg text-gray-400">
              Here are some of the projects that i have worked on as a software
              developer
            </p>
          </div>

          <div className="flex items-center gap-2 w-3/4">
            <InputField
              className="flex-1"
              placeholder="Search for a project ..."
            />
            <Button icon="material-symbols-light:search" type="accent">
              Search
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <SlideUp delay={1+(0.2*i)} key={project.slug.current}>
              <ProjectCard
                src={project.image || "https://placehold.co/600x480"}
                title="SevenBooks"
                slug={project.slug.current || ""}
                topics={project.categories}
                topicIcons={project.icons}
              >
                {project.summary}
              </ProjectCard>
            </SlideUp>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <Pagination
            currentId={searchParams.page ? currentPage : 1}
            query
            href="/projects"
            maxId={maxPage}
          />
        </div>
      </div>
    </div>
  );
}
