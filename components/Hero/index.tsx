import { Icon } from "@iconify/react";
import LinkButton from "../LinkButton";

export default function Hero() {
    return (
        <section className="min-h-screen flex">
            <div className="container flex-1 flex justify-between gap-6 items-center">
                <div className="flex flex-col gap-10 flex-1">
                    <div className="flex flex-col gap-9">
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-3xl text-gray-400 tracking-wide">
                                Hey, I'm Shava Jaya
                            </h4>

                            <p className="font-bold text-6xl tracking-tight leading-snug">
                                I'm a developer who designs and makes web apps
                                and web sites
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <LinkButton href="/" type="primary" icon="download">
                                Download CV
                            </LinkButton>

                            <LinkButton
                                href="/contact"
                                icon="arrow_right_alt"
                                rightIcon={true}
                                type="secondary"
                            >
                                Get in touch
                            </LinkButton>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
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

                <div className="flex-1 grid place-items-center">
                    Image
                </div>
            </div>
        </section>
    );
}
