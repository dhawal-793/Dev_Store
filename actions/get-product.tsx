import { Product } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const fetchProduct = async (id: String): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`)
    return res.json()

}

export default fetchProduct