import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LinkButton from "@/components/LinkButton";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>

      <section id="about" className="py-12">
        <div className="container flex items-center justify-between gap-6">
          <div className="flex-1 grid place-items-center">
            left
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-5xl">About myself</h3>

                <p className="text-xl text-gray-400 tracking-wide leading-relaxed">
                  Hey there! i'm shava a software developer whose making
                  full-stack web apps and web sites using various languages
                  and tools
                </p>
              </div>

              <LinkButton href="#" icon="arrow_right_alt" type="accent" rightIcon={true}>
                See more
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center justify-between gap-8">
            <div className="flex flex-col gap-5 text-center">
              <h3 className="font-bold text-5xl">What do i use?</h3>

              <p className="text-xl text-gray-400 tracking-wide leading-relaxed">
                Here are some of the languages and tools i use to
                develop software
              </p>
            </div>

          <div className="grid place-items-center">
            left
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container flex items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-5xl">Education</h3>

                <p className="text-xl text-gray-400 tracking-wide leading-relaxed">
                  See what kind of education i have so far
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 grid place-items-center">
            left
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center justify-between gap-8">
            <div className="flex flex-col gap-5 text-center">
              <h3 className="font-bold text-5xl">My Experiences</h3>

              <p className="text-xl text-gray-400 tracking-wide leading-relaxed">
                Here is a list of my experiences, related to
                software development
              </p>
            </div>

          <div className="grid place-items-center">
            left
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center justify-between gap-8">
            <div className="flex flex-col gap-5 text-center">
              <h3 className="font-bold text-5xl">Projects</h3>

              <p className="text-xl text-gray-400 tracking-wide leading-relaxed">
                Here are some of the projects that i have worked on
                over the years
              </p>
            </div>

          <div className="grid place-items-center">
            left
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center justify-between gap-8">
            <div className="flex flex-col gap-5 text-center">
              <h3 className="font-bold text-5xl">The Blog</h3>

              <p className="text-xl text-gray-400 tracking-wide leading-relaxed">
                Here's my personal blog where you can see what i'm up to
              </p>
            </div>

          <div className="grid place-items-center">
            left
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container flex items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-5xl">Intrested?</h3>

                <p className="text-xl text-gray-400 tracking-wide leading-relaxed">
                  You can contact me by using the contact form
                  alongside this, or just email or message me
                  at the socials below
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">

              </div>
            </div>
          </div>

          <div className="flex-1 grid place-items-center">
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>
    </>
  );
}