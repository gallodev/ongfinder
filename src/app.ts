import path from 'path';
const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Ong Finder API",
      description: "Ong Finder API swagger definition"
    },
    server: ['localhost:3333']
  },
  apis: [`${__dirname}/routes/*.ts`,`${__dirname}/routes/*.js`]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const cors = require('cors')
const consign = require('consign');

const app = express();

consign({
  verbose: false,
  cwd: 'src',
  extension: 'ts',
}).include('config')
  .then('libs')    
  .then('database')  
  .then('models')    
  .then('controllers')      
  .then('routes')
  .then('providers')
  .into(app);

app.use(cors())
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/doc',swaggerUi.serve, swaggerUi.setup(swaggerDocs));


export { app };