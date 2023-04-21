import { create } from "zustand";

interface useLoginModalStateProps {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

const useLoginModalState = create<useLoginModalStateProps>(set => ({
  isOpen: false,
  onClose: () => set({isOpen: false}),
  onOpen: () => set({isOpen: true})
}))


export default useLoginModalState