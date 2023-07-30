import { FC } from 'react'

interface CategoryPageProps {
    params: {
        categoryId: string
    }
}

const CategoryPage: FC<CategoryPageProps> = ({ params: { categoryId } }) => {

    return (
        <div>
            {categoryId}
        </div>
    )
}

export default CategoryPage;
