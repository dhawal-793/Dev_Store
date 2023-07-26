'use client'

import { FC, useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'

import Button from '@/components/ui/button'

interface NavbarActionsProps {

}

const NavbarActions: FC<NavbarActionsProps> = ({ }) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])


    if (!isMounted) return null


    return (
        <div className="flex items-center ml-auto gap-x-4">
            <Button className='flex items-center px-4 py-2 bg-black rounded-full'>
                <ShoppingBag
                    size={20}
                    color="white"
                />
                <span className='ml-2 text-sm font-medium text-white'>0</span>
            </Button>
        </div>
    )
}

export default NavbarActions