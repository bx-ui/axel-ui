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
import React, { useState } from 'react';
import Button from './components/Button/button';
import Alert from './components/Alert/alert';
import './App.css';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Input from './components/Input/input';
import AutoComplete from './components/AutoComplete/autoComplete';
import Upload from './components/Upload/upload';
function App() {
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var clickMe = function () {
        console.log("you clicked me!!!");
    };
    var onClose = function () {
        console.log('4444');
    };
    var handleChange = function (e) {
        setValue(e.target.value);
    };
    var fetchSuggestions = function (str) {
        // const data: DataObject[] = [
        //   {
        //     value: '林青霞',
        //     number: 1
        //   },
        //   {
        //     value: '甄子丹',
        //     number: 2
        //   },
        //   {
        //     value: '成龙',
        //     number: 3
        //   }
        // ]
        // return data.filter(item => item.value.includes(str))
        return fetch("https://api.github.com/search/users?q=".concat(str))
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            return items.slice(0, 10).map(function (item) { return (__assign({ value: item.login }, item)); });
        });
    };
    var onProgress = function (percentage, file) {
        console.log(percentage);
    };
    var onSuccess = function (response, file) {
        console.log(response);
    };
    var onError = function (error, file) {
        console.log(error);
    };
    var defaultFileList = [
        { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
        { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
        { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
    ];
    return (React.createElement("div", null,
        React.createElement(Button, { disabled: true }, "button"),
        React.createElement(Button, { disabled: true, size: "lg" }, "button"),
        React.createElement(Button, { disabled: true, size: "sm" }, "button"),
        React.createElement(Button, { disabled: true, size: "sm", btnType: "primary" }, "button"),
        React.createElement(Button, { disabled: true, size: "sm", btnType: "danger" }, "button"),
        React.createElement(Button, { disabled: true, size: "sm", btnType: "success" }, "button"),
        React.createElement(Button, { disabled: true, size: "sm", btnType: "success" }, "button"),
        React.createElement(Button, { size: "sm", btnType: "success", shape: "circle" }, "circle"),
        React.createElement(Button, { size: "sm", btnType: "success", block: true, onClick: clickMe }, "button"),
        React.createElement("div", { style: { width: '600px', margin: '20px' } },
            React.createElement(Alert, { type: "primary", message: "1111", description: React.createElement("div", null, "22222334556765432") }),
            React.createElement(Alert, { style: { marginTop: '10px' }, type: "success", message: "1111", description: React.createElement("div", null, "22222334556765432") }),
            React.createElement(Alert, { style: { marginTop: '10px' }, type: "warning", message: "1111", description: React.createElement("div", null, "22222334556765432") }),
            React.createElement(Alert, { closeable: true, style: { marginTop: '10px' }, type: "danger", message: "1111", description: React.createElement("div", null, "22222334556765432"), onClose: onClose })),
        React.createElement(Menu, null,
            React.createElement(MenuItem, null, "item1"),
            React.createElement(MenuItem, { disabled: true }, "item2"),
            React.createElement(MenuItem, null, "item3"),
            React.createElement(SubMenu, { title: "item4" },
                React.createElement(MenuItem, null, "item4-1"),
                React.createElement(MenuItem, null, "item4-2"),
                React.createElement(MenuItem, null, "item4-3"))),
        React.createElement(Menu, { mode: "vertical" },
            React.createElement(MenuItem, { index: "0" }, "item1"),
            React.createElement(MenuItem, { index: "1", disabled: true }, "item2"),
            React.createElement(MenuItem, { index: "2" }, "item3"),
            React.createElement(SubMenu, { title: "item4" },
                React.createElement(MenuItem, null, "item4-1"),
                React.createElement(MenuItem, null, "item4-2"),
                React.createElement(MenuItem, null, "item4-3"))),
        React.createElement("div", null,
            React.createElement(Icon, { icon: "apple-whole", theme: "primary" }),
            React.createElement(Button, { btnType: "link", href: "https://fontawesome.com/icons/apple-whole?s=solid" }, "icon\u56FE\u6807\u4F7F\u7528\u94FE\u63A5")),
        React.createElement("div", { style: { padding: '0px 30px' } },
            React.createElement(Input, { prepend: React.createElement("div", null, "https://"), placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", icon: "apple-whole", append: React.createElement("div", null, ".com"), value: value, onChange: handleChange }),
            React.createElement(Input, { prepend: React.createElement("div", null, "https://"), size: "lg", placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", icon: "apple-whole", iconTheme: "primary" }),
            React.createElement(Input, { prepend: React.createElement("div", null, "https://"), size: "sm", placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", icon: "apple-whole", disabled: true })),
        React.createElement("div", { style: { padding: '0px 30px' } },
            React.createElement(AutoComplete, { fetchSuggestions: fetchSuggestions })),
        React.createElement("div", { style: { height: '200px' } }),
        React.createElement("div", null,
            React.createElement(Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", onProgress: onProgress, onSuccess: onSuccess, onError: onError, defaultFileList: defaultFileList, multiple: true }))));
}
export default App;
