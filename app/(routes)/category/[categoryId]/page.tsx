import { FC } from 'react'

interface CategoryPageProps {
    params: {
        categoryId: string
    }
}

const CategoryPage: FC<CategoryPageProps> = ({ params: { categoryId } }) => {

    return (
        <div>
            Category Page
        </div>
    )
}

export default CategoryPage;
