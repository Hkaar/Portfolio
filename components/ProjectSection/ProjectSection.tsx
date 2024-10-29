import { Project } from "@/types/project";

import LinkButton from "../LinkButton";
import ProjectCard from "../Card/ProjectCard";
import SlideUp from "../Transitions/SlideUp";
import sanityClient from "@/lib/sanity";

const getProjects = async () => {
  const projects: Array<Project> = await sanityClient.fetch(
    `*[_type == "project"][0..5] {
    title,
    slug,
    body,
    summary,
    preview,
    "image": cover.asset->url,
    "categories": categories[0..2]->title,
    "icons": categories[0..2]->icon->icon,
  }`);

  return projects;
}

export default async function ProjectSection() {
  const projects = await getProjects();
  
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <SlideUp delay={1 + (0.2 * i)} key={project.slug.current}>
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
          </SlideUp>
        ))}
      </div>

      <LinkButton
        href="/projects"
        type="tertiary"
        icon="material-symbols:arrow-right-alt"
        rightIcon
      >
        See more
      </LinkButton>
    </div>
  );
}
