import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, CSSProperties } from 'react'
import classNames from "classnames"
import Icon from '../Icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type ButtonType = 'primary' | 'danger' | 'success' | 'link' | 'default'
type ButtonSize = 'lg' | 'sm' | 'normal'
type ButtonShape = 'default' | 'circle'

export interface BaseButtonProps {
  /** 按钮类型.'primary' | 'danger' | 'success' | 'link' | 'default' */
  btnType?: ButtonType;
  /** 按钮大小 'lg' | 'sm' | 'normal' */
  size?: ButtonSize;
  /** 是否禁用按钮 */
  disabled?: boolean;
  /** 仅当btnType为link时有效 */
  href?: string;
  /** 自定义类名 */
  className?: string;
  /** 子节点 */
  children?: ReactNode;
  /** 是否充满父元素 */
  block?: boolean;
  /** 是否处于加载状态 */
  loading?: boolean;
  /** 按钮的形状  'default' | 'circle', 有bug，会在下一版本解决*/
  shape?: ButtonShape;
  /** 自定义style */
  style?: CSSProperties,
  /** 按钮的后置icon */
  appendIcon?: IconProp,
  /** 按钮的前置icon */
  prependIcon?: IconProp
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = NativeButtonProps & AnchorButtonProps
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    href,
    block,
    style,
    shape,
    loading,
    prependIcon,
    appendIcon,
    ...resetProps
  } = props;
  const classes = classNames('axel-button', className, {
    'disabled': disabled,
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    'btn-block': block,
    [`btn-${shape}`]: shape,
    'btn-loading': loading
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
      {loading && <Icon icon="spinner" spin/>}
      {(!loading && prependIcon) && <Icon icon={prependIcon}/>}
      {children}
      {(!loading && appendIcon) && <Icon icon={appendIcon}/>}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  block: false,
  loading: false
}

export default Button

