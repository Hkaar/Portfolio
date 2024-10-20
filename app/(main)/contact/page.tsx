import SectionContent from "@/components/ContentSection/SectionContent";
import { Icon } from "@iconify/react";
import ContactForm from "@/components/ContactForm";
import IconCard from "@/components/Card/IconCard";

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="container flex-1 flex justify-between gap-12 py-12">
          <div className="flex flex-col gap-5 flex-1 justify-center">
            <SectionContent title="Need help for your project?" className="flex-none">
              Let’s talk, and create something together.
            </SectionContent>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <IconCard icon="material-symbols-light:mail-outline">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Email</span>
                  <span className="font-semibold text-lg">
                    shavashava42@gmail.com
                  </span>
                </div>
              </IconCard>

              <IconCard icon="mdi-light:phone">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Phone</span>
                  <span className="font-semibold text-lg">+62 81237102017</span>
                </div>
              </IconCard>

              <IconCard icon="logos:x">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Twitter / X</span>
                  <span className="font-semibold text-lg">@Hkaar5</span>
                </div>
              </IconCard>

              <IconCard icon="devicon:github">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Github</span>
                  <span className="font-semibold text-lg">Hkaar</span>
                </div>
              </IconCard>
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
