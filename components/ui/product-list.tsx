import { FC } from 'react'

import { Product } from '@/types';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';

interface ProductListProps {
    title: string;
    items: Product[];
}

const ProductList: FC<ProductListProps> = ({ title, items }) => {

    return (
        <div className='space-y-4'>
            <h3 className='text-3xl font-bold'>{title}</h3>
            {items.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    items.map((item) => (
                        <ProductCard key={item.id} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList