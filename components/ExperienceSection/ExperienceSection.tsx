import JobCard from "../Card/JobCard";

export default function ExperienceSection(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <div
      className={`${props.className} flex justify-center gap-4 w-full`}
    >
      <JobCard
        className="w-full lg:w-1/2"
        title="PT. Taksu Teknologi Indonesia"
        job="Internship"
        date="October 2024 - Present"
        desc="Still ongoing internship process"
        link="https://www.taksu.tech"
        topics={[
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
        ]}
      />
    </div>
  );
}
