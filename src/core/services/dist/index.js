"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var Services = {
    getRandomUsers: function () {
        var _a = process.env, REACT_APP_API_URL = _a.REACT_APP_API_URL, REACT_APP_JWT = _a.REACT_APP_JWT;
        return axios_1["default"](REACT_APP_API_URL + "/list", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + REACT_APP_JWT
            }
        });
    },
    getUserByID: function (ID) {
        var _a = process.env, REACT_APP_API_URL = _a.REACT_APP_API_URL, REACT_APP_JWT = _a.REACT_APP_JWT;
        return axios_1["default"](REACT_APP_API_URL + "/get/" + ID, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + REACT_APP_JWT
            }
        });
    }
};
exports["default"] = Services;
