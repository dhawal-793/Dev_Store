import { Category } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const fetchCategory = async (id: String): Promise<Category> => {
    const res = await fetch(`${URL}/${id}`)
    return res.json()

}

export default fetchCategory