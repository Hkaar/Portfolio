import { Blog } from "@/types/blog";

import { Suspense } from "react";
import BlogCard from "../Card/BlogCard";
import LinkButton from "../LinkButton";
import CardLoader from "../Loader/CardLoader";
import SlideUp from "../Transitions/SlideUp";
import sanityClient from "@/lib/sanity";

const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
};

const getPosts = async () => {
  const posts: Array<Blog> = await sanityClient.fetch(`*[_type == "post"][0..5] {
    title,
    slug,
    body,
    "image": mainImage.asset->url,
    "category": categories[0]->title,
    "icon": categories[0]->icon->icon,
    "author": author->name,
    intro,
    publishedAt  
  }`);
  
  return posts;
};

export default async function BlogSection(
  props: React.HTMLAttributes<HTMLElement>,
) {
  const posts = await getPosts();

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col gap-6 justify-center items-center`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, i) => (
          <SlideUp delay={1 + (0.2 * i)} key={post.slug.current}>
            <Suspense fallback={<CardLoader />}>
              <BlogCard
                src={post.image || "https://placehold.co/600x480"}
                title={post.title}
                slug={post.slug.current ? post.slug.current : ""}
                date={formatDate(post.publishedAt)}
                author={post.author}
                desc={post.intro ? post.intro : ''}
                topic={post.category}
                topicIcon={post.icon}
              />
            </Suspense>
          </SlideUp>
        ))}
      </div>

      <LinkButton
        href="/blog"
        type="secondary"
        icon="material-symbols:arrow-right-alt"
        rightIcon
      >
        See more
      </LinkButton>
    </div>
  );
}
