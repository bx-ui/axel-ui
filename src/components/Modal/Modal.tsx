import React, { CSSProperties, FC, ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import Partal from '../Partal'
import ModalOverlay from './ModalOverlay'
import ModalContent from './ModalContent'
import Transition from '../Transition'

export interface ModalProps {
  title?: string;
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  confirmLoading?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    title,
    visible,
    onOk,
    onCancel,
    className,
    style,
    children,
    confirmLoading
  } = props

  const [modalShow, setModalShow] = useState<boolean>(visible)
  
  const classes = classNames('axel-modal')

  useEffect(() => {
    const body = document.body
    if(visible) {
      body.classList.add('body-overflow-hidden')
      setModalShow(true)
    } else {
      body.classList.remove("body-overflow-hidden");
    }
  }, [visible])

  const handleClose = () => {
    setModalShow(false)
    if(onCancel) onCancel()
  }

  return (
    <Partal>
      <Transition
        in={modalShow}
        timeout={200}
        className="modal"
        unmountOnExit
        appear
      >
        <ModalOverlay onClose={handleClose} />
      </Transition>
      <Transition
        in={modalShow}
        timeout={500}
        animation="zoom-in-left"
        unmountOnExit
        appear
      >
        <div className={classes}>
          {/* <ModalOverlay onClose={handleClose} /> */}
          <ModalContent
            title={title}
            onClose={handleClose}
            confirmLoading={confirmLoading}
          >
            {children}
          </ModalContent>
        </div>
      </Transition>
    </Partal>
  )
}

export default Modal
