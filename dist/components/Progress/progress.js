import React from 'react';
var Progress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, style = props.style, theme = props.theme;
    return (React.createElement("div", { className: "axel-progress-bar" },
        React.createElement("div", { className: "axel-progress-outer" },
            React.createElement("div", { className: "axel-progress-inner color-".concat(theme), style: { width: "".concat(percent, "%") } }, showText && React.createElement("span", null,
                percent,
                "%")))));
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: 'primary'
};
export default Progress;
