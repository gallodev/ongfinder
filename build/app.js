"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express = require('express');
var routes = require('./routes');
var cors = require('cors');
var consign = require('consign');
var app = express();
exports.app = app;
consign({ verbose: false })
    .then('controllers')
    .then('routes')
    .then('libs/middleware')
    .into(app);
app.use(cors());
app.use(express.json());
app.use(routes);
