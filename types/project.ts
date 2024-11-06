import { PortableTextBlock } from "@portabletext/react";
import { Slug } from "./sanitySchemas";
import { Language, Platform } from "./contentUtils";

export type Project = {
    title: string;
    images: Array<string>;
    slug: Slug;
    repo: string;
    preview: string;
    image: string;
    categories: Array<string>;
    icons: Array<string>;
    license: string;
    status: string;
    publishedAt: string;
    body: PortableTextBlock;

    languages?: Language[];
    platforms?: Platform[];

    /**
     * @deprecated Use `body` with portableText instead.
     */
    summary: string;
};
