import React, { useState } from 'react';
import classNames from 'classnames';
import Transition from '../Transition/transition';
export var Alert = function (props) {
    var _a;
    var className = props.className, type = props.type, style = props.style, message = props.message, description = props.description, showIcon = props.showIcon, closeable = props.closeable, onClose = props.onClose;
    var _b = useState(true), showAlert = _b[0], setShowAlert = _b[1];
    var classes = classNames('axel-alert', className, (_a = {},
        _a["alert-".concat(type)] = type,
        _a));
    var closeAlert = function () {
        setShowAlert(false);
        onClose && onClose();
    };
    return (React.createElement(Transition, { animation: "zoom-in-top", in: showAlert, timeout: 2000, unmountOnExit: true, wrapper: true },
        React.createElement("div", { className: classes, style: style },
            React.createElement("div", { className: "alert-message" },
                showIcon && React.createElement("div", { className: "icon" }),
                React.createElement("div", { className: "message" }, message)),
            React.createElement("div", { className: "alert-description" }, description),
            closeable && React.createElement("div", { className: "alert-close", onClick: closeAlert }, "x"))));
};
Alert.defaultProps = {
    showIcon: false
};
export default Alert;
