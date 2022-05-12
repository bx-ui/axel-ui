import { FC, ReactNode } from 'react';
export interface ModalContentProps {
    title?: string;
    width?: string | number;
    children?: ReactNode;
    onClose: () => void;
    confirmLoading?: boolean;
}
declare const ModalContent: FC<ModalContentProps>;
export default ModalContent;
