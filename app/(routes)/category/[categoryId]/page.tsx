import { FC } from 'react'

import fetchCategory from '@/actions/get-category';
import fetchColors from '@/actions/get-colors';
import fetchProducts from '@/actions/get-products';
import fetchSizes from '@/actions/get-sizes';
import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';

import Filter from "./components/filters"

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
                        {/* Mobile Filters */}
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
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;
