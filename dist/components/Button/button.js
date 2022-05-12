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
import classNames from "classnames";
import Icon from '../Icon';
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export var Button = function (props) {
    var _a;
    var className = props.className, disabled = props.disabled, size = props.size, btnType = props.btnType, children = props.children, href = props.href, block = props.block, style = props.style, shape = props.shape, loading = props.loading, prependIcon = props.prependIcon, appendIcon = props.appendIcon, resetProps = __rest(props, ["className", "disabled", "size", "btnType", "children", "href", "block", "style", "shape", "loading", "prependIcon", "appendIcon"]);
    var classes = classNames('axel-button', className, (_a = {
            'disabled': disabled
        },
        _a["btn-".concat(size)] = size,
        _a["btn-".concat(btnType)] = btnType,
        _a['btn-block'] = block,
        _a["btn-".concat(shape)] = shape,
        _a['btn-loading'] = loading,
        _a));
    if (btnType === 'link' && href) {
        return (React.createElement("a", __assign({ href: href, className: classes }, resetProps, { style: style }), children));
    }
    return (React.createElement("button", __assign({ className: classes }, resetProps, { style: style }),
        loading && React.createElement(Icon, { icon: "spinner", spin: true }),
        (!loading && prependIcon) && React.createElement(Icon, { icon: prependIcon }),
        children,
        (!loading && appendIcon) && React.createElement(Icon, { icon: appendIcon })));
};
Button.defaultProps = {
    disabled: false,
    block: false,
    loading: false
};
export default Button;
