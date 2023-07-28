'use client'

import { FC, useEffect, useState } from 'react'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
});

interface currencyProps {
    value: string | number
}

const Currency: FC<currencyProps> = ({ value }) => {

    const [isMounted, setIsMounted] = useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null


    return (
        <div className='font-semibold'>
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency;