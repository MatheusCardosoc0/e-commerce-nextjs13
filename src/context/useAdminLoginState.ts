import { create } from 'zustand'

interface UseAdminLoginState {
  isAuthorized: boolean
  onAuthorized: () => void
}

const useAdminLoginState = create<UseAdminLoginState>(set => ({
  isAuthorized: false,
  onAuthorized: () => set({ isAuthorized: true })
}))

export default useAdminLoginState