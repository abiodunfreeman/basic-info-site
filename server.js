const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    console.log('request made')
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    
    fs.readFile('./pages/index.html', 'utf8',  (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.write(data);
        res.end()
        
    })

})

server.listen(port, 'localhost', () => {
    console.log('server listening')
})