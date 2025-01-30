const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    
    return res.render('index');
})
routes.use('/crud', require('../routes/crudRoute'));


module.exports = routes;




