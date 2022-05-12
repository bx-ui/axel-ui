import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Partal from '../Partal';
import ModalOverlay from './ModalOverlay';
import ModalContent from './ModalContent';
import Transition from '../Transition';
export var Modal = function (props) {
    var title = props.title, visible = props.visible, onOk = props.onOk, onCancel = props.onCancel, className = props.className, style = props.style, children = props.children, confirmLoading = props.confirmLoading;
    var _a = useState(visible), modalShow = _a[0], setModalShow = _a[1];
    var classes = classNames('axel-modal');
    useEffect(function () {
        var body = document.body;
        if (visible) {
            body.classList.add('body-overflow-hidden');
            setModalShow(true);
        }
        else {
            body.classList.remove("body-overflow-hidden");
        }
    }, [visible]);
    var handleClose = function () {
        setModalShow(false);
        if (onCancel)
            onCancel();
    };
    return (React.createElement(Partal, null,
        React.createElement(Transition, { in: modalShow, timeout: 200, className: "modal", unmountOnExit: true, appear: true },
            React.createElement(ModalOverlay, { onClose: handleClose })),
        React.createElement(Transition, { in: modalShow, timeout: 500, animation: "zoom-in-left", unmountOnExit: true, appear: true },
            React.createElement("div", { className: classes },
                React.createElement(ModalContent, { title: title, onClose: handleClose, confirmLoading: confirmLoading }, children)))));
};
export default Modal;
