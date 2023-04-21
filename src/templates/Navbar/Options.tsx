/* eslint-disable @next/next/no-img-element */
"use client"

import { IconType } from "react-icons"
import { MdSecurity } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import useLoginModalState from "@/context/useLoginModalState"

interface NavOptionsCardProps {
  text?: string
  icon?: IconType
  index: number
  onChange?: () => void
}


const NavOptionsCard : React.FC<NavOptionsCardProps> = ({
  icon: Icon,
  text,
  index
}) => (
  <button
    className={`
      flex
      gap-2
      items-center
      hover:text-yellow-200
      ${index > 1 && 'border-l-2 pl-4'}
    `}
  >
    {Icon && (
      <Icon
        size={20}
      />
    )}
    {text && text}
  </button>
)


const Options = () => {

  const useLogin = useLoginModalState()

  const options: NavOptionsCardProps[] = [
    {
      text: 'Compra Segura',
      icon: MdSecurity,
      index: 1
    },
    {
      text: 'Ajuda',
      index: 2
    },
    {
      text: 'Lista de Desejos',
      icon: AiFillHeart,
      index: 3
    }
  ]

  return (
    <div
      className="
        w-full
        flex
        justify-end
        p-2
        bg-zinc-900
        text-yellow-400
      "
    >
      <div
        className="
          flex
          gap-4
          px-3
        "
      >
        {options.map((option) => (
          <NavOptionsCard
            key={option.index}
            icon={option.icon}
            text={option.text}
            index={option.index}
          />
        ))}

        <button
          onClick={() => useLogin.onOpen()}
        >
          <img
            src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
            alt="unknow user"
            className="
              w-[50px]
              border-l-2
              pl-4
            "
          />
        </button>
      </div>
    </div>
  )
}

export default Options