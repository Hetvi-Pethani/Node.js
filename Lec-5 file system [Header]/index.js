const http = require('http');
const port = 8000;
const fs = require('fs');
const server = http.createServer((req, res) => {
    let fileName = "";
    switch (req.url) {
        case "/":
            fileName = './home.html'
            break;
        case "/ab":
            fileName = './about.html'
            break;
    }
    fs.readFile(fileName, (err, pagename) => {
        if (err) {
            console.log(`file is not found`);
            return false
        }
        res.end(pagename)
    })
})
server.listen(port, (err) => {
    if (!err) {
        console.log(`server is start on port:-${port}`);
    }
})