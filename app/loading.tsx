import LoadSpinner from "@/components/Loader/LoadSpinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex">
      <div className="container grid place-items-center flex-1">
        <div className="flex flex-col items-center gap-3">
          <LoadSpinner />

          <h4 className="text-2xl font-bold">Loading</h4>
        </div>
      </div>
    </div>
  )
}