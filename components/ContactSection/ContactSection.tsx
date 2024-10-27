import SectionContent from "../ContentSection/SectionContent";
import { Icon } from "@iconify/react";
import ContactForm from "../ContactForm";
import ContactCard from "../Card/ContactCard";
import SlideRight from "../Transitions/SlideRight";
import SlideUp from "../Transitions/SlideUp";

export default function ContactSection() {
  return (
    <>
      <div className="flex flex-col gap-6 flex-1 justify-center">
        <SlideRight>
          <SectionContent className="flex-none">
            <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl w-3/4">
              Need help for your project?
            </h3>

            <span className="mt-3 md:text-lg lg:text-xl text-gray-400 tracking-wide leading-relaxed">
              Let’s talk, and create something together.
            </span>
          </SectionContent>
        </SlideRight>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SlideUp>
            <ContactCard
              title="Email"
              icon="material-symbols-light:mail-outline"
            >
              shavashava42@gmail.com
            </ContactCard>
          </SlideUp>

          <SlideUp delay={1.4}>
            <ContactCard title="Phone number" icon="mdi-light:phone">
              +62 81237102017
            </ContactCard>
          </SlideUp>

          <SlideUp delay={1.6}>
            <ContactCard title="Twitter / X" icon="logos:x">
              @Hkaar5
            </ContactCard>
          </SlideUp>

          <SlideUp delay={1.8}>
            <ContactCard title="Github" icon="devicon:github">
              Hkaar
            </ContactCard>
          </SlideUp>
        </div>
      </div>

      <SlideUp className="flex-1 w-full h-full grid place-items-center">
        <div className="flex-1 w-full px-8 py-6 border border-gray-200 dark:border-gray-800 rounded-md shadow-md flex flex-col gap-7">
          <div className="flex items-center gap-2">
            <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary dark:text-secondary-dark">
              Send me a message
            </h6>

            <Icon
              icon="fa:send-o"
              className="text-accent"
              fontSize={24}
              fontWeight={400}
            >
            </Icon>
          </div>

          <ContactForm className="border-none shadow-none px-0 py-0 w-full" />
        </div>
      </SlideUp>
    </>
  );
}
