import { Project } from "@/types/project";

import ProjectCard from "@/components/Card/ProjectCard";
import Pagination from "@/components/Pagination";
import SearchBox from "@/components/SearchBox";
import SlideUp from "@/components/Transitions/SlideUp";
import sanityClient from "@/lib/sanity";
import { Suspense } from "react";
import CardLoader from "@/components/Loader/CardLoader";
import ErrorBoundary from "@/components/ErrorBoundary";
import CardFallBack from "@/components/ErrorFallBack/CardFallBack";

interface ProjectPageProps {
  searchParams: Promise<{ page: number; search: string }>;
}

const getProjects = async (start: number, end: number, search?: string) => {
  const searchQuery = search ? `&& title match "*${search}*"` : "";

  const projects: Array<Project> = await sanityClient.fetch(
    `*[_type == "project" ${searchQuery}][${start}..${end}] {
    title,
    slug,
    body,
    summary,
    preview,
    "image": cover.asset->url,
    "categories": categories[0..2]->title,
    "icons": categories[0..2]->icon->icon,
  }`,
  );

  return projects;
};

const getMaxPage = async () => {
  const projectsAmount = await sanityClient.fetch(
    `count(*[_type == "project"])`,
  );
  const amount = Math.round(projectsAmount / 6);

  return amount < 1 ? 1 : amount;
};

export const fetchCache = "force-no-store";

export default async function ProjectPage(props: ProjectPageProps) {
  const searchParams = await props.searchParams;

  const currentPage = Number(searchParams.page);
  const maxPage = await getMaxPage();

  const start = searchParams.page && currentPage != 1
    ? 5 * (currentPage - 1) + 1
    : 0;
  const end = searchParams.page ? 5 * currentPage + 1 : 5;

  const projects = await getProjects(start, end, searchParams.search);

  return (
    <div className="min-h-screen flex">
      <div className="container flex-1 flex flex-col gap-8 py-12">
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

          <SearchBox
            placeholder="Search for a project ..."
            className="w-full lg:w-3/4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <SlideUp delay={1 + (0.2 * i)} key={project.slug.current}>
              <ErrorBoundary fallback={<CardFallBack />}>
                <Suspense fallback={<CardLoader className="w-full" />}>
                  <ProjectCard
                    src={project.image || "https://placehold.co/600x480"}
                    title={project.title}
                    slug={project.slug.current || ""}
                    topics={project.categories}
                    topicIcons={project.icons}
                    previewLink={project.preview}
                  >
                    {project.summary}
                  </ProjectCard>
                </Suspense>
              </ErrorBoundary>
            </SlideUp>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <Pagination
            currentId={searchParams.page ? currentPage : 1}
            className={projects.length <= 0 ? "hidden" : ""}
            href="/projects"
            maxId={maxPage}
          />
        </div>
      </div>
    </div>
  );
}
