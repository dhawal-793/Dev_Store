'use client'

import { useState, useEffect } from 'react'

const CartPage = () => {
    const [isMonted, setIsMonted] = useState<boolean>(false)

    useEffect(() => {
        setIsMonted(true)
    }, [])

    if (!isMonted) return null

    return (
        <div>page</div>
    )
}

export default CartPage