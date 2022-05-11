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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useRef, useState } from 'react';
import Button from '../Button/button';
import axios from 'axios';
import UploadList from './uploadList';
var Upload = function (props) {
    var action = props.action, defaultFileList = props.defaultFileList, beforeUpload = props.beforeUpload, onProgress = props.onProgress, onChange = props.onChange, onError = props.onError, onSuccess = props.onSuccess, onRemove = props.onRemove, headers = props.headers, name = props.name, data = props.data, withCredentials = props.withCredentials, multiple = props.multiple, accept = props.accept;
    var fileInput = useRef(null);
    var _a = useState(defaultFileList || []), fileList = _a[0], setFileList = _a[1];
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevFileList) {
            return prevFileList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleClick = function () {
        if (fileInput.current)
            fileInput.current.click();
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + 'upload-file',
            size: file.size,
            name: file.name,
            status: 'ready',
            percent: 0,
            raw: file
        };
        // setFileList([_file, ...fileList])
        setFileList(function (prevList) {
            return __spreadArray([_file], prevList, true);
        });
        var formData = new FormData();
        formData.append(name || 'file', file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios.post(action, formData, {
            headers: __assign(__assign({}, headers), { 'Content-Type': 'multipart/form-data' }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                updateFileList(_file, { status: 'uploading', percent: percentage });
                if (percentage < 100) {
                    if (onProgress)
                        onProgress(percentage, file);
                }
            }
        })
            .then(function (resp) {
            updateFileList(_file, { status: 'success', response: resp.data });
            if (onSuccess)
                onSuccess(resp, file);
            if (onChange)
                onChange(file);
        })
            .catch(function (error) {
            updateFileList(_file, { status: 'error', response: error });
            if (onError)
                onError(error, file);
            if (onChange)
                onChange(file);
        });
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (beforeUpload) {
                var result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    result.then(function (processedFile) { return post(processedFile); });
                }
                else if (result !== false) {
                    post(file);
                }
                return;
            }
            post(file);
        });
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files)
            return;
        uploadFiles(files);
        if (fileInput.current)
            fileInput.current.value = '';
    };
    var handleFileRemove = function (file) {
        var list = fileList.filter(function (item) { return item.uid !== file.uid; });
        setFileList(list);
        if (onRemove)
            onRemove(file);
    };
    return (React.createElement("div", { className: "axel-upload-component" },
        React.createElement(Button, { btnType: "primary", onClick: handleClick }, "\u4E0A\u4F20"),
        React.createElement("input", { className: "axel-upload-input", style: { display: 'none' }, type: "file", ref: fileInput, onChange: handleFileChange, multiple: multiple, accept: accept }),
        React.createElement(UploadList, { fileList: fileList, onRemove: handleFileRemove })));
};
Upload.defaultProps = {
    name: 'file',
    withCredentials: false
};
export default Upload;
