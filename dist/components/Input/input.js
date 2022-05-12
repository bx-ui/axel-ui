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
import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';
/**
 * 1111
 * ~~~js
 * import { Input } from 'axel-ui'
 * ~~~
 */
export var Input = function (props) {
    var _a;
    var size = props.size, className = props.className, style = props.style, icon = props.icon, clearabled = props.clearabled, prepend = props.prepend, append = props.append, iconTheme = props.iconTheme, onChange = props.onChange, restProps = __rest(props, ["size", "className", "style", "icon", "clearabled", "prepend", "append", "iconTheme", "onChange"]);
    var _b = useState(""), value = _b[0], setValue = _b[1];
    var cnames = classNames('axel-input-wrapper', className, (_a = {},
        _a["input-size-".concat(size)] = size,
        _a['is-disabled'] = props.disabled,
        _a['input-group'] = prepend || append,
        _a['input-group-append'] = !!append,
        _a['input-group-prepand'] = !!prepend,
        _a));
    var handleChange = function (e) {
        if (onChange)
            onChange(e);
        setValue(e.target.value);
    };
    var clearValue = function () {
        setValue('');
        if (domRef) {
            domRef.value = '';
        }
    };
    var domRef = null;
    return (React.createElement("div", { className: cnames },
        prepend && React.createElement("div", { className: "axel-input-group-prepend" }, prepend),
        React.createElement("div", { className: "axel-input-bundle" },
            React.createElement("input", __assign({ ref: function (node) { return domRef = node; }, className: "axel-input-inner", style: style }, restProps, { onChange: handleChange })),
            icon && React.createElement("div", { className: "icon-wrapper" },
                React.createElement(Icon, { icon: icon, theme: iconTheme })),
            (clearabled && value) && (React.createElement("div", { className: "icon-clearable", style: { right: icon ? '30px' : '10px' }, onClick: clearValue },
                React.createElement(Icon, { icon: "xmark", size: "lg" })))),
        append && React.createElement("div", { className: "axel-input-group-append" }, append)));
};
Input.defaultProps = {
    clearabled: false
};
export default Input;
