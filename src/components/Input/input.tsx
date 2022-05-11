import React, { InputHTMLAttributes, ReactElement, FC, CSSProperties, useState, ChangeEventHandler, ChangeEvent } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'

type InputIconTheme = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /** input尺寸 */
  size?: InputSize;
  /** input图标 */
  icon?: IconProp;
  /** 图标主题 */
  iconTheme?: InputIconTheme;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  className?: string;
  style?: CSSProperties;
  clearabled?: boolean;
}

/**
 * 1111
 * ~~~js
 * import { Input } from 'axel-ui'
 * ~~~
 */
export const Input: FC<InputProps> = (props) => {
  const {
    size,
    className,
    style,
    icon,
    clearabled,
    prepend,
    append,
    iconTheme,
    onChange,
    ...restProps
  } = props

  const [value, setValue] = useState<string>("")


  const cnames = classNames('axel-input-wrapper', className, {
    [`input-size-${size}`]: size,
    'is-disabled': props.disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepand': !!prepend
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(onChange) onChange(e)
    setValue(e.target.value)
  }

  const clearValue = () => {
    setValue('')
    if(domRef) {
      domRef.value = ''
    }
  }

  let domRef: HTMLInputElement | null = null;

  return (
    <div className={cnames}>
      {prepend && <div className="axel-input-group-prepend">{prepend}</div>}
      <div className="axel-input-bundle">
        <input
          ref={(node) => domRef = node}
          className="axel-input-inner"
          style={style}
          {...restProps}
          onChange={handleChange}
        />
        {icon && <div className="icon-wrapper"><Icon icon={icon} theme={iconTheme} /></div>}
        {(clearabled && value) && (
            <div className="icon-clearable" style={{ right: icon ? '30px' : '10px' }} onClick={clearValue}><Icon icon="xmark" size="lg" /></div>
        )}
      </div>
      {append && <div className="axel-input-group-append">{append}</div>}
    </div>
  )
}

Input.defaultProps = {
  clearabled: false
}

export default Input
