import React from 'react';
import Icon from '../Icon/icon';
import Progress from '../Progress/progress';
var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (React.createElement("ul", { className: "axel-upload-list" }, fileList.map(function (file) {
        return (React.createElement("li", { className: "axel-upload-list-item", key: file.uid },
            React.createElement("span", { className: "file-name file-name-".concat(file.status) },
                React.createElement(Icon, { icon: "file-alt", theme: "secondary", className: "file-alit-icon" }),
                file.name),
            React.createElement("span", { className: "file-stauts" },
                (file.status === 'uploading' || file.status === 'ready') && React.createElement(Icon, { icon: "spinner", spin: true, theme: "primary" }),
                file.status === 'success' && React.createElement(Icon, { icon: "check-circle", theme: "success" }),
                file.status === 'error' && React.createElement(Icon, { icon: "times-circle", theme: "danger" })),
            React.createElement("span", { className: "file-actions" },
                React.createElement(Icon, { icon: "times", onClick: function () { onRemove(file); } })),
            file.status === 'uploading' && React.createElement(Progress, { percent: file.percent || 0 })));
    })));
};
export default UploadList;
