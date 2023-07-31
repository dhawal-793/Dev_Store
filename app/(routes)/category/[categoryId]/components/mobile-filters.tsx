'use client'

import { FC, useState } from 'react'
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';


import { Color, Size } from '@/types'
import Button from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';

import Filters from './filters';

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: FC<MobileFiltersProps> = ({ sizes, colors }) => {
    const [open, setOpen] = useState<boolean>(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    return (
        <>
            <Button
                onClick={onOpen}
                className='flex items-center gap-x-2 lg:hidden'>
                Filters <Plus size={20} />
            </Button>
            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                <div className='fixed inset-0 bg-black bg-opacity-25' />
                <div className='fixed inset-0 z-40 flex'>
                    <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl">
                        <div className='grid px-4 place-items-center'>
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>
                        <div className="p-4">
                            <Filters
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filters
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilters