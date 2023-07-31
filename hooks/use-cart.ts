import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types"
import { toast } from "react-hot-toast";


interface CartState {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartState>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find(item => item.id === data.id);
            if (existingItem) {
                return toast("Item already in cart.")
            }

            set({ items: [...get().items, data] })
            toast.success("Item added to cart.")
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter(item => item.id !== id)] })
            toast.success("Item removed from cart.")
        },
        removeAll: () => {
            set({ items: [] })
            toast.success("All Items removed from cart.")
        },
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;