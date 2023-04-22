interface ButtonProps {
  text: string
  type: "button" | "submit" | "reset"
  customStyle?: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  customStyle,
  onClick
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-primary-gradient
        rounded-lg
        p-4
        mt-12
        font-black
        text-white
        text-2xl
        hover:brightness-125
        ${customStyle}
      `}
      >
      {text}
    </button>
  )
}

export default Button