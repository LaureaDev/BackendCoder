const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

//1ra parte cookies sin tiempo de expiracion.
app.get('/set-cookie', (req, res) => {
    res.cookie('cookieap', 'seteoCookieNode');
    res.send('Set cookie ok');
});

app.get('/cookies', (req, res) =>{
    res.json({ cookies: req.cookies});
});


app.get('/set-cookie-expiration', (req, res) =>{
    res.cookie('cookieapex', 'seteoCookieNodeEx', { maxAge: 10000});
    res.send('Set cookie ex ok');
});

app.get ('/clear', (req, res) =>{
    for(const cookieName of Object.keys(req.cookies)){
        res.clearCookie(cookieName)
    } 
    res.send('Clear cookie ok');
});


app.listen(8080);