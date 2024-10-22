import JobCard from "../Card/JobCard";
import SlideLeft from "../Transitions/SlideLeft";
import SlideRight from "../Transitions/SlideRight";

export default function ExperienceSection(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <div
      className={`${props.className} grid grid-cols-1 md:grid-cols-2 gap-4 w-full`}
    >
      <SlideRight>
        <JobCard
          className="w-full"
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
      </SlideRight>

      <SlideLeft>
        <JobCard
          className="flex-1"
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
      </SlideLeft>
    </div>
  );
}
