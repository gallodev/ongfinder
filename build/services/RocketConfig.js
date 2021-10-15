"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getURL = void 0;
var config = {
    URL: "https://api.spacexdata.com/",
    VERSION: 'v4',
    RESOURCE: '/launches/'
};
var getURL = config.URL + config.VERSION + config.RESOURCE;
exports.getURL = getURL;
