import { cn } from '@/lib/utils'
import { FC, forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className, children, disabled, type = "button", ...props
    }, ref) => {
        return <button
            ref={ref}
            className={cn(`w-auto bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition rounded-full`, className)}
        >
            {children}
        </button>
    })

Button.displayName = 'Button'

export default Button