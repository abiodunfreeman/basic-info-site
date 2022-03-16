const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    console.log('request made')
    
    res.setHeader('Content-Type', 'text/html')
    
    let path = './pages/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about.html': 
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me.html':
            path += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, 'utf8',  (err, data) => {
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