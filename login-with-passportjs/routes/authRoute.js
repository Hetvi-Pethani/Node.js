const express = require('express');
const { loginPage, loginUser, dashboardPage, registerPage, registerUser, logout } = require('../controllers/AuthController');

const routes = express.Router();

const passport = require('passport');

routes.get('/', loginPage);
routes.post('/loginUser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/register', registerPage);

routes.post('/registerUser', registerUser);
routes.get('/logout', logout)

module.exports = routes;