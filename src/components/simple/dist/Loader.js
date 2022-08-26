"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var Loader = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#000" : _b, _c = _a.size, size = _c === void 0 ? "normal" : _c;
    return (React.createElement(LoaderWrapper, { color: color, size: size },
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement("div", null)));
};
var LoaderWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  aspect-ratio: 2;\n  ", "\n\n  div {\n    position: absolute;\n    top: 41%;\n    width: 16%;\n    height: 32%;\n    border-radius: 50%;\n    background: ", ";\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n\n    &:nth-child(1) {\n      left: 10%;\n      animation: lds-ellipsis1 0.6s infinite;\n    }\n    &:nth-child(2) {\n      left: 10%;\n      animation: lds-ellipsis2 0.6s infinite;\n    }\n    &:nth-child(3) {\n      left: 40%;\n      animation: lds-ellipsis2 0.6s infinite;\n    }\n    &:nth-child(4) {\n      left: 70%;\n      animation: lds-ellipsis3 0.6s infinite;\n    }\n  }\n\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(180%, 0);\n    }\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  aspect-ratio: 2;\n  ",
    "\n\n  div {\n    position: absolute;\n    top: 41%;\n    width: 16%;\n    height: 32%;\n    border-radius: 50%;\n    background: ", ";\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n\n    &:nth-child(1) {\n      left: 10%;\n      animation: lds-ellipsis1 0.6s infinite;\n    }\n    &:nth-child(2) {\n      left: 10%;\n      animation: lds-ellipsis2 0.6s infinite;\n    }\n    &:nth-child(3) {\n      left: 40%;\n      animation: lds-ellipsis2 0.6s infinite;\n    }\n    &:nth-child(4) {\n      left: 70%;\n      animation: lds-ellipsis3 0.6s infinite;\n    }\n  }\n\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(180%, 0);\n    }\n  }\n"])), function (_a) {
    var size = _a.size;
    if (size === "normal")
        return "width: 80px;";
    else if (size === "big")
        return "width: 100px;";
}, function (_a) {
    var color = _a.color;
    return color;
});
exports["default"] = Loader;
var templateObject_1;
