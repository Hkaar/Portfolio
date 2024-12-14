import LinkButton from "@/components/LinkButton";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <>
      <div className="min-h-screen grid place-items-center">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl md:text-8xl font-bold text-danger dark:text-danger-dark">
              404
            </h1>

            <p className="text-gray-400 text-lg md:text-2xl leading-relaxed tracking-wide">
              Sorry, looks like that blog doesn’t exist!
            </p>
          </div>

          <div className="flex justify-center items-center gap-4">
            <LinkButton href="/blog" variant="primary">
              <ArrowLeft size={18} strokeWidth={1.5} />
              Go back to index
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  )
}