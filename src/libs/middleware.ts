const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

module.exports = (app) => {
  app.set('json spaces', 4);
  app.use(helmet());
  app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*'],
  }));
  app.use(compression());
  app.use(bodyParser.json());
};