'use client'

import { FC } from 'react'
import { usePathname } from "next/navigation"
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Category } from '@/types'

interface MainNavProps {
    data: Category[]
}

const MainNav: FC<MainNavProps> = ({ data }) => {
    const pathname = usePathname()


    const routes = data.map((route: any) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <nav className='flex items-center mx-6 space-x-4 lg:space-x-6'>
            {routes.map(route => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}

export default MainNav