const express = require('express');
const app = express();
const session = require('express-session')
const FileStore = require ('session-file-store')(session);

app.use(session({
    store: new FileStore(
        {
            path: './sesiones',
            ttl: 300,
            retries: 0
        }
    ),
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.get('/con-session', (req,res) => {
    if(req.session.contador) {
        req.session.contador++
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    }
    else {
        req.session.contador = 1
        res.send('Bienvenido!')
    }
});

app.get('/', (req,res) => {
    res.send('Servidor express ok!')
})



app.get('/logout', (req,res) => {
    req.session.destroy( err => {
        if(!err) res.send('Logout ok!')
        else res.send({status: 'Logout ERROR', body: err})
    })
})

app.listen(8080);
console.log('Server on')


// Continuar miradno 51:06