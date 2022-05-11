import React, { CSSProperties, FC, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { children, className, disabled, style, index } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = () => {
    if(index) context.onChange!(index)
    
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>{children}</li>
  )
}

MenuItem.defaultProps = {
  disabled: false
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
