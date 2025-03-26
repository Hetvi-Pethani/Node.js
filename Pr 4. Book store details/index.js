const express = require('express');

const port = 7000;

const app = express();

const db = require('./config/db');

const path = require('path');

app.set('view engine', 'ejs');

const UserModel = require('./models/UserModel');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('add');
})

app.post('/adduser', (req, res) => {
    const { bookname, description, authorname, price } = req.body;
    UserModel.create({
        bookname: bookname,
        description: description,
        authorname: authorname,
        price: price,
    }).then((record) => {
        console.log(record);
        console.log('User added');
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.get('/viewuser', (req, res) => {
    UserModel.find({})
        .then((record) => {
            return res.render('view', {
                record: record
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/deleteuser', (req, res) => {
    let id = req.query.did;
    UserModel.findByIdAndDelete(id)
        .then((record) => {
            console.log('record delete');
            return res.redirect('/viewuser');
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.get ('/edituser', (req, res) => {
    let id = req.query.eid;
    UserModel.findById(id)
    .then((single) => {
        return res.render('edit', {
            single
        })
    }).catch ((err) => {
        console.log(err);
        return false;
    })
})

app.post('/updateuser', (req, res) => {
    const { id, bookname, description, authorname, price } = req.body;

    UserModel.findByIdAndUpdate(id, {

        bookname: bookname,
        description: description,
        authorname: authorname,
        price: price

    }).then((record) => {
        console.log('user update');
        return res.redirect('/viewuser');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port ${port}`);
})
