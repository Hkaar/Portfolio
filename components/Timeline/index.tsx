interface TimelineProps extends React.HTMLAttributes<HTMLElement> {}

export default function Timeline({ ...props }: TimelineProps) {
  return (
    <div className="relative flex flex-col border-l border-l-gray-400 px-3 gap-6">
      {props.children}
    </div>
  )
}