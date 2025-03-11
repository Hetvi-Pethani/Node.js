const express = require('express');

const routes = express.Router();

const { registerUser, loginUser, allUser } = require('../controllers/AuthController');

const { verifyToken, checkAdmin } = require('../middleware/Auth');

routes.post('/register', registerUser)
routes.post('/login', loginUser);
routes.get('/alluser', verifyToken,checkAdmin, allUser)


module.exports = routes;