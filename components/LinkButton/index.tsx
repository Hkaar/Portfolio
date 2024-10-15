import Link from "next/link"

interface LinkButtonProps {
    href: string
    active: boolean
    children?: React.ReactNode
}

export default function LinkButton({href, active, children}: LinkButtonProps) {
    return (
        <Link href={href} passHref className={`
            ${active ? '' 
                : 'hover:scale-105 active:scale-90 active:opacity-50 shadow-md'}
            border ease-in-out duration-150 rounded-md px-3 py-2`}>
            {children ? children : 'Untitled'}
        </Link>
    )
}