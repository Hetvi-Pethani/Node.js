const express = require('express');

const port = 8000;

const app = express();

app.set ('view engine', 'ejs');

const db = require('./config/db');

app.use ('/', require('./routes/indexRoute'));

app.get ('/', (req, res) => {
    res.render ('login');
})

app.listen(port, (err) => {
    if (err){
        console.log(err);
        return false;
    }
    console.log (`Server is running on port ${port}`);
})