import { FC } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
/**
 * 图标暂时不会列举到文档中， 如有需要请移步: https://fontawesome.com/icons/abacus?s=thin
 * 下个版本会在本文档更新
 * ### 引用方法
 *
 * ~~~js
 * import { Icon } from 'axel-ui'
 * ~~~
 */
export declare const Icon: FC<IconProps>;
export default Icon;
