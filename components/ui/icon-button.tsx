import { FC, MouseEventHandler } from 'react'

import { cn } from '@/lib/utils';

interface IconButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
}

const IconButton: FC<IconButtonProps> = ({ onClick, icon, className }) => {
    return (
        <button
            onClick={onClick}
            className={cn('rounded-full flex items-center justify-center bg-white border transition shadow-md p-2 hover:scale-110', className)}
        >
            {icon}
        </button>
    )
}

export default IconButton