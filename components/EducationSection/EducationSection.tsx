import { twMerge } from "tailwind-merge";
import { Award, GraduationCap, Trophy } from "lucide-react";

import Timeline from "@/components/Timeline";
import TimePoint from "@/components/Timeline/TimePoint";
import SlideUp from "@/components/Transitions/SlideUp";

export default function EducationSection(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <div
      className={twMerge(
        "shadow-md flex flex-col gap-6 lg:gap-0 lg:flex-row items-center w-full border rounded-md border-gray-200 dark:border-gray-800 h-full",
        props.className,
      )}
    >
      <div className="flex flex-col flex-1 border-r border-gray-200 dark:border-gray-800 w-full lg:w-fit h-full">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 rounded-t-md bg-accent dark:bg-accent-dark text-base-light lg:rounded-tr-none lg:rounded-tl-md">
          <GraduationCap size={24} strokeWidth={1.5} />

          <h6 className="font-bold text-xl">
            Education
          </h6>
        </div>

        <div className="px-8 py-3 flex justify-center flex-1 items-center bg-gray-50 dark:bg-neutral-950">
          <Timeline>
            <SlideUp>
              <TimePoint
                title="SMK TI Bali Global Badung"
                icon=<GraduationCap size={18} strokeWidth={1.5} />
                date="2022 - Present"
                desc="Software Engineering"
              />
            </SlideUp>

            <SlideUp>
              <TimePoint
                title="SMPN 5 Denpasar"
                icon=<GraduationCap size={18} strokeWidth={1.5} />
                date="2019 - 2022"
                desc="General"
              />
            </SlideUp>

            <SlideUp>
              <TimePoint
                title="SDN 8 Padang Sambian"
                icon=<GraduationCap size={18} strokeWidth={1.5} />
                date="2013 - 2019"
                desc="General"
              />
            </SlideUp>
          </Timeline>
        </div>
      </div>

      <div className="flex flex-col h-full flex-1 w-full lg:w-fit">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-accent dark:bg-accent-dark text-base-light lg:rounded-tr-md fr">
          <Trophy size={24} strokeWidth={1.5} />

          <h6 className="font-bold text-xl">
            Awards & Certifications
          </h6>
        </div>

        <div className="px-8 py-3 flex justify-center items-center flex-1 bg-gray-50 dark:bg-neutral-950">
          <Timeline>
            <SlideUp>
              <TimePoint
                title="Axioo Class Program"
                icon=<Award size={18} strokeWidth={1.5} />
                date="February 2023"
                desc="Robot making & design"
              />
            </SlideUp>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
