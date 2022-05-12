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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Input from '../Input/input';
import Icon from '../Icon/icon';
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutSide';
import Transition from '../Transition/transition';
export var AutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, renderOption = props.renderOption, restProps = __rest(props, ["fetchSuggestions", "onSelect", "renderOption"]);
    var _a = useState(''), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState([]), suggestions = _b[0], setSuggestions = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(-1), highlightIndex = _d[0], setHighlightIndex = _d[1];
    var _e = useState(false), showDropdown = _e[0], setShowDropdown = _e[1];
    var debouncedValue = useDebounce(inputValue, 500);
    var triggerSearch = useRef(false);
    var componentRef = useRef(null);
    useClickOutside(componentRef, function () {
        setSuggestions([]);
    });
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    };
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        if (index > suggestions.length)
            index = suggestions.length;
        setHighlightIndex(index);
    };
    var handleKeyDown = function (e) {
        switch (e.keyCode) {
            case 13:
                if (suggestions[highlightIndex])
                    handleSelect(suggestions[highlightIndex]);
                break;
            case 38:
                highlight(highlightIndex - 1);
                break;
            case 40:
                highlight(highlightIndex + 1);
                break;
            case 27:
                setSuggestions([]);
                break;
        }
    };
    var handleSelect = function (item) {
        setInputValue(item.value);
        setSuggestions([]);
        if (onSelect)
            onSelect(item);
        triggerSearch.current = false;
    };
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var generateDropdown = function () {
        return (React.createElement(Transition, { in: showDropdown || loading, animation: "zoom-in-top", timeout: 300, onExited: function () { setSuggestions([]); } },
            React.createElement("ul", { className: "axel-suggestion-list" },
                loading &&
                    React.createElement("div", { className: "suggstions-loading-icon" },
                        React.createElement(Icon, { icon: "spinner", spin: true })),
                suggestions.map(function (item, index) {
                    var cnames = classNames('suggestion-item', {
                        'is-selected': highlightIndex === index
                    });
                    return (React.createElement("li", { className: cnames, key: index, onClick: function () { return handleSelect(item); } }, renderTemplate(item)));
                }))));
    };
    useEffect(function () {
        if (debouncedValue && triggerSearch.current) {
            var result = fetchSuggestions(debouncedValue);
            if (result instanceof Promise) {
                setLoading(true);
                result.then(function (res) {
                    setSuggestions(res);
                    setLoading(false);
                    if (res.length > 0) {
                        setShowDropdown(true);
                    }
                    else {
                        setShowDropdown(false);
                    }
                });
            }
            else {
                setSuggestions(result);
                setShowDropdown(false);
                if (result.length > 0)
                    setShowDropdown(true);
            }
        }
        else {
            setSuggestions([]);
            setShowDropdown(false);
        }
    }, [debouncedValue]);
    return (React.createElement("div", { className: "axel-auto-complete", ref: componentRef },
        React.createElement(Input, __assign({}, restProps, { value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown })),
        generateDropdown()));
};
export default AutoComplete;
