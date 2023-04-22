"use client"

import React from 'react'
import Modal from './Modal'
import useLoginModalState from '@/context/useLoginModalState'
import Heading from '../Heading'
import Input from '../Inputs/Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string()
    .email("Dgigte um email valido"),
  password: z.string()
    .min(6, "A senha deve ter mais de 6 caracteres")

})

type FormProps = z.infer<typeof schema>

const LoginModal = () => {

  const useLogin = useLoginModalState()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema)
  })

  const bodyContent = (
    <div>
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
    </div>
  )

  return (
    <Modal
      actionLabel='Enviar'
      onClose={useLogin.onClose}
      onSubmit={() => { }}
      title='Login'
      bodyContent={bodyContent}
      disabled={false}
      isOpen={useLogin.isOpen}
    />
  )
}

export default LoginModal