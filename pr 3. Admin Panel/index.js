const express = require('express');
const app = express();
const port = 9000;
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) =>{
    return res.render('dashboard');
})
app.get('/charts', (req,res) =>{
    return res.render('charts');
})
app.get('/widgets', (req,res) =>{
    return res.render('widgets');
})
app.get('/tables', (req,res) =>{
    return res.render('tables');
})
app.get('/grid',(req,res) =>{
    return res.render('grid');
})
app.get('/form-basic',(req,res) =>{
    return res.render('form');
})
app.get('/pages-buttons',(req,res) =>{
    return res.render('pages-buttons');
})

app.listen(port, (err) => {
    if (err) {
        return console.log('Error: ', err);
    }
    console.log(`Server is Running on http://localhost:${port}`);
});
