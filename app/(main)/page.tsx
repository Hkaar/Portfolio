import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ContentSection from "@/components/ContentSection";
import SectionContent from "@/components/ContentSection/SectionContent";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import SkillContainer from "@/components/SkillContainer";
import SlideLeft from "@/components/Transitions/SlideLeft";
import SlideRight from "@/components/Transitions/SlideRight";
import client from "@/lib/client";

export default async function HomePage() {
  const skills = await client.fetch(`*[_type == "skill"] | order(name asc) {
    name, 
    "icon": icon->icon, 
    "level": level->name, 
    "category": category->title, 
    description
  }`);

  return (
    <>
      <Hero />

      <SlideLeft>
        <ContentSection id="about">
          <div className="flex-1 grid place-items-center">
            left
          </div>

          <SectionContent title="About myself">
            Hey there! i’m shava a software developer whose making full-stack
            web apps, web sites with various languages and tools.
          </SectionContent>
        </ContentSection>
      </SlideLeft>

      <ContentSection id="skills" centered>
        <SectionContent title="Skills" centered>
          Here are some of the languages and tools i use to develop software
        </SectionContent>

        <div className="flex-1 w-full flex justify-center">
          <SkillContainer skills={skills} />
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

      <SlideLeft>
        <ContentSection id="education" centered>
          <SectionContent
            title="Education"
            centered
            descriptionClassName="w-3/4"
          >
            Here is a brief timeline of what education and anything related to
            academics that i have achieved
          </SectionContent>

          <div className="flex-1 w-full flex justify-center">
            <EducationSection />
          </div>
        </ContentSection>
      </SlideLeft>

      <ContentSection id="blog" centered>
        <SectionContent title="The Blog" centered>
          Here’s my personal blog where you can see what i’m up to recently
        </SectionContent>

        <div className="grid place-items-center">
          <BlogSection />
        </div>
      </ContentSection>

      <ContentSection id="contact">
        <ContactSection />
      </ContentSection>
    </>
  );
}
