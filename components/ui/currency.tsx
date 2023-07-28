'use client'

import { FC } from 'react'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
});

interface currencyProps {
    value: string | number
}

const currency: FC<currencyProps> = ({ value }) => {
    return (
        <div className='font-semibold'>
            {formatter.format(Number(value))}
        </div>
    )
}

export default currency;