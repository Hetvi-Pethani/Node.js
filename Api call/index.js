const express = require('express');

const port = 8000;

const app = express();

const cors = require('cors');
app.use(cors());

app.get('/users', (req, res) => {

    return res.status(200).json({

        success: true,
        message: "users list",
        users: [
            {
                id: 1,
                name: "Hetvi",
                phone : "1234567890",
            },
            {
                id: 2,
                name: "Bansi",
                phone : "9876543210",
            }
            
        ]
    })

})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port:- ${port}`);
})