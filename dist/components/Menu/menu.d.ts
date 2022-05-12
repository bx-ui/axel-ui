import React, { CSSProperties, FC, ReactNode } from 'react';
declare type MenuMode = 'vertical' | 'horizontal';
declare type ChangeCallback = (index: string) => void;
export interface IMenuContext {
    index?: string;
    onChange?: ChangeCallback;
    mode?: MenuMode;
    relationParentActive?: boolean;
}
export interface MenuProps {
    mode?: MenuMode;
    className?: string;
    style?: CSSProperties;
    onChange?: ChangeCallback;
    defaultIndex?: string;
    children?: ReactNode;
    /** 是否于父级menuitem关联 */
    relationParentActive?: boolean;
}
export declare const MenuContext: React.Context<IMenuContext>;
export declare const Menu: FC<MenuProps>;
export default Menu;
