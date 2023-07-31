import { create } from "zustand";

import { Product } from "@/types"


interface PreviewModalState {
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalState>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false, data: undefined }),
}));

export default usePreviewModal;