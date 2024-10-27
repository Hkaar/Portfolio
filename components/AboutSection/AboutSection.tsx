import ContentSection from "../ContentSection";
import Image from "next/image";
import SectionContent from "../ContentSection/SectionContent";
import LoadSpinner from "../Loader/LoadSpinner";

export default function AboutSection(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <div id="about" className="py-12">
      <div className="container flex flex-col items-center md:items-start justify-center lg:justify-start">
        <h3 className="text-center md:text-start lg:hidden font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl w-3/4">
          About me
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gap-8">
          <div className="flex-1 grid place-items-center">
            <Image
              src="/images/cat2.png"
              alt="Image was not loaded..."
              width={1920}
              height={1920}
              className="size-full object-contain aspect-square"
            />
          </div>

          <SectionContent className="lg:gap-6 md:text-start">
            <h3 className="hidden lg:block font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-3/4 text-primary dark:text-primary-dark">
              About me
            </h3>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed border rounded-md border-l-4 border-l-secondary dark:border-l-secondary-dark border-neutral-200 dark:border-neutral-800 px-4 py-3">
              Hey there! I’m{" "}
              <span className="font-bold text-tertiary dark:text-tertiary-dark">
                Shava Jaya
              </span>, a{" "}
              <span className="font-bold text-tertiary dark:text-tertiary-dark">
                full-stack software developer
              </span>{" "}
              from Indonesia.
            </p>

            <p className="text-sm md:text-lg tracking-wide leading-relaxed">
              I enjoy solving complex problems related to software development
              and computer science in general. This is demonstrated by the
              projects I have created to showcase my skills.
            </p>
          </SectionContent>
        </div>
      </div>
    </div>
  );
}
