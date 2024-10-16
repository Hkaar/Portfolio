import Link from "next/link"
import Icon from "../Icon"

interface LinkButtonProps {
    href: string
    active?: boolean
    type?: string
    icon?: string
    rightIcon?: boolean
    children?: React.ReactNode
}

const getTypeClasses = (type?: string): string => {
    switch (type) {
        case 'primary':
            return 'bg-primary text-base-light dark:bg-primary-dark dark:text-base-dark border-gray-200 dark:border-gray-800'
        case 'secondary':
            return 'bg-secondary text-base-light dark:bg-secondary-dark dark:text-base-dark border-gray-200 dark:border-gray-800'       
        case 'tertiary':
            return 'bg-tertiary text-base-light dark:bg-tertiary-dark dark:text-base-dark border-gray-200 dark:border-gray-800'
        case 'accent':
            return 'bg-accent text-base-light border-gray-200 dark:border-gray-800'
        case 'success':
            return 'bg-success text-base-light dark:bg-success-dark border-gray-200 dark:border-gray-800'
        case 'info':
            return 'bg-info text-base-light dark:bg-info-dark border-gray-200 dark:border-gray-800'
        case 'warning':
            return 'bg-warning text-base-light dark:bg-warning-dark border-gray-200 dark:border-gray-800'
        case 'danger':
            return 'bg-danger text-base-light dark:bg-danger-dark border-gray-200 dark:border-gray-800'
        default:
            return ''
    }
};

export default function LinkButton({href, active, type, icon, rightIcon, children}: LinkButtonProps) {
    return (
        <Link href={href} passHref className={`
            ${active 
                ? '' 
                : 'hover:scale-105 active:scale-90 active:opacity-50 shadow-md'
            } ${getTypeClasses(type)} w-fit flex items-center gap-2 border ease-in-out 
            duration-150 rounded-md px-3 py-2 border-gray-200 dark:border-gray-800`}>
            {!rightIcon && icon ? <Icon>{icon}</Icon> : '' }
            {children ? children : ''}
            {rightIcon && icon ? <Icon>{icon}</Icon> : '' }
        </Link>
    )
}