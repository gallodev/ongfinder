const { RocketService } = require('../services/RocketService');
const api = RocketService();

module.exports = {
    getRocketNextLauncherData : (request, response) => {
        api.getNextLaunch().then((res) => {
            return response.json(res);
        }).catch((err) => {
            return response.json({
                status: err.statusCode,
                error: `Error - ${err.body}`,
            })
        });        
    },
    getRocketUpcomingLaunch : (request, response) => {
        api.getUpcomingLaunch().then((res) => {
            return response.json(res);
        }).catch((err) => {
            return response.json({
                status: err.statusCode,
                error: `Error - ${err.body}`,
            })
        });
    },
    getRocketPastLaunch: (request, response) => {
        api.getPastLaunch().then((res) => {
            return response.json(res);
        }).catch((err) => {
            return response.json({
                status: err.statusCode,
                error: `Error - ${err.body}`,
            });
        });
    },
    getRocketLastestLaunch: (request, response) => {
        api.getLatestLaunch().then((res) => {
            return response.json(res);
        }).catch((err) => {
            return response.json({
                status: err.statusCode,
                error: `Error - ${err.body}`,
            });
        });
    }
}