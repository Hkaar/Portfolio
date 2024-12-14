import LinkButton from "@/components/LinkButton";
import CardLoader from "@/components/Loader/CardLoader";
import { twMerge } from "tailwind-merge";

export default function CardSectionSkeleton({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      {...props}
      className={twMerge("flex flex-col gap-6 justify-center items-center", props.className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader className="lg:hidden" />
        <CardLoader className="lg:hidden" />
        <CardLoader className="lg:hidden" />
      </div>

      <LinkButton
        href="/blog"
        variant="tertiary"
        icon="material-symbols-light:arrow-right-alt"
        rightIcon
      >
        See more blogs
      </LinkButton>
    </div>
  )
}