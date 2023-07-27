import { FC } from 'react'

import { Product } from '@/types';
import NoResults from '@/components/ui/no-results';

interface ProductListProps {
    title: string;
    items: Product[];
}

const ProductList: FC<ProductListProps> = ({ title, items }) => {

    return (
        <div className='space-y-4'>
            <h3>{title}</h3>
            {items.length === 0 && <NoResults />}

        </div>
    )
}

export default ProductList