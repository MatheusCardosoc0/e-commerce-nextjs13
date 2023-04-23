import { create } from "zustand"

interface RegisterModalState{
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useRegisterModalState = create<RegisterModalState>(set => ({
  isOpen: false,
  onClose: () => set({isOpen: false}),
  onOpen: () => set({isOpen: true})
}))

export default useRegisterModalState