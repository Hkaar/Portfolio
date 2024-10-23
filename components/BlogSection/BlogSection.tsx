import { Suspense } from "react";
import BlogCard from "../Card/BlogCard";
import LinkButton from "../LinkButton";
import CardLoader from "../Loader/CardLoader";
import SlideUp from "../Transitions/SlideUp";

export default function BlogSection(
  { ...props }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <div
      className={`${props.className} flex flex-col gap-6 justify-center items-center`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SlideUp>
          <Suspense fallback={<CardLoader />}>
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
        </SlideUp>

        <SlideUp delay={1.4}>
          <Suspense fallback={<CardLoader />}>
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
        </SlideUp>

        <SlideUp delay={1.8}>
          <Suspense fallback={<CardLoader />}>
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
              topic={{ name: "Laravel", icon: "devicon:laravel" }}
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
              topic={{ name: "Laravel", icon: "devicon:laravel" }}
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
              topic={{ name: "Laravel", icon: "devicon:laravel" }}
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
