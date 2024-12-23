import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ContentSection from "@/components/ContentSection";
import SectionContent from "@/components/ContentSection/SectionContent";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import BlogSectionSkeleton from "@/components/Skeletons/CardSectionSkeleton";
import SkillContainer from "@/components/SkillContainer";
import SlideUp from "@/components/Transitions/SlideUp";
import sanityClient from "@/lib/sanity";
import { Suspense } from "react";

const getSkills = async () => {
  const skills = await sanityClient.fetch(
    `*[_type == "skill"] | order(name asc) {
    name, 
    "icon": icon->icon, 
    "level": level->name, 
    "category": category->title, 
    description
  }`,
  );

  return skills;
};

export const fetchCache = "force-no-store";

export default async function HomePage() {
  const skills = await getSkills();

  return (
    <>
      <Hero />

      <AboutSection />

      <ContentSection id="skills" centered>
        <SectionContent title="Skills" centered>
          <span className="text-sm lg:text-base text-gray-400 dark:text-neutral-600 tracking-wide leading-relaxed">
            Here are some of the languages and tools i use to develop software
          </span>
        </SectionContent>

        <div className="flex-1 w-full flex justify-center">
          <SkillContainer skills={skills} />
        </div>
      </ContentSection>

      <ContentSection id="experience" centered>
        <SectionContent title="Experiences" centered>
          <span className="text-sm lg:text-base text-gray-400 dark:text-neutral-600 tracking-wide leading-relaxed">
            Here is a list of my experiences, related to software development
          </span>
        </SectionContent>

        <div className="flex-1 grid place-items-center w-full">
          <SlideUp>
            <ExperienceSection />
          </SlideUp>
        </div>
      </ContentSection>

      <ContentSection id="projects" centered>
        <SectionContent title="Projects" centered>
          <span className="text-sm lg:text-base text-gray-400 dark:text-neutral-600 tracking-wide leading-relaxed">
            Here are some of the projects that i have worked on over the years
          </span>
        </SectionContent>

        <div className="grid place-items-center">
          <ProjectSection />
        </div>
      </ContentSection>

      <ContentSection id="education" centered>
        <SectionContent
          title="Education"
          centered
        >
          <span className="text-sm lg:text-base text-gray-400 dark:text-neutral-600 tracking-wide leading-relaxed w-3/4">
            Here is a brief timeline of what education and anything related to
            academics that i have achieved
          </span>
        </SectionContent>

        <div className="flex-1 w-full flex justify-center">
          <SlideUp>
            <EducationSection />
          </SlideUp>
        </div>
      </ContentSection>

      <ContentSection id="blog" centered>
        <SectionContent title="My Blog" centered>
          <span className="text-sm lg:text-base text-gray-400 dark:text-neutral-600 tracking-wide leading-relaxed">
            Here’s my personal blog where you can see what i’m up to recently
          </span>
        </SectionContent>

        <div className="grid place-items-center">
          <Suspense fallback={<BlogSectionSkeleton />}>
            <BlogSection />
          </Suspense>
        </div>
      </ContentSection>

      <ContentSection id="contact">
        <ContactSection />
      </ContentSection>
    </>
  );
}
