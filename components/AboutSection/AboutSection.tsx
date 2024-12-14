import { twMerge } from "tailwind-merge";

import Image from "next/image";

import SectionContent from "@/components/ContentSection/SectionContent";
import SlideUp from "@/components/Transitions/SlideUp";
import SlideDown from "@/components/Transitions/SlideDown";
import SlideRight from "@/components/Transitions/SlideRight";

export default function AboutSection(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <div id="about" className={twMerge("py-12", props.className)}>
      <div className="container flex flex-col items-center md:items-start justify-center lg:justify-start">
        <h3 className="text-center md:text-start lg:hidden font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl w-3/4">
          About me
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gap-8">
          <div className="flex-1 grid place-items-center">
            <SlideUp>
              <Image
                priority
                src="/images/cat-bed.svg"
                alt="Image was not loaded..."
                width={1920}
                height={1920}
                className="size-3/4 object-contain aspect-square"
              />
            </SlideUp>
          </div>

          <SectionContent className="lg:gap-6 text-center lg:text-start">
            <SlideDown delay={1.6}>
              <span className="flex items-center gap-2">
                <h3 className="hidden lg:block font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-3/4 text-primary-700 dark:text-primary-100">
                  About me
                </h3>
              </span>
            </SlideDown>

            <SlideRight delay={2}>
              <div className="flex flex-col gap-3 border border-l-[6px] border-l-accent dark:border-l-accent-dark border-gray-200 dark:border-neutral-800 px-6 py-5 shadow rounded-md">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                  Hey there! I’m{" "}
                  <span className="font-bold text-accent dark:text-accent-dark">
                    Shava Jaya
                  </span>, a{" "}
                  <span className="font-bold text-accent dark:text-accent-dark">
                    full-stack software developer
                  </span>{" "}
                  from Indonesia.
                </p>

                <p className="text-sm md:text-base">
                  I enjoy solving complex problems related to software
                  development and computer science in general. This is
                  demonstrated by the projects I have created to showcase my
                  skills.
                </p>
              </div>
            </SlideRight>
          </SectionContent>
        </div>
      </div>
    </div>
  );
}
