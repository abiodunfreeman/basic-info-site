const http = require('http')

const port = 8080;

const server = http.createServer((req, res) => {
    console.log('request made')
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, world </h1>')
})

server.listen(port, 'localhost', () => {
    console.log('server listening')
})