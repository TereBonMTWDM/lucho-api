'use strict';
var express = require('express');
var Controller = require('../controllers/controller');
var api = express.Router();

api.get('/test', Controller.test);
api.get('/process/:folio', Controller.getFolio);

module.exports = api;
