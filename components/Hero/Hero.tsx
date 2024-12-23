import { Download, ArrowUpRight, ArrowDown } from 'lucide-react';
import Image from "next/image";

import LinkButton from "@/components/LinkButton";
import SlideDown from "@/components/Transitions/SlideDown";
import SlideRight from "@/components/Transitions/SlideRight";
import SlideUp from "@/components/Transitions/SlideUp";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex">
      <div className="container flex-1 flex text-center lg:text-start flex-col-reverse lg:flex-row justify-between gap-6 items-center">
        <div className="flex flex-col h-full justify-center items-center lg:items-start gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col gap-3">
            <SlideDown>
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-400 tracking-wide">
                Hey, I’m Shava Jaya
              </h1>
            </SlideDown>

            <SlideRight delay={1.4}>
              <p className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                I’m a developer who designs and makes web apps and web sites
              </p>
            </SlideRight>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center lg:justify-start items-center gap-2 w-full">
            <SlideUp delay={1.6} className="w-fit">
              <LinkButton
                target="_blank"
                className="w-full md:w-fit justify-center gap-3"
                href="https://drive.google.com/uc?export=download&id=1vE1oHvbLALgxjM6YkxE5zSMnil4E4At2"
                variant="primary"
              >
                <Download size={20} strokeWidth={1.5} />
                Download CV
              </LinkButton>
            </SlideUp>

            <SlideUp delay={2} className="w-fit">
              <LinkButton
                className="w-full md:w-fit justify-center bg-gray-100 dark:bg-neutral-900 gap-3"
                href="/contact"
              >
                Get in touch
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </LinkButton>
            </SlideUp>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <ArrowDown size={24} strokeWidth={1.5} className="animate-float-down" />

            <span className="font-semibold">
              Scroll down for more
            </span>
          </div>
        </div>

        <div className="hidden lg:grid flex-1 place-items-center">
          <Image
            priority
            src="/images/cat-food.svg"
            alt="No image was available..."
            width={1920}
            height={1920}
            className="size-11/12 object-contain aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
