import React, { FC } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

/**
 * 图标暂时不会列举到文档中， 如有需要请移步: https://fontawesome.com/icons/abacus?s=thin
 * 下个版本会在本文档更新
 * ### 引用方法
 * 
 * ~~~js
 * import { Icon } from 'axel-ui'
 * ~~~
 */
export const Icon: FC<IconProps> = (props) => {

  const { theme, className, ...resetProps } = props

  const classes = classNames('axel-icon', className, {
    [`icon-${theme}`]: theme
  })
  

  return (
    <FontAwesomeIcon className={classes} {...resetProps} />
  )
}

export default Icon
