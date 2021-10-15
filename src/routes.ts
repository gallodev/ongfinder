const express = require('express');
const routes = express.Router();
const RocketController = require('./controllers/RocketController');

routes.get('/',(request,response) => {
    return response.send("It's works");
});

routes.get('/api/rocket/upcoming', RocketController.getRocketUpcomingLaunch);
routes.get('/api/rocket/past' , RocketController.getRocketPastLaunch);
routes.get('/api/rocket/next' , RocketController.getRocketNextLauncherData);
routes.get('/api/rocket/latest' , RocketController.getRocketLastestLaunch);

module.exports = routes;