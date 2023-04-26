"use client"

import React, { useCallback } from 'react'
import Modal from './Modal'
import useLoginModalState from '@/context/useLoginModalState'
import Heading from '../Heading'
import Input from '../Inputs/Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useRegisterModalState from '@/context/useRegisterModalState'
import { signIn } from 'next-auth/react'

const schema = z.object({
  email: z.string()
    .email("Dgigte um email valido"),
  password: z.string()
    .min(6, "A senha deve ter mais de 6 caracteres")

})

type FormProps = z.infer<typeof schema>

const LoginModal = () => {

  const useLogin = useLoginModalState()
  const useRegister = useRegisterModalState()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema)
  })

  async function onSubmit(data: FormProps) {
    try {
      await signIn('credentials', {
        ...data,
        redirect: false
      })
      .then(callback => {
        if(callback?.ok){
          window.location.reload()
        }
      })
    } catch (error) {
      console.log(error)
      alert('error')
    }
  }

  const replaceModal = useCallback(() => {
    useLogin.onClose()

    setTimeout(() => {
      useRegister.onOpen()
    }, 300)
  }, [useLogin, useRegister])

  const bodyContent = (
    <div
      className='
        flex
        flex-col
        gap-5
      '
    >
      <Heading
        title='Faça o login'
        subtitle='Entre com sua conta já criada'
        isDark
      />

      <Input
        id='email'
        label='Email'
        register={register}
        error={errors.email}
        type='email'
      />

      <Input
        id='password'
        label='Password'
        register={register}
        error={errors.password}
        type='password'
      />

      <b>
        Não possui uma conta?
        <button
          onClick={() => replaceModal()}
          className="
            text-xl
            text-red-600
            underline
          "
        >
          Criar conta
        </button>
      </b>
    </div>
  )

  return (
    <Modal
      actionLabel='Enviar'
      onClose={useLogin.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title='Login'
      bodyContent={bodyContent}
      disabled={false}
      isOpen={useLogin.isOpen}
    />
  )
}

export default LoginModal