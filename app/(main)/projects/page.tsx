import { Project } from "@/types/project";
import { Category } from "@/types/contentUtils";

import ProjectCard from "@/components/Card/ProjectCard";
import Pagination from "@/components/Pagination";
import SlideUp from "@/components/Transitions/SlideUp";
import { Suspense } from "react";
import CardLoader from "@/components/Loader/CardLoader";
import ErrorBoundary from "@/components/ErrorBoundary";
import CardFallBack from "@/components/ErrorFallBack/CardFallBack";
import { PortableText } from "@portabletext/react";
import Search from "@/components/Search";

import sanityClient from "@/lib/sanity";

import { getEndIndex, getMaxPage, getStartIndex } from "@/utils/pagination";

interface ProjectPageProps {
  searchParams: Promise<{ page: number; search: string; categories?: string }>;
}

const getProjects = async (
  start: number,
  end: number,
  search?: string,
  categories?: string[],
) => {
  const searchQuery = search ? `&& title match "*${search}*"` : "";

  const categoryQuery = categories && categories[0] !== ''
    ? `&& count((categories[]->title)[@ in [${
      categories.map((category) => `"${category}"`)
    }]]) == ${categories.length}`
    : "";

  const query =
    `*[_type == "project" ${searchQuery} ${categoryQuery}][${start}..${end}] {
    title,
    slug,
    body,
    preview,
    "image": cover.asset->url,
    "categories": categories[0..2]->title,
    "icons": categories[0..2]->icon->icon,
  }`;

  const projects: Array<Project> = await sanityClient.fetch(query);

  return projects;
};

const getCategories = async () => {
  const query = `*[_type == "category"] {
    title,
    "icon": icon->icon,
  }`;

  const categories: Category[] = await sanityClient.fetch(query);

  return categories;
};

export const fetchCache = "force-no-store";

export default async function ProjectPage(props: ProjectPageProps) {
  const searchParams = await props.searchParams;

  const totalProjects = await sanityClient.fetch(`count(*[_type == "project"])`);

  const currentPage = Number(searchParams.page);
  const maxPage = getMaxPage(totalProjects, 5);
  
  const start = getStartIndex(5, currentPage);
  const end = getEndIndex(5, currentPage);

  const projects = await getProjects(
    start,
    end,
    searchParams.search,
    searchParams.categories?.split("-"),
  );
  const categories = await getCategories();

  return (
    <div className="min-h-screen flex">
      <div className="container flex-1 flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-2 text-center items-center">
            <h1 className="text-5xl font-bold">
              My Projects
            </h1>

            <p className="text-lg text-gray-400">
              Here are some of the projects that i have worked on as a software
              developer
            </p>
          </div>

          <Search  placeholder="Search for a project ..." categories={categories} />
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
                    <PortableText value={project.body} />
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
