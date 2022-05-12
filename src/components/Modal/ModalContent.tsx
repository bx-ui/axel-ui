import React, { FC, ReactNode, useState } from 'react'
import Icon from '../Icon'
import Button from '../Button'

export interface ModalContentProps {
  title?: string;
  width?: string | number;
  children?: ReactNode;
  onClose: () => void;
  confirmLoading?: boolean
}

const ModalContent: FC<ModalContentProps> = (props) => {
  const { title, children, onClose, confirmLoading } = props

  const [isClickConfirm, setCheckConfirm] = useState<boolean>(false)

  const handleClose = () => {
    onClose()
  }

  const handleConfirm = () => {
    setCheckConfirm(true)
  }
  return (
    <div className="modal-content">
      <div className="modal-content-header">
        <span className="title">{title}</span>
        <Icon icon="xmark" onClick={handleClose}></Icon>
      </div>
      <div className="modal-content-container">
        {children}
      </div>
      <div className="modal-content-footer">
        <Button btnType="primary" loading={confirmLoading && isClickConfirm} onClick={handleConfirm}>提交</Button>
        <Button onClick={handleClose}>关闭</Button>
      </div>
    </div>
  )
}

export default ModalContent
