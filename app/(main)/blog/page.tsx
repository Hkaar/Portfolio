import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { Suspense } from "react";
import BlogCard from "@/components/Card/BlogCard";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex">
      <div className="container flex-1 flex flex-col gap-12 py-12">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-2 text-center items-center">
            <h1 className="text-5xl font-bold">
              My Blog
            </h1>

            <p className="text-lg text-gray-400">
              Here`s my personal blog where you can see what i`m up to recently
            </p>
          </div>

          <div className="flex items-center gap-2 w-3/4">
            <InputField
              className="flex-1"
              placeholder="Search for a blog ..."
            />
            <Button icon="material-symbols-light:search" type="accent">
              Search
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Suspense fallback={<span>Loading</span>}>
            <BlogCard
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topic={{ name: "Laravel", icon: "devicon:laravel" }}
            />
          </Suspense>

          <Suspense fallback={<span>Loading</span>}>
            <BlogCard
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topic={{ name: "Laravel", icon: "devicon:laravel" }}
            />
          </Suspense>

          <Suspense fallback={<span>Loading</span>}>
            <BlogCard
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topic={{ name: "Laravel", icon: "devicon:laravel" }}
            />
          </Suspense>

          <Suspense fallback={<span>Loading</span>}>
            <BlogCard
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topic={{ name: "Laravel", icon: "devicon:laravel" }}
            />
          </Suspense>

          <Suspense fallback={<span>Loading</span>}>
            <BlogCard
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topic={{ name: "Laravel", icon: "devicon:laravel" }}
            />
          </Suspense>

          <Suspense fallback={<span>Loading</span>}>
            <BlogCard
              src="https://placehold.co/600x480"
              title="Storage link not working?"
              slug="storage-link-not-working"
              date="18 October 2024"
              author="Shava Jaya"
              desc="Ever wondered why storage links in a shared hosting environment for laravel don't work correctly?"
              topic={{ name: "Laravel", icon: "devicon:laravel" }}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
