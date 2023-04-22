"use client"

import { useCallback, useEffect, useState } from "react"
import {MdClose} from 'react-icons/md'
import Button from "../Inputs/Button"


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
    if (disabled) {
      return
    }

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])


  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }

    onSubmit()
  }, [disabled, onSubmit])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-y-1/2
        -translate-x-1/2
        bg-primary-gradient
        p-3
        rounded-xl
        w-full
        md:max-w-[600px]
      "
    >
      <div
        className="
          p-4
          relative
          bg-white
          w-full
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-1
            right-1
            p-2
            rounded-full
            bg-red-900
          "
        >
          <MdClose
            className="
              text-3xl
              text-white
            "
          />
        </button>
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          {title}
        </h2>

        <div
          className="
            p-4
          "
        >
          {bodyContent}
        </div>

        <Button
          text={actionLabel}
          onClick={onSubmit}
          type="button"
          customStyle="
            w-full
          "
        />
      </div>
    </div>
  )
}

export default Modal