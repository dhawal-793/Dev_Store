import { FC } from 'react'

import fetchCategory from '@/actions/get-category';
import fetchColors from '@/actions/get-colors';
import fetchProducts from '@/actions/get-products';
import fetchSizes from '@/actions/get-sizes';
import Container from '@/components/ui/container';

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
                <div>
                    Category
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;
