'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'


import { Image as ImageType } from '@/types'

import GalleryTab from './gallery-tab'

interface GalleryProps {
    images: ImageType[]
}

const Gallery: FC<GalleryProps> = ({ images }) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse ">
            <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map(image => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="w-full aspect-square">
                {images.map(image => (
                    <Tab.Panel key={image.id}>
                        <div className='relative w-full h-full overflow-hidden sm:rounded-lg aspect-square'>
                            <Image
                                fill
                                src={image?.url}
                                alt="Product Image"
                                className='object-cover object-center'
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Gallery