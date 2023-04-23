"use client"

import React, { useCallback } from 'react'
import Modal from './Modal'
import useRegisterModalState from '@/context/useRegisterModalState'
import Heading from '../Heading'
import Input from '../Inputs/Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useLoginModalState from '@/context/useLoginModalState'

const schema = z.object({
  name:
    z.string(),
  email:
    z.string()
      .email("Dgigte um email valido"),
  password:
    z.string()
      .min(6, "A senha deve ter mais de 6 caracteres"),
  confirmPassword:
    z.string(),
})
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais.'
  })

type FormProps = z.infer<typeof schema>

const RegisterModal = () => {

  const useRegister = useRegisterModalState()
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

  function onSubmit(data: FormProps) {
    console.log(data)
  }

  const replaceModal = useCallback(() => {
    useRegister.onClose()

    setTimeout(() => {
      useLogin.onOpen()
    }, 300);
  }, [useRegister, useLogin])

  const bodyContent = (
    <div
      className='
        flex
        flex-col
        gap-2
      '
    >
      <Heading
        title='Crie sua conta'
        subtitle='Crie uma conta para facilitar sua compra'
        isDark
      />

      <Input
        id='name'
        label='Nome'
        register={register}
        error={errors.name}
        type='text'
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
        label='Senha'
        register={register}
        error={errors.password}
        type='password'
      />

      <Input
        id='confirmPassword'
        label='Confirme sua senha'
        register={register}
        error={errors.confirmPassword}
        type='confirmPassword'
      />

      <b>
        Já possui uma conta?
        <button
          onClick={() => replaceModal()}
          className="
            text-xl
            text-red-600
            underline
          "
        >
          Fazer Login
        </button>
      </b>
    </div>
  )

  return (
    <Modal
      actionLabel='Enviar'
      onClose={useRegister.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title='Registre-se'
      bodyContent={bodyContent}
      disabled={false}
      isOpen={useRegister.isOpen}
    />
  )
}

export default RegisterModal