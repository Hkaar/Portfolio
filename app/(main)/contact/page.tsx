import SectionContent from "@/components/ContentSection/SectionContent";
import { Icon } from "@iconify/react";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/Card/ContactCard";

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="container flex-1 flex flex-col items-center lg:flex-row justify-between gap-12 py-12">
          <div className="flex flex-col gap-5 flex-1 justify-center">
            <SectionContent
              title="Need help for your project?"
              className="flex-none"
            >
              Let’s talk, and create something together.
            </SectionContent>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <ContactCard
                title="Email"
                icon="material-symbols-light:mail-outline"
              >
                shavashava42@gmail.com
              </ContactCard>

              <ContactCard title="Phone number" icon="mdi-light:phone">
                +62 81237102017
              </ContactCard>

              <ContactCard title="Twitter / X" icon="logos:x">
                @Hkaar5
              </ContactCard>

              <ContactCard title="Github" icon="devicon:github">
                Hkaar
              </ContactCard>
            </div>
          </div>

          <div className="flex-1 grid place-items-center">
            <div className="px-8 py-6 border border-gray-200 dark:border-gray-800 rounded-md shadow-md flex flex-col gap-7">
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

              <ContactForm className="border-none shadow-none px-0 py-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
