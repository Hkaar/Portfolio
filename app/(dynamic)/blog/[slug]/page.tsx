import { Blog } from "@/types/blog";

import Image from "next/image";
import ArticleContainer from "@/components/Article/ArticleContainer";
import ArticleHeader from "@/components/Article/ArticleHeader";
import Profile from "@/components/Profile";
import Badge from "@/components/Badge";
import { Icon } from "@iconify/react";
import client from "@/lib/client";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/commonUtils";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

async function getBlog(slug: string) {
  const response: Blog = await client.fetch(
    `*[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    body,
    "image": mainImage.asset->url,
    "categories": categories[]->title,
    "icons": categories[]->icon->icon,
    "author": author->name,
    "authorImg": author->image.asset->url,
    intro,
    publishedAt  
  }`,
  );

  if (response === null) return undefined;
  return response;
}

export const fetchCache = 'force-no-store';

export default async function BlogPage(props: BlogPageProps) {
  const params = await props.params;
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <ArticleContainer>
        <ArticleHeader>
          <Image
            src={blog.image || "https://placehold.co/600x480"}
            alt="Image failed to load ..."
            width={1920}
            height={1080}
            className="w-full h-96 object-cover"
          />

          <div className="flex items-center gap-2">
            {blog.categories.map((category, i) => (
              <Badge key={category} icon={blog.icons[i] || "material-symbols-light:tag"}>
                <span className="text-sm text-gray-500">{category}</span>
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold tracking-tighter">
              {blog.title}
            </h1>

            <div className="flex items-center gap-2 tracking-wide text-gray-400">
              <Icon
                icon="material-symbols-light:calendar-month-outline"
                fontSize={24}
                fontWeight={400}
              />

              {formatDate(blog.publishedAt)}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Profile
              name="Shava Jaya"
              occupation="Software Engineer"
              src={blog.authorImg || "https://placehold.co/600x480"}
            />
          </div>

          <hr />
        </ArticleHeader>

        <PortableText value={blog.body} />
      </ArticleContainer>
    </>
  );
}
