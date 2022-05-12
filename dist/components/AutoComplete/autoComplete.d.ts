import { ReactElement, FC } from 'react';
import { InputProps } from '../Input/input';
declare type DataSourceObject = {
    value: string;
};
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    /** 搜索的函数 */
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    /** 选择下拉框的回调 */
    onSelect?: (item: DataSourceType) => void;
    /** 自定义模版 */
    renderOption?: (item: DataSourceType) => ReactElement;
}
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
