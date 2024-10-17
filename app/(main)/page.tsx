import ContentSection from "@/components/ContentSection";
import SectionContent from "@/components/ContentSection/SectionContent";
import Hero from "@/components/Hero";
import LinkButton from "@/components/LinkButton";
import ProjectSection from "@/components/ProjectSection";
import SkillContainer from "@/components/SkillContainer";
import Timeline from "@/components/Timeline";
import TimePoint from "@/components/Timeline/TimePoint";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>

      <ContentSection id="about">
        <div className="flex-1 grid place-items-center">
          left
        </div>

        <SectionContent
          title="About myself"
          desc="Hey there! i'm shava a software developer whose making
          full-stack web apps and web sites using various languages
          and tools"
        />
      </ContentSection>

      <ContentSection id="skills" centered>
        <SectionContent
          title="Skills" centered
          desc="Here are some of the languages and tools i use to develop software"
        />

        <div className="flex-1 w-full px-12 flex justify-center">
          <SkillContainer></SkillContainer>
        </div>
      </ContentSection>

      <ContentSection id="education" centered>
        <SectionContent
          title="Education" centered
          desc="Here is a brief timeline of what education and anything related to academics that i have achieved"
        />

        <div className="flex-1 grid place-items-center">
          left
        </div>
      </ContentSection>

      <ContentSection id="experience" centered>
        <SectionContent
          title="My Experiences"
          centered
          desc="Here is a list of my experiences, related to software development"
        />

        <div className="flex-1 grid place-items-center">
          left
        </div>
      </ContentSection>

      <ContentSection id="projects" centered>
        <SectionContent
          title="Projects"
          centered
          desc="Here are some of the projects that i have worked on over the years"
        />

        <div className="grid place-items-center">
          <ProjectSection />
        </div>
      </ContentSection>

      <ContentSection id="blog" centered>
        <SectionContent
          title="The Blog"
          centered
          desc="Here's my personal blog where you can see what i'm up to recently"
        />

        <div className="grid place-items-center">
          left
        </div>
      </ContentSection>

      <ContentSection id="contact">
        <SectionContent
          title="Need help with an idea?"
          desc="Let's get in touch!"
        />

        <div className="flex-1 grid place-items-center">
          <LinkButton
            href="/contact"
            icon="arrow_right_alt"
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
