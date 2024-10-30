import { PortableTextBlock } from "@portabletext/react";
import { Slug } from "./sanitySchemas";

export type Blog = {
    title: string;
    slug: Slug;
    publishedAt: string;
    categories: Array<string>;
    icons: Array<string>;
    author: string;
    authorImg: string;
    image: string;
    intro: string;
    category: string;
    icon: string;
    body: PortableTextBlock;
};
