import { CSSProperties, FC, ReactNode } from 'react';
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
