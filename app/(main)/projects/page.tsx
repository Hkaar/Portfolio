import Button from "@/components/Button";
import ProjectCard from "@/components/Card/ProjectCard";
import InputField from "@/components/InputField";
import Pagination from "@/components/Pagination";
import { Suspense } from "react";

interface ProjectPageProps {
  searchParams: Promise<{page: number}>
}

export default async function ProjectPage(props: ProjectPageProps) {
  const searchParams = await props.searchParams;

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
            <InputField className="flex-1" placeholder="Search for a project ..." />
            <Button icon="material-symbols-light:search" type="accent">
              Search
            </Button>
          </div>
        </div>

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
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
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
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
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
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </Suspense>

          <Suspense fallback={<span>Loading..</span>}>
            <ProjectCard
              src="https://placehold.co/600x480"
              title="Betutu"
              topics={[
                { name: "Python", icon: "python" },
                { name: "FastAPI", icon: "fastapi" },
              ]}
            >
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </Suspense>

          <Suspense fallback={<span>Loading..</span>}>
            <ProjectCard
              src="https://placehold.co/600x480"
              title="UjianOnline"
              topics={[
                { name: "Laravel", icon: "laravel" },
                { name: "Tailwind CSS", icon: "tailwindcss" },
              ]}
            >
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </Suspense>

          <Suspense fallback={<span>Loading..</span>}>
            <ProjectCard
              src="https://placehold.co/600x480"
              title="My Portfolio"
              topics={[
                { name: "Next.js", icon: "nextjs" },
                { name: "Tailwind CSS", icon: "tailwindcss" },
              ]}
            >
              This is my project`s description. This could be like something for
              a project about offload newspapers to bridges in the sky
            </ProjectCard>
          </Suspense>
        </div>

        <div className="flex justify-center w-full">
          <Pagination currentId={searchParams.page ? Number(searchParams.page) : 1} query href="/projects" maxId={10} />
        </div>
      </div>
    </div>
  );
}
