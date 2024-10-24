import { Suspense } from "react";
import LinkButton from "../LinkButton";
import ProjectCard from "../Card/ProjectCard";
import CardLoader from "../Loader/CardLoader";
import SlideUp from "../Transitions/SlideUp";
import client from "@/lib/client";
import { PortableTextBlock } from "@portabletext/react";

type Slug = {
  current: string;
  _type: string;
};

type Project = {
  title: string;
  image: string;
  slug: Slug;
  categories: Array<string>;
  icons: Array<string>;
  publishedAt: string;
  body: PortableTextBlock;
};

const getProjects = async () => {
  const projects: Array<Project> = await client.fetch(
    `*[_type == "project"][0..5] {
    title,
    slug,
    body,
    "image": image.asset->url,
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
              title="SevenBooks"
              slug={project.slug.current || ""}
              topics={project.categories}
              topicIcons={project.icons}
            >
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </SlideUp>
        ))}

        <SlideUp delay={1.4}>
          <Suspense fallback={<CardLoader />}>
            <ProjectCard
              src="https://placehold.co/600x480"
              title="SiPandu"
              topics={["Laravel", "Bootstrap"]}
              topicIcons={["devicon:laravel", "devicon:bootstrap"]}
            >
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </Suspense>
        </SlideUp>

        <SlideUp delay={1.8}>
          <Suspense fallback={<CardLoader />}>
            <ProjectCard
              src="https://placehold.co/600x480"
              title="Zahlen"
              topics={["Python", "Numpy"]}
              topicIcons={["devicon:python", "devicon:numpy"]}
            >
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </Suspense>
        </SlideUp>

        <SlideUp>
          <Suspense fallback={<CardLoader />}>
            <ProjectCard
              className="hidden lg:flex"
              src="https://placehold.co/600x480"
              title="Betutu"
              topics={["Python", "FastAPI"]}
              topicIcons={["devicon:python", "devicon:fastapi"]}
            >
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </Suspense>
        </SlideUp>

        <SlideUp delay={1.4}>
          <Suspense fallback={<CardLoader />}>
            <ProjectCard
              className="hidden lg:flex"
              src="https://placehold.co/600x480"
              title="UjianOnline"
              topics={["Laravel", "Tailwind CSS"]}
              topicIcons={["devicon:laravel", "devicon:tailwindcss"]}
            >
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </Suspense>
        </SlideUp>

        <SlideUp delay={1.8}>
          <Suspense fallback={<CardLoader />}>
            <ProjectCard
              className="hidden lg:flex"
              src="https://placehold.co/600x480"
              title="My Portfolio"
              topics={["Next.JS", "Tailwind CSS"]}
              topicIcons={["devicon:nextjs", "devicon:tailwindcss"]}
            >
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </Suspense>
        </SlideUp>
      </div>

      <LinkButton
        href="/projects"
        type="tertiary"
        icon="material-symbols-light:arrow-right-alt"
        rightIcon
      >
        See more
      </LinkButton>
    </div>
  );
}
