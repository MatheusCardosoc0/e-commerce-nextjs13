"use client"

import { ReactNode, useEffect, useState } from "react"

const ClientOnly = ({children}: {children: ReactNode}) => {

  const [onLoaded, setOnLoaded] = useState(false)

  useEffect(() => {
    setOnLoaded(true)
  },[])

  if(!onLoaded){
    return null
  }

  return (
    <>
      {children}
    </>
  )
}

export default ClientOnly