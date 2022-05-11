import { ReactNode, CSSProperties, FC } from 'react';
export interface SubMenuProps {
    title?: ReactNode;
    index?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
