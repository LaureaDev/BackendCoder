const express = require('express');
const { Router } = express;
const app = express();

function mdl1 (req, res, next) {
    req.miAporte1 = 'dato por ml1';
    if ( req.rol === 'admin' ) {
        res.status(500).send('No puedes');
    }
    next();
}

function mdl2 (req, res, next) {
    req.miAporte2 = 'dato por ml2';
    next();
}

const router = new Router();

app.get ('/ruta1', mdl1, mdl2, (req, res) => {
    let miAporte1 = req.miAporte1;
    res.send({miAporte1});

});

app.get ('/ruta2', mdl1, mdl2, (req, res) => {
    let miAporte2 = req.miAporte2;
    res.send({miAporte2});
});


app.listen(8080);