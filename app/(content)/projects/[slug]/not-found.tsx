import LinkButton from "@/components/LinkButton";

export default function NotFoundPage() {
  return (
    <>
      <div className="min-h-screen grid place-items-center">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-8xl font-bold">
              404
            </h1>

            <p className="text-gray-400 text-3xl leading-relaxed tracking-wide">
              Sorry, looks like that project doesn’t exist!
            </p>
          </div>

          <div className="flex justify-center items-center gap-4">
            <LinkButton href="/projects" type="primary" icon="mdi-light:arrow-left">Go back to index</LinkButton>
          </div>
        </div>
      </div>
    </>
  )
}