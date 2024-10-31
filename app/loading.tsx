import FactBox from "@/components/FactBox";
import LoadSpinner from "@/components/Loader/LoadSpinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex">
      <div className="container grid place-items-center flex-1">
        <div className="flex flex-col items-center gap-3">
          <LoadSpinner />

          <FactBox className="text-xl font-semibold text-tertiary dark:text-tertiary-dark" />
        </div>
      </div>
    </div>
  )
}