import { Suspense } from "react";
import LinkButton from "../LinkButton";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Suspense fallback={<span>Loading..</span>}>
          <ProjectCard src="https://placehold.co/600x480"></ProjectCard>
        </Suspense>

        <Suspense fallback={<span>Loading..</span>}>
          <ProjectCard src="https://placehold.co/600x480"></ProjectCard>
        </Suspense>

        <Suspense fallback={<span>Loading..</span>}>
          <ProjectCard src="https://placehold.co/600x480"></ProjectCard>
        </Suspense>
      </div>

      <LinkButton href="/projects" type="accent" icon="arrow_right_alt" rightIcon>
        See more
      </LinkButton>
    </div>
  )
}