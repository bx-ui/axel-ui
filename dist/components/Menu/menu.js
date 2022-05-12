import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({ index: '0' });
export var Menu = function (props) {
    var _a;
    var className = props.className, mode = props.mode, children = props.children, style = props.style, defaultIndex = props.defaultIndex, onChange = props.onChange, relationParentActive = props.relationParentActive;
    var _b = useState(defaultIndex), currentIndex = _b[0], setIndex = _b[1];
    var classes = classNames('axel-menu', className, (_a = {},
        _a["menu-".concat(mode)] = mode,
        _a));
    var handleClick = function (index) {
        if (index === currentIndex)
            return;
        setIndex(index);
        if (onChange)
            onChange(index);
    };
    var passedContext = {
        index: currentIndex ? currentIndex : '0',
        onChange: handleClick,
        mode: mode,
        relationParentActive: relationParentActive
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    mode: 'horizontal',
    defaultIndex: '0',
    relationParentActive: false
};
export default Menu;
