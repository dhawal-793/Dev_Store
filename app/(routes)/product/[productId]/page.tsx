import { FC } from 'react'

import fetchProduct from '@/actions/get-product'
import fetchProducts from '@/actions/get-products'
import ProductList from '@/components/ui/product-list'
import Container from '@/components/ui/container'

export const revalidate = 0;
export const dynamic = 'force-dynamic';

interface ProductPageProps {
    params: {
        productId: string
    }
}

const ProductPage: FC<ProductPageProps> = async ({ params: { productId } }) => {

    const product = await fetchProduct(productId)
    const suggestedProducts = await fetchProducts({ categoryId: product?.category?.id })

    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 py-10 sm:px-6 lg:px-8'>
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <div>Gallary</div>
                        <div className='px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0'>
                            Info
                        </div>
                    </div>
                    <hr className='my-10' />
                    <ProductList title="Related Items" items={suggestedProducts} />
                </div>
            </Container>
            <h1>Product {productId}</h1>
        </div>
    )
}

export default ProductPage