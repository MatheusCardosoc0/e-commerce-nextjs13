"use client"

import useAdminLoginState from '@/context/useAdminLoginState'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import OptionsAdmin from './OptionsAdmin'

const AdminPageTemplate = () => {

  {/*const useAdmin = useAdminLoginState()
  const router = useRouter()

  useEffect(() => {
    if(useAdmin.isAuthorized){
      return
    }else {
      router.push('/admin/login')
    }
  },[router, useAdmin])

  if(!useAdmin.isAuthorized){
    return (
      <div
        className='
          w-full
          h-screen
          bg-red-900
        '
      />
    )
  } */}

  return (
    <div>
      <OptionsAdmin />
    </div>
  )
}

export default AdminPageTemplate