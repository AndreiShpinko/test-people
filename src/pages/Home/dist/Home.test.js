"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("@testing-library/react");
var axios_1 = require("axios");
require("@testing-library/jest-dom");
var react_router_dom_1 = require("react-router-dom");
var react_alert_1 = require("react-alert");
var Home_1 = require("./Home");
jest.mock("axios");
var AlertTemplate = require("react-alert-template-basic")["default"];
describe("Home: ", function () {
    beforeEach(function () {
        var mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: function () { return null; },
            unobserve: function () { return null; },
            disconnect: function () { return null; }
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });
    afterEach(function () {
        jest.restoreAllMocks();
    });
    test("should display 'loader', and then 'error'", function () { return __awaiter(void 0, void 0, void 0, function () {
        var axiosResponse, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    axiosResponse = new Error();
                    jest.spyOn(axios_1["default"], "get").mockResolvedValueOnce(axiosResponse);
                    react_1.render(React.createElement(react_alert_1.Provider, { template: AlertTemplate, timeout: 3000, position: react_alert_1.positions.BOTTOM_CENTER },
                        React.createElement(react_router_dom_1.MemoryRouter, null,
                            React.createElement(Home_1["default"], null))));
                    expect(react_1.screen.getByTestId("loader")).toBeInTheDocument();
                    _a = expect;
                    return [4 /*yield*/, react_1.screen.findByTestId("error")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    test("should display 'loader', and then 'panel', 'user-list', 'card-wrapper'", function () { return __awaiter(void 0, void 0, void 0, function () {
        var axiosResponse, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    axiosResponse = {
                        data: {
                            data: ["123", "234", "345"]
                        }
                    };
                    jest.spyOn(axios_1["default"], "get").mockResolvedValueOnce(axiosResponse);
                    react_1.render(React.createElement(react_alert_1.Provider, { template: AlertTemplate, timeout: 3000, position: react_alert_1.positions.BOTTOM_CENTER },
                        React.createElement(react_router_dom_1.MemoryRouter, null,
                            React.createElement(Home_1["default"], null))));
                    expect(react_1.screen.getByTestId("loader")).toBeInTheDocument();
                    _a = expect;
                    return [4 /*yield*/, react_1.screen.findByTestId("panel")];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toBeInTheDocument();
                    _b = expect;
                    return [4 /*yield*/, react_1.screen.findByTestId("users-list")];
                case 2:
                    _b.apply(void 0, [_c.sent()]).toBeInTheDocument();
                    react_1.waitFor(function () { return __awaiter(void 0, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = expect;
                                    return [4 /*yield*/, react_1.screen.findAllByTestId("card-wrapper")];
                                case 1:
                                    _a.apply(void 0, [(_b.sent()).length]).toBe(3);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    }); });
});
