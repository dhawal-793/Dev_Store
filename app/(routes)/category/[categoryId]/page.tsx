import { FC } from 'react'

import fetchCategory from '@/actions/get-category';
import fetchColors from '@/actions/get-colors';
import fetchProducts from '@/actions/get-products';
import fetchSizes from '@/actions/get-sizes';
import Container from '@/components/ui/container';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';
import Billboard from '@/components/billboard';

import Filter from "./components/filters"
import MobileFilters from './components/mobile-filters';

export const revalidate = 0;
export const dynamic = "force-dynamic";

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId?: string;
        sizeId?: string;
    }
}

const CategoryPage: FC<CategoryPageProps> = async ({ params: { categoryId }, searchParams: { colorId, sizeId } }) => {

    const products = await fetchProducts({ categoryId, colorId, sizeId })
    const colors = await fetchColors();
    const sizes = await fetchSizes();
    const category = await fetchCategory(categoryId);

    return (
        <div className='bg-white'>
            <Container>
                <Billboard data={category?.billboard} />
                <div className='px-4 pb-24 sm:px-6 lg:px-8'>
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                                {products.map(product => (
                                    <ProductCard key={product.id} data={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;
