import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, CSSProperties } from 'react'
import classNames from "classnames"

type ButtonType = 'primary' | 'danger' | 'success' | 'link' | 'default'
type ButtonSize = 'lg' | 'sm' | 'normal'
type ButtonShape = 'default' | 'circle'

export interface BaseButtonProps {
  btnType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  href?: string;
  className?: string;
  children?: ReactNode;
  block?: boolean;
  // TODO: 在icon组件做完之后会完善loading
  loading?: boolean;
  shape?: ButtonShape;
  style?: CSSProperties
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = NativeButtonProps & AnchorButtonProps

const Button: FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href, block, style, shape, ...resetProps } = props;
  const classes = classNames('axel-button', className, {
    'disabled': disabled,
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    'btn-block': block,
    [`btn-${shape}`]: shape
  })

  if(btnType === 'link' && href) {
    return (
      <a
        href={href}
        className={classes}
        {...resetProps}
        style={style}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      {...resetProps}
      style={style}
    >
        {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  block: false,
  loading: false
}

export default Button

