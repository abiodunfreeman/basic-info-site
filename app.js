const express = require('express')
const app = express();

//listen for request
app.listen(8080);

app.get('/', (req, res) => {
//{root: __dirname} sets the root to current directory so sendFile knows where to start looking from
  res.sendFile('./pages/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {

    res.sendFile('./pages/about.html', {root: __dirname})
 })

 app.get('/contact', (req, res) => {

    res.sendFile('./pages/contact-me.html', {root: __dirname})
 })