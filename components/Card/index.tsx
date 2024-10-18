export default function Card({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={`${props.className} flex flex-col rounded-md border border-gray-200 dark:border-gray-800 shadow-md`}>
      { props.children }
    </div>
  )
}