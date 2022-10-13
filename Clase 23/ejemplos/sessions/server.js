const express = require('express')
const session = require('express-session');

const app = express();

app.use(session ({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.get('/login', (req, res) => {
    const { username, password} = req.query;
    if ( username !== 'lau' || password !== 'laupass'){
        return res.send ('Login failed');
    }
     req.session.user = username; 
     req.session.admin = true;
     res.send('Login sucess!!');


})
function auth(req, res, next) {
    if (req.session?.user === 'lau' && req.session?.admin) {
        return next();
    }
    return res.status(401).send('Error de autorizacion')

}

app.get('/private', auth, (req, res) => {
    res.send('Login afirmativo')
})
/* app.get('/session', (req, res) => {
    if(req.session.contador) {
        req.session.contador++;
        res.send(`Ud visito el sitio ${req.session.contador} veces`)
    }else{
         req.session.contador = 1;
         res.send('Bienvenido')
    }
   
})
 */
app.listen(8080);