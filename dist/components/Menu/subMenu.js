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
import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import Transition from '../Transition/transition';
var SubMenu = function (props) {
    var className = props.className, style = props.style, title = props.title, children = props.children, index = props.index;
    var _a = useState(false), menuOpen = _a[0], setOpen = _a[1];
    var context = useContext(MenuContext);
    var activeClass = function () {
        var reg = context.index.match(/(\S*)-/);
        var parentIndex = reg ? reg[1] : null;
        return (context.relationParentActive && (parentIndex === null || parentIndex === void 0 ? void 0 : parentIndex.toString()) === index) || context.index === index;
    };
    var classes = classNames('submenu-item menu-item', className, {
        'is-active': activeClass()
    });
    var renderChildren = function () {
        var subMenuClasses = classNames('axel-submenu', {
            'menu-opened': menuOpen
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: "".concat(index, "-").concat(i)
                });
            }
            else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component");
            }
        });
        return (React.createElement(Transition, { in: menuOpen, timeout: 300, animation: "zoom-in-top", unmountOnExit: true, appear: true },
            React.createElement("ul", { className: subMenuClasses }, childrenComponent)));
    };
    var handleClick = function () {
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, trigger) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(trigger);
        }, 300);
    };
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    return (React.createElement("li", __assign({ key: index, className: classes, style: style }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents), title),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
