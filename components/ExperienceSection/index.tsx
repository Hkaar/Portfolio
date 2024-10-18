import JobCard from "../Card/JobCard";

interface ExperienceSectionProps extends React.HTMLAttributes<HTMLElement> {}

export default function ExperienceSection(
  { ...props }: ExperienceSectionProps,
) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <JobCard
        className="w-full"
        title="PT. Taksu Teknologi Indonesia"
        job="Internship"
        date="October 2024 - Present"
        desc="Still ongoing internship process"
        topics={[
          { name: 'Next.js', icon: "nextjs" },
          { name: 'Tailwind CSS', icon: "tailwindcss" },
        ]}
      >
      </JobCard>
    </div>
  );
}
