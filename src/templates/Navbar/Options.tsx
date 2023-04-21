import { IconType } from "react-icons"
import { MdSecurity } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

interface NavOptionsCardProps {
  text?: string
  icon?: IconType
  index: number
  onChange?: () => void
}

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
  },
  {
    icon: FaUserAlt,
    index: 4
  }
]

const NavOptionsCard = ({
  icon: Icon,
  text,
  index
}: NavOptionsCardProps) => (
  <button
    className={`
      flex
      gap-2
      items-center
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
      </div>
    </div>
  )
}

export default Options