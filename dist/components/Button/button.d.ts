import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, CSSProperties } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type ButtonType = 'primary' | 'danger' | 'success' | 'link' | 'default';
declare type ButtonSize = 'lg' | 'sm' | 'normal';
declare type ButtonShape = 'default' | 'circle';
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
    style?: CSSProperties;
    /** 按钮的后置icon */
    appendIcon?: IconProp;
    /** 按钮的前置icon */
    prependIcon?: IconProp;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = NativeButtonProps & AnchorButtonProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export default Button;
