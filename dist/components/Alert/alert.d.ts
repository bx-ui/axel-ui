import { ReactNode, CSSProperties, FC } from 'react';
declare type AlertType = 'success' | 'primary' | 'warning' | 'danger';
export interface AlertProps {
    /** 标题 */
    message?: ReactNode;
    /** 详细信息 */
    description?: ReactNode;
    /** 是否可以关闭 */
    closeable?: boolean;
    /** 自定义关闭文案 将在下一版本推出 */
    closeText?: ReactNode;
    /** Alert类型 */
    type?: AlertType;
    /** 关闭的回调事件 */
    onClose?: () => void;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 子组件 */
    children?: ReactNode;
    /** 是否展示对应type的图标 将在下一版本推出 */
    showIcon?: boolean;
}
export declare const Alert: FC<AlertProps>;
export default Alert;
