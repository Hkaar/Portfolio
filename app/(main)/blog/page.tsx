import { Blog } from "@/types/blog";
import { Category } from "@/types/contentUtils";

import { Suspense } from "react";
import BlogCard from "@/components/Card/BlogCard";
import Pagination from "@/components/Pagination/Pagination";
import SlideUp from "@/components/Transitions/SlideUp";
import CardLoader from "@/components/Loader/CardLoader";
import ErrorBoundary from "@/components/ErrorBoundary";
import CardFallBack from "@/components/ErrorFallBack/CardFallBack";
import Search from "@/components/Search";

import sanityClient from "@/lib/sanity";

import { formatBlogDate } from "@/utils/time";
import { getEndIndex, getMaxPage, getStartIndex } from "@/utils/pagination";

interface BlogPageProps {
  searchParams: Promise<{ page: number; search: string, categories?: string }>;
}

const getPosts = async (start: number, end: number, search?: string, categories? : string[]) => {
  const searchQuery = search ? `&& title match "*${search}*"` : "";
  const categoryQuery = categories && categories[0] !== ''
    ? `&& count((categories[]->title)[@ in [${
      categories.map((category) => `"${category}"`)
    }]]) == ${categories.length}`
    : "";


  const query = `*[_type == "post" ${searchQuery} ${categoryQuery}][${start}..${end}] {
    title,
    slug,
    body,
    "image": mainImage.asset->url,
    "category": categories[0]->title,
    "icon": categories[0]->icon->icon,
    "author": author->name,
    "authorImg": author->image.asset->url,
    intro,
    publishedAt  
  }`;

  const posts: Array<Blog> = await sanityClient.fetch(query);

  return posts;
};

const getCategories = async () => {
  const query = `*[_type == "category"] {
    title,
    "icon": icon->icon,
  }`;

  const categories: Category[] = await sanityClient.fetch(query);

  return categories;
};

export const fetchCache = "force-no-store";

export default async function BlogPage(props: BlogPageProps) {
  const searchParams = await props.searchParams;

  const totalPosts = await sanityClient.fetch(`count(*[_type == "post"])`);

  const currentPage = Number(searchParams.page);
  const maxPage = getMaxPage(totalPosts, 5);

  const start = getStartIndex(5, currentPage);
  const end = getEndIndex(5, currentPage)

  const posts = await getPosts(start, end, searchParams.search, searchParams.categories?.split("-"),);
  const categories = await getCategories();

  return (
    <main className="min-h-screen flex">
      <div className="container flex-1 flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-2 text-center items-center">
            <h1 className="text-5xl font-bold">
              My Blog
            </h1>

            <p className="text-sm lg:text-base text-gray-400 dark:text-neutral-500">
              Here`s my personal blog where you can see what i`m up to recently
            </p>
          </div>

          <Search placeholder="Search for a blog ..." categories={categories} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {posts.map((post, i) => (
            <SlideUp delay={1 + (0.2 * i)} key={post.slug.current}>
              <ErrorBoundary fallback={<CardFallBack />}>
                <Suspense fallback={<CardLoader className="w-full" />}>
                  <BlogCard
                    src={post.image || "https://placehold.co/600x480"}
                    title={post.title}
                    slug={post.slug.current ? post.slug.current : ""}
                    date={formatBlogDate(post.publishedAt)}
                    author={post.author}
                    authorImage={post.authorImg}
                    desc={post.intro ? post.intro : ""}
                    topic={post.category}
                    topicIcon={post.icon}
                  />
                </Suspense>
              </ErrorBoundary>
            </SlideUp>
          ))}
        </div>

        <div className="flex justify-center">
          <Pagination
            href="/blog"
            className={posts.length <= 0 ? "hidden" : ""}
            currentId={searchParams.page ? currentPage : 1}
            maxId={maxPage}
          />
        </div>
      </div>
    </main>
  );
}
