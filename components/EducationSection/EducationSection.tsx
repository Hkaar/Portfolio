import { Icon } from "@iconify/react";
import Timeline from "../Timeline";
import TimePoint from "../Timeline/TimePoint";
import SlideUp from "../Transitions/SlideUp";

export default function EducationSection(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <div
      className={`${props.className} shadow-md flex flex-col gap-6 lg:gap-0 lg:flex-row items-center w-full border rounded-md border-gray-200 dark:border-gray-800 h-full`}
    >
      <div className="flex flex-col gap-3 flex-1 border-r border-gray-200 dark:border-gray-800 w-full lg:w-fit h-full">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 rounded-t-md bg-tertiary dark:bg-tertiary-dark text-base-light dark:text-base-dark lg:rounded-tr-none lg:rounded-tl-md">
          <Icon
            icon="material-symbols-light:school-outline"
            fontSize={32}
            fontWeight={300}
          >
          </Icon>

          <h6 className="font-bold text-xl">
            Education
          </h6>
        </div>

        <div className="px-8 py-3 flex justify-center flex-1 items-center">
          <Timeline>
            <SlideUp>
              <TimePoint
                title="SMK TI Bali Global Badung"
                icon="material-symbols-light:school-outline"
                date="2022 - Present"
                desc="Software Engineering"
              />
            </SlideUp>

            <SlideUp>
              <TimePoint
                title="SMPN 5 Denpasar"
                icon="material-symbols-light:school-outline"
                date="2019 - 2022"
                desc="General"
              />
            </SlideUp>

            <SlideUp>
              <TimePoint
                title="SDN 8 Padang Sambian"
                icon="material-symbols-light:school-outline"
                date="2013 - 2019"
                desc="General"
              />
            </SlideUp>
          </Timeline>
        </div>
      </div>

      <div className="flex flex-col gap-3 h-full flex-1 w-full lg:w-fit">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-tertiary dark:bg-tertiary-dark text-base-light dark:text-base-dark lg:rounded-tr-md fr">
          <Icon
            icon="material-symbols-light:trophy-outline"
            fontSize={32}
            fontWeight={300}
          >
          </Icon>

          <h6 className="font-bold text-xl">
            Awards & Certifications
          </h6>
        </div>

        <div className="px-8 py-3 flex justify-center items-center flex-1">
          <Timeline>
            <SlideUp>
              <TimePoint
                title="Axioo Class Program"
                icon="mdi:certificate-outline"
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
