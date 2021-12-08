import path from 'path';
const express = require('express')

const cors = require('cors')
const consign = require('consign');

const app = express();

consign({
  verbose: true,
  cwd: 'src',
}).include('config.ts')
  .then('libs/middleware.ts')    
  .then('database')  
  .then('models')    
  .then('controllers')      
  .then('routes.ts')
  .into(app);

app.use(cors())
app.use(express.json());
app.use('/public',express.static(path.join(__dirname, 'public')));


export { app };