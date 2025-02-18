const express = require('express')
const port = 8000;

const app = express();

const path = require('path');

const db = require('./config/db');

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/img', express.static('img'));


//authentication start passportjs

const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');
app.use(session({
    secret: 'rnw4',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.session());
app.use(passport.initialize());
app.use(passport.setUser);


//authentication ensd passportjs


app.use('/', require('./routes/indexRoute'));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server has started on port: ${port}`);
});
