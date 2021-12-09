import path from 'path';
const express = require('express')

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
  .into(app);

app.use(cors())
app.use(express.json());
app.use('/public',express.static(path.join(__dirname, 'public')));


export { app };