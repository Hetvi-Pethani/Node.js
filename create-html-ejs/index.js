const express = require('express');

const port = 8000;

const app = express();

app.set('view engine', 'ejs');

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server is running on port ${port}`);

})
