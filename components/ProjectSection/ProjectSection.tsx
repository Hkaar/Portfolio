import { Suspense } from "react";
import LinkButton from "../LinkButton";
import ProjectCard from "../Card/ProjectCard";

export default function ProjectSection() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={<span>Loading..</span>}>
          <ProjectCard
            src="https://placehold.co/600x480"
            title="SevenBooks"
            topics={[
              { name: "Laravel", icon: "laravel" },
              { name: "Bootstrap", icon: "bootstrap" },
              { name: "MySQL", icon: "mysql" },
            ]}
          >
            This is my project`s description. This could be like something for a
            project about offload newspapers to bridges in the sky
          </ProjectCard>
        </Suspense>

        <Suspense fallback={<span>Loading..</span>}>
          <ProjectCard
            src="https://placehold.co/600x480"
            title="SiPandu"
            topics={[
              { name: "Laravel", icon: "laravel" },
              { name: "MySQL", icon: "mysql" },
              { name: "Bootstrap", icon: "bootstrap" },
            ]}
          >
            This is my project`s description. This could be like something for a
            project about offload newspapers to bridges in the sky
          </ProjectCard>
        </Suspense>

        <Suspense fallback={<span>Loading..</span>}>
          <ProjectCard
            src="https://placehold.co/600x480"
            title="Zahlen"
            topics={[
              { name: "Python", icon: "python" },
              { name: "NumPy", icon: "numpy" },
            ]}
          >
            This is my project`s description. This could be like something for a
            project about offload newspapers to bridges in the sky
          </ProjectCard>
        </Suspense>

        <Suspense fallback={<span>Loading..</span>}>
          <ProjectCard className="hidden lg:flex"
            src="https://placehold.co/600x480"
            title="Betutu"
            topics={[
              { name: "Python", icon: "python" },
              { name: "FastAPI", icon: "fastapi" },
            ]}
          >
            This is my project`s description. This could be like something for a
            project about offload newspapers to bridges in the sky
          </ProjectCard>
        </Suspense>

        <Suspense fallback={<span>Loading..</span>}>
          <ProjectCard className="hidden lg:flex"
            src="https://placehold.co/600x480"
            title="UjianOnline"
            topics={[
              { name: "Laravel", icon: "laravel" },
              { name: "Tailwind CSS", icon: "tailwindcss" },
            ]}
          >
            This is my project`s description. This could be like something for a
            project about offload newspapers to bridges in the sky
          </ProjectCard>
        </Suspense>

        <Suspense fallback={<span>Loading..</span>}>
          <ProjectCard className="hidden lg:flex"
            src="https://placehold.co/600x480"
            title="My Portfolio"
            topics={[
              { name: "Next.js", icon: "nextjs" },
              { name: "Tailwind CSS", icon: "tailwindcss" },
            ]}
          >
            This is my project`s description. This could be like something for a
            project about offload newspapers to bridges in the sky
          </ProjectCard>
        </Suspense>
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
