import React, { ReactNode, CSSProperties, FC, useState } from 'react'
import classNames from 'classnames'
import Transition from '../Transition/transition'

type AlertType = 'success' | 'primary' | 'warning' | 'danger'

export interface AlertProps {
  message?: ReactNode;
  description?: ReactNode;
  closeable?: boolean;
  closeText?: ReactNode;
  type?: AlertType;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  // TODO: 后期icon组件完成后会进行整合
  showIcon?: boolean;
  // TODO: 后期要完成跑马灯效果
}

const Alert: FC<AlertProps> = (props) => {
  const {
    className,
    type,
    style,
    message,
    description,
    showIcon,
    closeable,
    onClose
  } = props;
  const [showAlert, setShowAlert] = useState<boolean>(true)
  const classes = classNames('axel-alert', className, {
    [`alert-${type}`]: type,
  })

  const closeAlert = () => {
    setShowAlert(false)
    onClose && onClose()
  }

  return (
    <Transition
      animation="zoom-in-top"
      in={showAlert}
      timeout={2000}
      unmountOnExit
      wrapper
    >
      <div className={classes} style={style}>
        <div className="alert-message">
          {showIcon && <div className="icon"></div>}
          <div className="message">{message}</div>
        </div>
        <div className="alert-description">{description}</div>
        {closeable && <div className="alert-close" onClick={closeAlert}>x</div>}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  showIcon: false
}

export default Alert
