'use client'

import Image from 'next/image'
import { FC } from 'react'
import { Expand, ShoppingCart } from 'lucide-react'

import { Product } from '@/types'
import IconButton from '@/components/ui/icon-button'
import Currency from '@/components/ui/currency'

interface ProductCardProps {
    data: Product
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
    return (
        <div className='p-3 space-y-4 bg-white border cursor-pointer group rounded-xl'>
            <div className="relative bg-gray-100 aspect-square rounded-xl">
                <Image
                    src={data?.images?.[0]?.url}
                    alt="Product Image"
                    fill
                    className='object-cover rounded-md aspect-square'
                />
                <div className="opacity-0 group-hover:opacity-100 absolute transition w-full bottom-5 px-6">
                    <div className="flex justify-center gap-x-6">
                        <IconButton
                            onClick={() => { }}
                            icon={<Expand size={20} className='text-gray-600' />}
                        />
                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} className='text-gray-600' />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className='font-semibold text-lg'>{data.name}</p>
                <p className='text-sm to-gray-500'>{data.category.name}</p>
            </div>
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard