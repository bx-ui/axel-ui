import React, { ReactNode, CSSProperties, FC, useState, useContext, MouseEvent } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
import { MenuContext } from './menu'
import Transition from '../Transition/transition'

export interface SubMenuProps {
  title?: ReactNode,
  index?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode
}

const SubMenu: FC<SubMenuProps> = (props) => {
  const { className, style, title, children, index } = props
  const [menuOpen, setOpen] = useState<boolean>(false)
  const context = useContext(MenuContext)

  const activeClass = () => {
    const reg = context.index!.match(/(\S*)-/)
    const parentIndex = reg ? reg[1] : null
    return (context.relationParentActive && parentIndex?.toString() === index) || context.index === index
  }

  const classes = classNames('submenu-item menu-item', className, {
    'is-active': activeClass()
  })

  const renderChildren = () => {

    const subMenuClasses = classNames('axel-submenu', {
      'menu-opened': menuOpen
    })

    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName }= childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component")
      }
    })

    return (
      <Transition
        in={menuOpen}
        timeout={300} 
        animation="zoom-in-top"
        unmountOnExit
        appear
      >
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
    )
  }

  const handleClick = () => {
    setOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: MouseEvent, trigger: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(trigger)
    }, 300);
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: MouseEvent) => {handleMouse(e, true)},
    onMouseLeave: (e: MouseEvent) => {handleMouse(e, false)}
  } : {}

  return (
    <li key={index} className={classes} style={style} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        {/* 图标放置位置 */}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
