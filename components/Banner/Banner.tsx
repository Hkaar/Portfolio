import Image from "next/image";
import { twMerge } from "tailwind-merge";
import LinkButton from "../LinkButton";
import { Icon } from "@iconify/react";

interface BannerProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
}

export default function Banner({ src, ...props }: BannerProps) {
  return (
    <div
      {...props}
      className={twMerge(
        "h-[80vh] relative grid grid-cols-1 lg:grid-cols-3 bg-base-dark text-base-light",
        props.className,
      )}
    >
      <div className="justify-end px-6 py-12 flex flex-col gap-8 order-2 lg:order-1">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-bold">Seven Books</h1>

          <p className="text-xl leading-relaxed tracking-wide">
            This is my project`s description. This could be like something for a
            project about offload newspapers to bridges in the sky
          </p>
        </div>

        <div className="flex items-center gap-2">
          <LinkButton
            href="#"
            type="tertiary"
            className="border-none"
            icon="material-symbols:collections-bookmark-outline-rounded"
          >
            Repository
          </LinkButton>

          <LinkButton
            href="#"
            type="primary"
            className="border-none"
            icon="mdi:eye-outline"
          >
            Preview
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
            Scroll down for more info
          </span>
        </div>
      </div>

      <div className="relative lg:h-full col-span-2 order-1 lg:order-2">
        <Image
          src={src}
          alt="Image failed to load..."
          height={1080}
          width={1920}
          className="object-cover aspect-video block lg:h-full"
        />

        <div className="absolute z-10 bg-base-dark bg-opacity-5 backdrop-blur top-0 lg:left-0 w-full h-full lg:w-full lg:h-full">
        </div>
      </div>
    </div>
  );
}
