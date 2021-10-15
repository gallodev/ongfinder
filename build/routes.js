var express = require('express');
var routes = express.Router();
var RocketController = require('./controllers/RocketController');
routes.get('/', function (request, response) {
    return response.send("It's works");
});
routes.get('/api/rocket/upcoming', RocketController.getRocketUpcomingLaunch);
routes.get('/api/rocket/past', RocketController.getRocketPastLaunch);
routes.get('/api/rocket/next', RocketController.getRocketNextLauncherData);
routes.get('/api/rocket/latest', RocketController.getRocketLastestLaunch);
module.exports = routes;
