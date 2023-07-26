import { Category } from "@/types"

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const fetchCategories = async (): Promise<Category[]> => {
    const res = await fetch(url)
    return res.json()
    
}

export default fetchCategories