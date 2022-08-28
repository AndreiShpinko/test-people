"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Title_1 = require("../../components/ui/Title/Title");
var Subtitle_1 = require("../../components/ui/Subtitle/Subtitle");
var Loader_1 = require("../../components/simple/Loader");
var Container_1 = require("../../components/simple/Container");
var Card_1 = require("../../components/ordinary/Card/Card");
var Button_1 = require("../../components/ui/Button/Button");
var react_alert_1 = require("react-alert");
var services_1 = require("../../core/services");
var Fade = require("react-reveal/Fade");
var Home = function () {
    var alert = react_alert_1.useAlert();
    // empty array, array with data
    var _a = react_1.useState([]), userList = _a[0], setUserList = _a[1];
    var _b = react_1.useState(false), gettingRequest = _b[0], setGettingRequest = _b[1];
    var _c = react_1.useState(false), error = _c[0], setError = _c[1];
    var getRandomUsersFunc = function () {
        services_1["default"].getRandomUsers()
            .then(function (res) { return res.data; })
            .then(function (_a) {
            var data = _a.data;
            if (data) {
                setUserList(data);
                setError(false);
            }
            else
                setError(true);
        })["catch"](function (error) {
            console.log(error);
            setError(true);
        })["finally"](function () {
            setGettingRequest(false);
        });
    };
    react_1.useEffect(function () {
        getRandomUsersFunc();
    }, []);
    var handlerBtnReload = function () {
        setGettingRequest(true);
        getRandomUsersFunc();
    };
    react_1.useEffect(function () {
        if (error)
            alert.error("Sorry, we have an error");
    }, [error]);
    return (React.createElement(Wrapper, null, !userList.length && !error ? (React.createElement(WrapperLoader, { "data-testid": "loader" },
        React.createElement(Loader_1["default"], { size: "big" }))) : (React.createElement(Container_1["default"], null,
        React.createElement(Panel, { "data-testid": "panel" },
            React.createElement(Button_1["default"], { click: handlerBtnReload },
                React.createElement(Subtitle_1["default"], null, "Reload")),
            React.createElement(Fade, { duration: 300, when: gettingRequest },
                React.createElement(Loader_1["default"], null))),
        React.createElement(Fade, { duration: 300, when: error },
            React.createElement("div", { "data-testid": "error" },
                React.createElement(Title_1["default"], null, "Error"))),
        React.createElement(Fade, { left: true, opposite: true, when: !gettingRequest && !error },
            React.createElement(List, { "data-testid": "users-list" }, userList.map(function (userID) {
                return (React.createElement(Item, { key: userID, "data-testid": "card-wrapper" },
                    React.createElement(Card_1["default"], { userID: userID })));
            })))))));
};
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
var Panel = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n"])));
var WrapperLoader = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"])));
var List = styled_components_1["default"].ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  column-gap: 10px;\n  row-gap: 10px;\n  grid-template-columns: repeat(5, 1fr);\n\n  @media screen and (max-width: 767px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"], ["\n  display: grid;\n  column-gap: 10px;\n  row-gap: 10px;\n  grid-template-columns: repeat(5, 1fr);\n\n  @media screen and (max-width: 767px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])));
var Item = styled_components_1["default"].li(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  aspect-ratio: 3/2;\n"], ["\n  aspect-ratio: 3/2;\n"])));
exports["default"] = Home;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
