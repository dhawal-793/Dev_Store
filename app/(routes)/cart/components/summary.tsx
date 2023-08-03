'use client'

import { FC, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-hot-toast'

import useCart from '@/hooks/use-cart'
import Currency from '@/components/ui/currency'
import Button from '@/components/ui/button'

interface SummaryProps {

}

const Summary: FC<SummaryProps> = ({ }) => {

    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)
    const searchParams = useSearchParams()

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map(item => item.id)
        })

        window.location = response.data.url
    }
    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success('Payment completed successfully')
            removeAll()
        }
        if (searchParams.get('canceled')) {
            toast.error('Something went wrong')
        }
    }, [searchParams, removeAll])

    return (
        <div className='px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:px-6 lg:col-span-5 lg:mt-0 lg:p-8'>
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className='mt-6 space-y-4 '>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className='text-base font-medium text-gray-900'>
                        Order Total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button
                disabled={items.length === 0}
                onClick={onCheckout}
                className='w-full mt-6'
            >
                Checkout
            </Button>
        </div>
    )
}

export default Summary