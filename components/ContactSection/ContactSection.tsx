import SectionContent from "@/components/ContentSection/SectionContent";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/Card/ContactCard";
import SlideRight from "@/components/Transitions/SlideRight";
import SlideUp from "@/components/Transitions/SlideUp";

import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <>
      <div className="flex flex-col gap-6 flex-1 justify-center">
        <SlideRight>
          <SectionContent className="flex-none">
            <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Need help for your project?
            </h3>

            <span className="mt-3 text-sm md:text-base text-gray-400 dark:text-neutral-600 tracking-wide leading-relaxed">
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
        <div className="flex-1 w-full px-8 py-6 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-950 rounded-md shadow-md flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-tertiary dark:text-tertiary-dark">
              Send me a message
            </h6>

            <Send size={32} strokeWidth={2} className="text-secondary dark:text-secondary-dark" />
          </div>

          <ContactForm className="border-none shadow-none px-0 py-0 w-full" />
        </div>
      </SlideUp>
    </>
  );
}
