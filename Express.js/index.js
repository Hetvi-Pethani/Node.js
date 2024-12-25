const express = require('express');

const port = 8000;

const app = express();

app.get('/', (req, res) => {
    res.write('Hello World');
    res.write('kem chhoo');
    res.end();
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port:- http://localhost: ${port}`);
})