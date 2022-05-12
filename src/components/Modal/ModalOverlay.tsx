import React, { FC } from 'react'

export interface ModalOverlayProps {
  onClose: () => void
}

const ModalOverlay: FC<ModalOverlayProps> = (props) => {
  const {onClose} = props
  const handleClose = () => {
    onClose()
  }
  return <div className="modal-overlay" onClick={handleClose} />
}

export default ModalOverlay
