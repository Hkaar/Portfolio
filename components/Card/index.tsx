interface CardProps extends React.HTMLAttributes<HTMLElement> {}

export default function Card({ ...props }: CardProps) {
  return (
    <div className={`${props.className} flex flex-col rounded-md border border-gray-200 dark:border-gray-800 shadow-md`}>
      { props.children }
    </div>
  )
}