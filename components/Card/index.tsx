import Icon from "../Icon"

interface CardProps {
    icon?: string
    type?: string
    title?: string
    children?: React.ReactNode
}

const getTypeClasses = (type?: string): string => {
    switch (type) {
        case 'primary':
            return 'bg-primary text-base-light'
        
        case 'secondary':
            return 'bg-secondary text-base-light'

        case 'tertiary':
            return 'bg-tertiary text-base-light'

        default:
            return ''
    }
}

export default function Card({icon, type, title, children}: CardProps) {
    return (
        <div className={`${getTypeClasses(type)} border w-fit border-gray-200 dark:border-gray-800 rounded-md px-4 py-3`}>
            {(icon && title) || title ? (
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        {icon ? <Icon size={32}>{icon}</Icon> : ''}
                        <span className="font-semibold text-lg tracking-tight">{title}</span>
                    </div>

                    <div className="flex-1">
                        { children ? children : 'No content' }
                    </div>
                </div>
            ) : ''}

            {icon && !title ? 
                <div className="flex items-center gap-2">
                    <Icon size={42}>{icon}</Icon>

                    <div className="flex-1">
                        { children ? children : 'No content' }
                    </div>
                </div> 
            : ''}
            
            {!icon && !title ?
                <div className="flex-1">
                    { children ? children : 'No content' }
                </div>
            : ''}
        </div>
    )
}