
require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});


const { app } = require('./app');

const port = process.env.PORT || 3333;
app.listen(port);

console.log(`Server runing at ${port}`);
console.log('--- ONGFINDER 🔎  ---');