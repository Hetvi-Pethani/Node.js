const UserModel = require('../models/UserModel')

const nodemailer = require('nodemailer');

const loginPage = (req, res) => {
    if (res.locals?.users) {
        return res.redirect('/deshboard')
    }
    return res.render('login')
}

const registerPage = (req, res) => {
    return res.render('register')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await UserModel.create({

            name: name,
            email: email,
            password: password
        })
        console.log("user created")
        return res.redirect('/')
    } catch (err) {
        console.log(err)
        return false
    }
}

const loginUser = async (req, res) => {

    try {
        return res.redirect('/deshboard')
    } catch (err) {
        console.log(err)
        return false;
    }
}

const deshboardPage = async (req, res) => {
    try {
        return res.render('deshboard')
    } catch (err) {
        console.log(err)
        return false
    }
}

const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false
        }
        return res.redirect('/')
    })
}



//forgot password

const otpPage = async (req, res) => {
    try {
        return res.render('otp')
    } catch (err) {
        console.log(err)
        return false
    }
}

const newpasswordPage = async (req, res) => {
    try {
        return res.render('newpassword')
    } catch (err) {
        console.log(err)
        return false
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { useremail } = req.body;
        let user = await UserModel.findOne({ email: useremail });

        if (!user) {
            console.log("Email and Password not valid");
            return res.redirect('/');
        }

        let otp = Math.floor(Math.random() * 1000000);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hetvi.pethani75@gmail.com',
                pass: 'uvvjhfmxayfiosae'
            }
        });
        var mailOptions = {
            from: 'hetvi.pethani75@gmail.com',
            to: useremail,
            subject: 'Forgot Password',
            html: `<h1 style='color:red'>Your Otp :- ${otp}</h1>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                let userotp = {
                    otp: otp,
                    email: useremail
                }
                res.cookie('userotp', userotp)
                console.log('Email sent: ' + info.response);
                return res.redirect('/otp')
            }
        });

    } catch (err) {
        console.log(err);
        return false;
    }
}

const userOtp = async (req, res) => {
    try {
        let otp = req.body.otp;
        if (req.cookies.user?.otp == otp) {
            return res.redirect('/newpassword')
        } else {
            console.log("Otp is not match");
            return res.redirect('/otp');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
const usernewPassword = async (req, res) => {
    try {
        let newpass = req.body.newpass;
        let cpass = req.body.cpass;
        if (newpass == cpass) {
            let email = req.cookies?.user?.email;
            let user = await User.findOneAndUpdate({ email: email }, {
                password: newpass
            })
            res.clearCookie('user');
            return res.redirect('/');
        } else {
            console.log(`newpassword and confirm password is not match`);
            return res.redirect('/newpassword')
        }

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    loginPage,
    registerPage,
    registerUser, loginUser,
    deshboardPage,
    logout,
    otpPage,
    newpasswordPage,
    forgotPassword,
    userOtp,
    usernewPassword
}