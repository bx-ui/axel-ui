import React, { ReactNode, CSSProperties, FC, useState } from 'react'
import classNames from 'classnames'
import Transition from '../Transition/transition'

type AlertType = 'success' | 'primary' | 'warning' | 'danger'

export interface AlertProps {
  /** 标题 */
  message?: ReactNode;
  /** 详细信息 */
  description?: ReactNode;
  /** 是否可以关闭 */
  closeable?: boolean;
  // TODO: 自定义关闭文案
  /** 自定义关闭文案 将在下一版本推出 */
  closeText?: ReactNode;
  /** Alert类型 */
  type?: AlertType;
  /** 关闭的回调事件 */
  onClose?: () => void;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子组件 */
  children?: ReactNode;
  // TODO: 后期icon组件完成后会进行整合
  /** 是否展示对应type的图标 将在下一版本推出 */
  showIcon?: boolean;
  // TODO: 后期要完成跑马灯效果
}

export const Alert: FC<AlertProps> = (props) => {
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
