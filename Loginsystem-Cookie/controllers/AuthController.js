const User = require('../models/UserModel');

const registerPage = (req, res) => {
    return res.render('register');
}
const loginPage = (req, res) => {
    if (req.cookies?.auth) {
        return res.redirect('/dash');
    }
    return res.render('login');
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email });
        if (!user || user.password != password) {
            console.log('Invalid email or password');
            return res.redirect('/');
        }
        res.cookies('auth', user);
        return res.redirect('/dash');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await User.create({
            name: name,
            email: email,
            password: password
        })
        console.log('User created');
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const dashboardPage = (req, res) => {
    if (!req.cookies?.auth) {
        return res.redirect('/');
    }
    return res.render('dashboard');
}
const productPage = (req, res) => {
    return res.render('product');
}
const aboutPage = (req, res) => {
    return res.render('about');
}
const logoutUser = (req, res) => {
    res.clearCookie('auth');
    return res.redirect('/');
}
module.exports = {
    registerPage, loginPage, registerUser, dashboardPage, productPage, aboutPage, logoutUser, loginUser
}