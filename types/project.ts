import { PortableTextBlock } from "@portabletext/react";
import { Slug } from "./sanitySchemas";

export type Project = {
    title: string;
    images: Array<string>;
    slug: Slug;
    repo: string;
    preview: string;
    summary: string;
    image: string;
    categories: Array<string>;
    icons: Array<string>;
    license: string;
    status: string;
    publishedAt: string;
    body: PortableTextBlock;
};
