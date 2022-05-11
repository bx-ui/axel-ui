import { ReactNode, CSSProperties, FC } from 'react';
declare type AlertType = 'success' | 'primary' | 'warning' | 'danger';
export interface AlertProps {
    message?: ReactNode;
    description?: ReactNode;
    closeable?: boolean;
    closeText?: ReactNode;
    type?: AlertType;
    onClose?: () => void;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    showIcon?: boolean;
}
declare const Alert: FC<AlertProps>;
export default Alert;
