const http = require('http');

const port = 9000;

const fs = require('fs');

const server = http.createServer((req, res) => {
    let fileName = "";
    switch (req.url) {
        case "/":
            fileName = "./home.html";
            break;

        case "/about":
            fileName = "./about.html";
            break;

        case "/contact":
            fileName = "./contact.html";
            break;

        case "/blog":
            fileName = "./blog.html";
            break;

        case "/gallery":
            fileName = "./gallery.html";
            break;

        case "/pages":
            fileName = "./pages.html";
            break;

        case "/faq":
            fileName = "./faq.html";
            break;

        case "/protfolio":
            fileName = "./protfolio.html";
            break;
        case "/register":
            fileName = "./register.html";
            break;
    }
    fs.readFile(fileName, (err, pagename) => {
        if (err) {
            console.log("page not found");
            return false;
        }
        res.end(pagename);
    })

})

server.listen(port, (err) => {
    if (!err) {
        console.log(`server is running on port ${port}`);
    }
})