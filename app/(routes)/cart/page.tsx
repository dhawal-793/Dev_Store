'use client'

import { useState, useEffect } from 'react'

import useCart from '@/hooks/use-cart'
import Container from '@/components/ui/container'

const CartPage = () => {
    const [isMonted, setIsMonted] = useState<boolean>(false)
    const cart = useCart()
    useEffect(() => {
        setIsMonted(true)
    }, [])

    if (!isMonted) return null

    return (
        <div className='bg-white'>
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
                    <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                        <div className='lg:col-span-7'>
                            {cart.items.length === 0 && <p className='text-neutral-500'>
                                Not Items added to cart.
                            </p>
                            }
                            <ul>
                                {
                                    cart.items.map((item) => (
                                        <p key={item.id}>{item.name}</p>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CartPage