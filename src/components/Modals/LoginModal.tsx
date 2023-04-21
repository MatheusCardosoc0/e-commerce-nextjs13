"use client"

import React from 'react'
import Modal from './Modal'
import useLoginModalState from '@/context/useLoginModalState'

const LoginModal = () => {

  const useLogin = useLoginModalState()

  const bodyContent = (
    <div>
      teste
    </div>
  )

  return (
    <Modal
      actionLabel='Enviar'
      onClose={useLogin.onClose}
      onSubmit={() => {}}
      title='Faça o login'
      bodyContent={bodyContent}
      disabled={false}
      isOpen={useLogin.isOpen}
    />
  )
}

export default LoginModal