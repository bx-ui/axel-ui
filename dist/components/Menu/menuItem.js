import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
var MenuItem = function (props) {
    var children = props.children, className = props.className, disabled = props.disabled, style = props.style, index = props.index;
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        if (index)
            context.onChange(index);
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.defaultProps = {
    disabled: false
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
