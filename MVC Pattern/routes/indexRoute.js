const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.render('login')
})

routes.use('/crud', require('./crudRoute'));



module.exports = routes;