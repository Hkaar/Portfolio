import BlogSection from "@/components/BlogSection";
import ContentSection from "@/components/ContentSection";
import SectionContent from "@/components/ContentSection/SectionContent";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import LinkButton from "@/components/LinkButton";
import ProjectSection from "@/components/ProjectSection";
import SkillContainer from "@/components/SkillContainer";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ContentSection id="about">
        <div className="flex-1 grid place-items-center">
          left
        </div>

        <SectionContent title="About myself">
          Hey there! i'm shava a software developer whose making
          full-stack web apps, web sites with various languages 
          and tools.
        </SectionContent>
      </ContentSection>

      <ContentSection id="skills" centered>
        <SectionContent title="Skills" centered>
          Here are some of the languages and tools i use to develop software
        </SectionContent>

        <div className="flex-1 w-full flex justify-center">
          <SkillContainer />
        </div>
      </ContentSection>

      <ContentSection id="experience" centered>
        <SectionContent title="My Experiences" centered>
            Here is a list of my experiences, related to software development
          </SectionContent>

        <div className="flex-1 grid place-items-center w-full">
          <ExperienceSection />
        </div>
      </ContentSection>

      <ContentSection id="projects" centered>
        <SectionContent title="Projects" centered>
          Here are some of the projects that i have worked on over the years
        </SectionContent>

        <div className="grid place-items-center">
          <ProjectSection />
        </div>
      </ContentSection>

      <ContentSection id="education" centered>
        <SectionContent title="Education" centered>
          Here is a brief timeline of what education and anything related to academics that i have achieved
        </SectionContent>

        <div className="flex-1 w-full flex justify-center">
          <EducationSection />
        </div>
      </ContentSection>

      <ContentSection id="blog" centered>
        <SectionContent title="The Blog" centered>
          Here's my personal blog where you can see what i'm up to recently
        </SectionContent>

        <div className="grid place-items-center">
          <BlogSection />
        </div>
      </ContentSection>

      <ContentSection id="contact">
        <SectionContent title="Need help with an idea?">
          Let's get in touch!
        </SectionContent>

        <div className="flex-1 grid place-items-center">
          <LinkButton
            href="/contact"
            icon="material-symbols-light:keyboard-double-arrow-right"
            className="px-6 py-4"
            type="primary"
            rightIcon
          >
            Work with me
          </LinkButton>
        </div>
      </ContentSection>
    </>
  );
}
