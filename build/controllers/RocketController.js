var RocketService = require('../services/RocketService').RocketService;
var api = RocketService();
module.exports = {
    getRocketNextLauncherData: function (request, response) {
        api.getNextLaunch().then(function (res) {
            return response.json(res);
        }).catch(function (err) {
            return response.json({
                status: err.statusCode,
                error: "Error - " + err.body,
            });
        });
    },
    getRocketUpcomingLaunch: function (request, response) {
        api.getUpcomingLaunch().then(function (res) {
            return response.json(res);
        }).catch(function (err) {
            return response.json({
                status: err.statusCode,
                error: "Error - " + err.body,
            });
        });
    },
    getRocketPastLaunch: function (request, response) {
        api.getPastLaunch().then(function (res) {
            return response.json(res);
        }).catch(function (err) {
            return response.json({
                status: err.statusCode,
                error: "Error - " + err.body,
            });
        });
    },
    getRocketLastestLaunch: function (request, response) {
        api.getLatestLaunch().then(function (res) {
            return response.json(res);
        }).catch(function (err) {
            return response.json({
                status: err.statusCode,
                error: "Error - " + err.body,
            });
        });
    }
};
