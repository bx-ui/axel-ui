import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, CSSProperties } from 'react';
declare type ButtonType = 'primary' | 'danger' | 'success' | 'link' | 'default';
declare type ButtonSize = 'lg' | 'sm' | 'normal';
declare type ButtonShape = 'default' | 'circle';
export interface BaseButtonProps {
    btnType?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
    href?: string;
    className?: string;
    children?: ReactNode;
    block?: boolean;
    loading?: boolean;
    shape?: ButtonShape;
    style?: CSSProperties;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = NativeButtonProps & AnchorButtonProps;
declare const Button: FC<ButtonProps>;
export default Button;
