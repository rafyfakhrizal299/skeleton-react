import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary'
}

export function Button({
    children,
    variant = 'primary',
    className,
    ...props
}: Props){
    return (
        <button className={clsx(
            'px-4 py-2 rounded font-medium transition',
            variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
            variant === 'secondary' && 'bg-gray-200 hover:bg-gray-300',
            className
        )}
        {...props}
        >
            {children}
        </button>
    )
}