import { Suspense } from "react";
import BlogCard from "@/components/Card/BlogCard";
import Pagination from "@/components/Pagination/Pagination";
import { PortableTextBlock } from "@portabletext/react";
import client from "@/lib/client";
import SlideUp from "@/components/Transitions/SlideUp";
import CardLoader from "@/components/Loader/CardLoader";
import SearchBox from "@/components/SearchBox";
import { formatDate } from "@/lib/commonUtils";

type Slug = {
  current: string;
  _type: string;
};

type Blog = {
  title: string;
  slug: Slug;
  publishedAt: string;
  category: string;
  icon: string;
  author: string;
  image: string;
  intro: string;
  body: PortableTextBlock;
};

interface BlogPageProps {
  searchParams: Promise<{ page: number; search: string }>;
}

const getPosts = async (start: number, end: number, search?: string) => {
  const searchQuery = search ? `&& title match "*${search}*"` : "";

  const posts: Array<Blog> = await client.fetch(
    `*[_type == "post" ${searchQuery}][${start}..${end}] {
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

const getMaxPage = async () => {
  const projectsAmount = await client.fetch(`count(*[_type == "post"])`);
  const amount = Math.round(projectsAmount / 6);

  return amount < 1 ? 1 : amount;
};

export const fetchCache = "force-no-store";

export default async function BlogPage(props: BlogPageProps) {
  const searchParams = await props.searchParams;

  const currentPage = Number(searchParams.page);
  const maxPage = await getMaxPage();

  const start = searchParams.page && currentPage != 1
    ? 5 * (currentPage - 1) + 1
    : 0;
  const end = searchParams.page ? 5 * currentPage + 1 : 5;

  const posts = await getPosts(start, end, searchParams.search);

  return (
    <div className="min-h-screen flex">
      <div className="container flex-1 flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-2 text-center items-center">
            <h1 className="text-5xl font-bold">
              My Blog
            </h1>

            <p className="text-lg text-gray-400">
              Here`s my personal blog where you can see what i`m up to recently
            </p>
          </div>

          <SearchBox
            placeholder="Search for a blog ..."
            className="w-full lg:w-3/4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-96">
          {posts.map((post, i) => (
            <SlideUp delay={1 + (0.2 * i)} key={post.slug.current}>
              <Suspense fallback={<CardLoader />}>
                <BlogCard
                  src={post.image || "https://placehold.co/600x480"}
                  title={post.title}
                  slug={post.slug.current ? post.slug.current : ""}
                  date={formatDate(post.publishedAt)}
                  author={post.author}
                  desc={post.intro ? post.intro : ""}
                  topic={post.category}
                  topicIcon={post.icon}
                />
              </Suspense>
            </SlideUp>
          ))}
        </div>

        <div className="flex justify-center">
          <Pagination
            href="/blog"
            className={posts.length <= 0 ? 'hidden' : ''}
            currentId={searchParams.page ? currentPage : 1}
            maxId={maxPage}
          />
        </div>
      </div>
    </div>
  );
}
