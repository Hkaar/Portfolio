export default function Timeline({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="relative flex flex-col border-l border-l-gray-400 px-3 gap-6">
      {props.children}
    </div>
  )
}