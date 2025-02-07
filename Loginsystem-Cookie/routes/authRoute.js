const express = require('express');

const routes = express.Router();

const { loginPage, dashboardPage, aboutPage, registerPage, registerUser, logoutUser, loginUser, productPage, } = require('../controllers/AuthController');
const { checkUserLogin } = require('../middleware/checkUser');

routes.get('/', loginPage)
routes.post('/loginuser', loginUser);
routes.get('/register', registerPage);
routes.post('/registeruser', registerUser);
routes.get('/logoutuser', logoutUser);
routes.get('/dash',checkUserLogin, dashboardPage);
routes.get('/about',checkUserLogin, aboutPage);
routes.get('/product',checkUserLogin, productPage);


module.exports = routes;