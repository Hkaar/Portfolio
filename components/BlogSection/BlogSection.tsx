import { Suspense } from "react";
import BlogCard from "../Card/BlogCard";
import LinkButton from "../LinkButton";
import CardLoader from "../Loader/CardLoader";
import SlideUp from "../Transitions/SlideUp";
import client from "@/lib/client";

type Slug = {
  current: string;
  _type: string;
};

type Post = {
  title: string;
  slug: Slug;
  publishedAt: string;
  categories: Array<string>;
  icons: Array<string>;
  author: string;
  image: string;
  intro: string;
  body: Object;
};

const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
};

export default async function BlogSection(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  const posts: Array<Post> = await client.fetch(`*[_type == "post"][0..5] {
    title,
    slug,
    body,
    "categories": categories[0..1]->title,
    "icons": categories[0..1]->icon->icon,
    "author": author->name,
    intro,
    publishedAt  
  }`);

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
                src="https://placehold.co/600x480"
                title={post.title}
                slug={post.slug.current ? post.slug.current : ""}
                date={formatDate(post.publishedAt)}
                author={post.author}
                desc={post.intro ? post.intro : ''}
                topics={post.categories}
                topicIcons={post.icons}
              />
            </Suspense>
          </SlideUp>
        ))}

        <SlideUp delay={1.8}>
          <Suspense fallback={<CardLoader />}>
            <BlogCard
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topics={["Laravel"]}
              topicIcons={["devicon:laravel"]}
            />
          </Suspense>
        </SlideUp>

        <SlideUp>
          <Suspense fallback={<CardLoader />}>
            <BlogCard
              className="hidden lg:flex"
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topics={["Laravel"]}
              topicIcons={["devicon:laravel"]}
            />
          </Suspense>
        </SlideUp>

        <SlideUp delay={1.4}>
          <Suspense fallback={<CardLoader />}>
            <BlogCard
              className="hidden lg:flex"
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topics={["Laravel"]}
              topicIcons={["devicon:laravel"]}
            />
          </Suspense>
        </SlideUp>

        <SlideUp delay={1.8}>
          <Suspense fallback={<CardLoader />}>
            <BlogCard
              className="hidden lg:flex"
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topics={["Laravel"]}
              topicIcons={["devicon:laravel"]}
            />
          </Suspense>
        </SlideUp>
      </div>

      <LinkButton
        href="/blog"
        type="tertiary"
        icon="material-symbols-light:arrow-right-alt"
        rightIcon
      >
        See more blogs
      </LinkButton>
    </div>
  );
}
