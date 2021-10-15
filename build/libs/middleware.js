var bodyParser = require('body-parser');
var cors = require('cors');
var compression = require('compression');
var helmet = require('helmet');
module.exports = function (app) {
    app.set('json spaces', 4);
    app.use(helmet());
    app.use(cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['*'],
    }));
    app.use(compression());
    app.use(bodyParser.json());
};
