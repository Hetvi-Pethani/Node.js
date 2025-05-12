const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));
routes.use ('/blogroute', require('./blogRoute'));
 

module.exports = routes;