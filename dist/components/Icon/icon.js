var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
/**
 * 图标暂时不会列举到文档中， 如有需要请移步: https://fontawesome.com/icons/abacus?s=thin
 * 下个版本会在本文档更新
 * ### 引用方法
 *
 * ~~~js
 * import { Icon } from 'axel-ui'
 * ~~~
 */
export var Icon = function (props) {
    var _a;
    var theme = props.theme, className = props.className, resetProps = __rest(props, ["theme", "className"]);
    var classes = classNames('axel-icon', className, (_a = {},
        _a["icon-".concat(theme)] = theme,
        _a));
    return (React.createElement(FontAwesomeIcon, __assign({ className: classes }, resetProps)));
};
export default Icon;
