import { Icon } from "@iconify/react";
import LinkButton from "../LinkButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex">
      <div className="container flex-1 flex text-center lg:text-start flex-col-reverse lg:flex-row justify-between gap-6 items-center">
        <div className="flex flex-col h-full justify-center items-center lg:items-start gap-6 lg:gap-10 flex-1">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-400 tracking-wide">
              Hey, I’m Shava Jaya
            </h4>

            <p className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-6xl tracking-tight leading-snug">
              I’m a developer who designs and makes web apps and web sites
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center items-center gap-2 w-full lg:w-fit">
            <LinkButton target="_blank"
              className="w-full md:w-fit justify-center"
              href="https://drive.google.com/uc?export=download&id=1vE1oHvbLALgxjM6YkxE5zSMnil4E4At2"
              type="primary"
              icon="material-symbols-light:download"
            >
              Download CV
            </LinkButton>

            <LinkButton
              className="w-full md:w-fit justify-center"
              href="/contact"
              icon="material-symbols-light:arrow-right-alt"
              rightIcon={true}
              type="secondary"
            >
              Get in touch
            </LinkButton>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Icon
              icon="mdi-light:arrow-down"
              className="animate-float-down"
              fontSize={40}
              fontWeight={300}
            >
            </Icon>

            <span className="font-semibold">
              Scroll down for more
            </span>
          </div>
        </div>

        <div className="hidden lg:grid flex-1 place-items-center">
          Image
        </div>
      </div>
    </section>
  );
}
