const UserModel = require('../models/UserModel');

const loginPage = (req, res) => {
    if (res.locals.users) {
        return res.redirect('dashboard')
    }
    return res.render('login')
};
const loginUser = (req, res) => {
    return res.redirect('dashboard')
}
const dashboardPage = (req, res) => {
    return res.render('dashboard')
}
const registerPage = (req, res) => {
    return res.render('register');
}
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log("user successfully create");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;

    }
}
const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.redirect('/');
    });
}
module.exports = {
    loginPage, loginUser, dashboardPage, registerUser, registerPage, logout
}