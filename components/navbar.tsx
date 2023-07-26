import React from 'react'
import Link from 'next/link'

import Container from '@/components/ui/container'
import MainNav from '@/components/main-nav'
import fetchCategories from '@/actions/get-cetegories'

export const revalidate = 0
export const dynamic = 'force-dynamic'

const Navbar = async () => {
    const categories = await fetchCategories()

    return (
        <div className='border-b'>
            <Container>
                <div className='relative flex items-center h-16 px-4 sm:px-6 lg:px-0'>
                    <Link href="/" className='flex ml-4 lg:ml-0 gap-x-2'>
                        <p className='text-xl font-bold'>
                            DevStore
                        </p>
                    </Link>
                    <MainNav data={categories} />
                </div>
            </Container>
        </div>
    )
}

export default Navbar