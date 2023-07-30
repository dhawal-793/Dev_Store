import { Billboard } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const fetchBillboard = async (id: String): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`)
    return res.json()

}

export default fetchBillboard