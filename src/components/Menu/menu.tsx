import React, { CSSProperties, FC, ReactNode, createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'vertical' | 'horizontal'

type ChangeCallback = (index: string) => void

export interface IMenuContext {
  index?: string;
  onChange?: ChangeCallback;
  mode?: MenuMode;
  relationParentActive?: boolean
}

export interface MenuProps {
  mode?: MenuMode;
  className?: string;
  style?:CSSProperties;
  onChange?: ChangeCallback;
  defaultIndex?: string;
  children?: ReactNode;
  /** 是否于父级menuitem关联 */
  relationParentActive?: boolean
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

export const Menu: FC<MenuProps> = (props) => {
  const { className, mode, children, style, defaultIndex, onChange, relationParentActive } = props
  const [currentIndex, setIndex] = useState<string>(defaultIndex as string)
  const classes = classNames('axel-menu', className, {
    [`menu-${mode}`]: mode
  })

  const handleClick = (index: string) => {
    if(index === currentIndex) return
    setIndex(index)
    if(onChange) onChange(index)
  }

  const passedContext: IMenuContext = {
    index: currentIndex ? currentIndex : '0',
    onChange: handleClick,
    mode,
    relationParentActive
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if(displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      }else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: '0',
  relationParentActive: false
}

export default Menu
