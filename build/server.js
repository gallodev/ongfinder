require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});
var app = require('./app').app;
var port = process.env.PORT || 3333;
app.listen(port);
console.log("Server runing at " + port);
