import Link from "next/link"
import { options } from "./options"

interface OptionsContainerProps {
  href: string
  label: string
}

const OptionsContainer: React.FC<OptionsContainerProps> = ({
  href,
  label
}) => (
  <Link href={href}>
    {label}
  </Link>
)

const OptionsAdmin = () => {
  return (
    <div>
      {options.map(option => (
        <OptionsContainer
          key={option.label}
          href={option.href}
          label={option.label}
        />
      ))}
    </div>
  )
}

export default OptionsAdmin