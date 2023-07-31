'use client'

import { FC,  MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Expand, ShoppingCart } from 'lucide-react'

import { Product } from '@/types'
import usePreviewModal from '@/hooks/use-preview-modal'
import IconButton from '@/components/ui/icon-button'
import Currency from '@/components/ui/currency'

interface ProductCardProps {
    data: Product
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {

    const router = useRouter()
    const previewModal = usePreviewModal()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        previewModal.onOpen(data)
    }

    return (
        <div className='p-3 space-y-4 bg-white border cursor-pointer group rounded-xl'>
            <div
                onClick={handleClick}
                className="relative bg-gray-100 aspect-square rounded-xl"
            >
                <Image
                    src={data?.images?.[0]?.url}
                    alt="Product Image"
                    fill
                    className='object-cover rounded-md aspect-square'
                />
                <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
                    <div className="flex justify-center gap-x-6">
                        <IconButton
                            onClick={onPreview}
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
                <p className='text-lg font-semibold'>{data.name}</p>
                <p className='text-sm to-gray-500'>{data.category.name}</p>
            </div>
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard