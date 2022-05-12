import React, { useState } from 'react';
import Icon from '../Icon';
import Button from '../Button';
var ModalContent = function (props) {
    var title = props.title, children = props.children, onClose = props.onClose, confirmLoading = props.confirmLoading;
    var _a = useState(false), isClickConfirm = _a[0], setCheckConfirm = _a[1];
    var handleClose = function () {
        onClose();
    };
    var handleConfirm = function () {
        setCheckConfirm(true);
    };
    return (React.createElement("div", { className: "modal-content" },
        React.createElement("div", { className: "modal-content-header" },
            React.createElement("span", { className: "title" }, title),
            React.createElement(Icon, { icon: "xmark", onClick: handleClose })),
        React.createElement("div", { className: "modal-content-container" }, children),
        React.createElement("div", { className: "modal-content-footer" },
            React.createElement(Button, { btnType: "primary", loading: confirmLoading && isClickConfirm, onClick: handleConfirm }, "\u63D0\u4EA4"),
            React.createElement(Button, { onClick: handleClose }, "\u5173\u95ED"))));
};
export default ModalContent;
