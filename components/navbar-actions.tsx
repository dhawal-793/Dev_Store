'use client'

import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingBag } from 'lucide-react'

import useCart from '@/hooks/use-cart'
import Button from '@/components/ui/button'

interface NavbarActionsProps {

}

const NavbarActions: FC<NavbarActionsProps> = ({ }) => {

    const [isMounted, setIsMounted] = useState(false)
    const cart = useCart()
    const router=useRouter()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className="flex items-center ml-auto gap-x-4">
            <Button
                onClick={()=>router.push('/cart')}
                className='flex items-center px-4 py-2 bg-black rounded-full'>
                <ShoppingBag
                    size={20}
                    color="white"
                />
                <span className='ml-2 text-sm font-medium text-white'>{cart.items.length}</span>
            </Button>
        </div>
    )
}

export default NavbarActions