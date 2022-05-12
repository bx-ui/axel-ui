import { InputHTMLAttributes, ReactElement, FC, CSSProperties } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'lg' | 'sm';
declare type InputIconTheme = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
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
export declare const Input: FC<InputProps>;
export default Input;
