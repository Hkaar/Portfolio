import { Project } from "@/types/project";

import { Suspense } from "react";

import { ArrowRight } from "lucide-react";
import { PortableText } from "@portabletext/react";

import LinkButton from "@/components/LinkButton";
import ProjectCard from "@/components/Card/ProjectCard";
import SlideUp from "@/components/Transitions/SlideUp";
import CardLoader from "@/components/Loader/CardLoader";
import ErrorBoundary from "@/components/ErrorBoundary";
import CardFallBack from "@/components/ErrorFallBack/CardFallBack";

import sanityClient from "@/lib/sanity";

const getProjects = async () => {
  const projects: Array<Project> = await sanityClient.fetch(
    `*[_type == "project"][0..5] {
    title,
    slug,
    body,
    preview,
    "image": cover.asset->url,
    "categories": categories[0..2]->title,
    "icons": categories[0..2]->icon->icon,
  }`,
  );

  return projects;
};

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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

      <LinkButton
        href="/projects"
        variant="secondary"
      >
        See more
        <ArrowRight size={18} strokeWidth={1.5} />
      </LinkButton>
    </div>
  );
}
