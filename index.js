const http = require('http');
const app = require('./model/http-router')

http.createServer(app).listen(8787);

app.get('/', (req, res)=>{
    res.end('get home');
});

app.get('login', (req, res)=>{
    res.end('get login');
});

app.post('login', (req, res)=>{
    res.end('post login');
});

app.errorRouter = (req, res)=>{
    res.end('<h1>Custom Error 404</h1>');
};

console.log('Server Running at http://localhost:8787');