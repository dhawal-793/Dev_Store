import { FC } from 'react'

import { Image as ImageType } from '@/types'
import { cn } from '@/lib/utils'
import { Tab } from '@headlessui/react'
import Image from 'next/image'

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
    return (
        <Tab className="relative flex items-center justify-center bg-white rounded-md cursor-pointer aspect-square">
            {({ selected }) => (
                <div>
                    <span className='absolute inset-0 w-full h-full overflow-hidden rounded-md aspect-square'>
                        <Image
                            fill
                            src={image?.url}
                            alt="Product Image"
                            className='object-cover object-center'
                        />
                    </span>
                    <span className={cn(
                        'absolute rounded-md ring-2 inset-0 ring-offset-2',
                        selected ? 'ring-black' : 'ring-transparent'
                    )} />
                </div>
            )}

        </Tab>
    )
}

export default GalleryTab