import { InputHTMLAttributes, ReactElement, FC, CSSProperties } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'lg' | 'sm';
declare type InputIconTheme = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    size?: InputSize;
    icon?: IconProp;
    iconTheme?: InputIconTheme;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    className?: string;
    style?: CSSProperties;
    clearabled?: boolean;
}
declare const Input: FC<InputProps>;
export default Input;
