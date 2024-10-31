import Image from "next/image";
import SectionContent from "../ContentSection/SectionContent";
import { twMerge } from "tailwind-merge";
import SlideUp from "../Transitions/SlideUp";
import SlideDown from "../Transitions/SlideDown";
import SlideRight from "../Transitions/SlideRight";

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
                src="/images/cat2.png"
                alt="Image was not loaded..."
                width={1920}
                height={1920}
                className="size-full object-contain aspect-square"
              />
            </SlideUp>
          </div>

          <SectionContent className="lg:gap-6 text-center lg:text-start">
            <SlideDown delay={1.6}>
              <h3 className="hidden lg:block font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-3/4 text-primary-700 dark:text-primary-100">
                About me
              </h3>
            </SlideDown>

            <SlideRight delay={1.4}>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed border rounded-md border-l-4 border-l-tertiary dark:border-l-tertiary-dark border-neutral-200 dark:border-neutral-800 px-4 py-3">
                Hey there! I’m{" "}
                <span className="font-bold text-tertiary dark:text-tertiary-dark">
                  Shava Jaya
                </span>, a{" "}
                <span className="font-bold text-tertiary dark:text-tertiary-dark">
                  full-stack software developer
                </span>{" "}
                from Indonesia.
              </p>
            </SlideRight>

            <SlideUp delay={1.8}>
              <p className="text-sm md:text-lg tracking-wide leading-relaxed">
                I enjoy solving complex problems related to software development
                and computer science in general. This is demonstrated by the
                projects I have created to showcase my skills.
              </p>
            </SlideUp>
          </SectionContent>
        </div>
      </div>
    </div>
  );
}
