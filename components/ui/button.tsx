import { FC, forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className, children, disabled, type = "button", ...props
    }, ref) => {
        return <button ref={ref}>{children}</button>
    })

Button.displayName = 'Button'

export default Button