import { ReactNode } from "react";

interface LayoutProps{
  children: ReactNode
  users: ReactNode
}

export default function Layout({children, users}: LayoutProps){
  return (
    <>
      {children}
      {users}
    </>
  )
}