import React from 'react';
var ModalOverlay = function (props) {
    var onClose = props.onClose;
    var handleClose = function () {
        onClose();
    };
    return React.createElement("div", { className: "modal-overlay", onClick: handleClose });
};
export default ModalOverlay;
