"use client"

import { useCallback, useEffect, useState } from "react"


interface ModalProps {
  title: string
  bodyContent?: React.ReactElement
  onSubmit: () => void
  actionLabel: string
  onClose: () => void
  isOpen?: boolean
  disabled?: boolean
}

const Modal: React.FC<ModalProps> = ({
  bodyContent,
  onSubmit,
  title,
  actionLabel,
  onClose,
  isOpen,
  disabled
}) => {

  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled){
      return
    }

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])


  const handleSubmit = useCallback(() => {
    if(disabled){
      return
    }

    onSubmit()
  },[disabled, onSubmit])

  if(!isOpen){
    return null
  }

  return (
    <div>
      <button
        onClick={onClose}
      >
        Fechar
      </button>
      <div>
        <h2>
          {title}
        </h2>

        <div>
          {bodyContent}
        </div>

        <button
          onClick={onSubmit}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  )
}

export default Modal