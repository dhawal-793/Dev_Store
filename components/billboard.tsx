import { FC } from 'react'

import { Billboard as BillboardType } from '@/types'

interface BillboardProps {
    data: BillboardType
}

const Billboard: FC<BillboardProps> = ({ data }) => {
    return (
        <div className='p-4 overflow-hidden rounded-xl sm:p-6 lg:p-8'>
            <div
                className='relative rounded-xl aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
            >
                <div className="flex flex-col items-center justify-center w-full h-full text-center gap-y-8">
                    <div className="max-w-xs text-3xl font-bold sm:text-5xl lg:text-6xl sm:max-w-xl ">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard