import { CSSProperties, FC, ReactNode } from 'react';
export interface ModalProps {
    title?: string;
    visible: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    confirmLoading?: boolean;
}
export declare const Modal: FC<ModalProps>;
export default Modal;
