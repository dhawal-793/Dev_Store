import { Billboard } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const fetchFirstBillboard = async (): Promise<Billboard> => {
    const res = await fetch(`${URL}`)
    const jsonResponse = await res.json()

    return jsonResponse[0]

}

export default fetchFirstBillboard