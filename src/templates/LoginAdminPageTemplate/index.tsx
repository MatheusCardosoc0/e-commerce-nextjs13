"use client"

import Heading from "@/components/Heading"
import Button from "@/components/Inputs/Button"
import Input from "@/components/Inputs/Input"
import useAdminLoginState from "@/context/useAdminLoginState"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  name: z.string(),
  email: z.string()
    .email(),
  password: z.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
})


type FormProps = z.infer<typeof schema>

const LoginAdminPageTemplate = () => {

  const useAdmin = useAdminLoginState()
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange'
  })

  async function onSubmit(data: FormProps) {
    console.log(data)
    try {
      await axios.post('/api/loginadmin', data)

      alert('okj')
      useAdmin.onAuthorized()
      router.push('/admin')
    } catch (error) {
      console.log(error)
      alert('not')
    }
  }

  return (
    <div
      style={{
        backgroundImage: 'url(/top_banner.png)'
      }}
      className="
        w-full
        h-screen
        flex
        justify-center
        items-center
      "
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          w-[90%]
          max-w-[700px]
          flex
          flex-col
          justify-center
          items-center
          p-4
          bg-red-900
          rounded-lg
        "
      >
        <Heading
          title="Login"
          subtitle="Entrar com administrador"
        />
        <Input
          id="name"
          label="Nome"
          type="password"
          register={register}
          error={errors.name}
        />
        <Input
          id="email"
          label="Email"
          type="password"
          register={register}
          error={errors.email}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          register={register}
          error={errors.password}
        />

        <Button
          onClick={() => { }}
          text="Entrar"
          type="submit"
          customStyle="
            w-[90%]
          "
        />
      </form>
    </div>
  )
}

export default LoginAdminPageTemplate