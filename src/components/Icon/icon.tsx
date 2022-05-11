import React, { FC } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: FC<IconProps> = (props) => {

  const { theme, className, ...resetProps } = props

  const classes = classNames('axel-icon', className, {
    [`icon-${theme}`]: theme
  })
  

  return (
    <FontAwesomeIcon className={classes} {...resetProps} />
  )
}

export default Icon
