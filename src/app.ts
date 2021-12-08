import path from 'path';
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const consign = require('consign');


const app = express();

consign({ verbose: false })
  .then('controllers')
  .then('routes')
  .then('libs/middleware')
  .into(app);

app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/public',express.static(path.join(__dirname, 'public')));


export { app };