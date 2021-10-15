"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketService = void 0;
var request = require('request');
var getURL = require('./RocketConfig').getURL;
var RocketService = function () {
    var fetchPromise = function (requestURL) {
        return new Promise(function (resolve, reject) {
            request.get(requestURL, function (error, response, body) {
                if (response.statusCode !== 200) {
                    return reject(response);
                }
                return resolve(JSON.parse(response.body));
            });
        });
    };
    var getLatestLaunch = function () {
        var resource = "latest";
        var requestURL = getURL + resource;
        return fetchPromise(requestURL);
    };
    var getNextLaunch = function () {
        var resource = 'next';
        var requestURL = getURL + resource;
        return fetchPromise(requestURL);
    };
    var getUpcomingLaunch = function () {
        var resource = 'upcoming';
        var requestURL = getURL + resource;
        return fetchPromise(requestURL);
    };
    var getPastLaunch = function () {
        var resource = 'past';
        var requestURL = getURL + resource;
        return fetchPromise(requestURL);
    };
    return {
        getNextLaunch: getNextLaunch,
        getLatestLaunch: getLatestLaunch,
        getUpcomingLaunch: getUpcomingLaunch,
        getPastLaunch: getPastLaunch,
    };
};
exports.RocketService = RocketService;
