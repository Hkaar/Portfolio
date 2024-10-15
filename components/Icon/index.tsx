interface IconProps {
    type?: string
    size?: number
    weight?: string
    children: React.ReactNode
}

export default function Icon({type, size, weight, children}: IconProps) {
    return (
        <i className={`material-symbols-${type ? type : 'outlined'} font-var-${weight ? weight : 'light'}`} style={{'fontSize': size ? `${size}px` : '24px'}}>
            {children}
        </i>
    )
}