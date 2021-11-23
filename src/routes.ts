const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');

routes.get('/',(request,response) => {
    return response.send("It's works");
});

routes.get('/api/', OngController.getData);

module.exports = routes;