const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {
    res.write(`<h1>Hello world</h1>`);
    res.write(`<h1>mahadev</h1>`);
    res.write(`<h1 style='color: red'>swaminarayan</h1>`);
    res.end();
});
server .listen(port, (err) => {
    if (!err) {
        console.log(`server is start:-${port}`);
    }
});