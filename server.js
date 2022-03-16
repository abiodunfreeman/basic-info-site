const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    console.log('request made')
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    
    let path = './pages/';
    switch(req.url){
        case '/':
            path += 'index.html'
            break;
        case '/about.html': 
            path += 'about.html'
            break;
        case '/contact-me.html':
            path += 'contact-me.html'
            break;
        default:
            path += '404.html';
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