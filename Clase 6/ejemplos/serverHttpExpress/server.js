const express = require('express');
const app = express();

app.get('/HolaMundo', (req, res) => {
    res.send({mensaje: 'Hola Mundo'});
    });
    app.get("/", (req, res) => {
        res.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>');
      });
      
      let contador = 0;
      app.get("/visitas", (req, res) => {
        res.send(`La cantidad de visitas es ${contador++}`);
      });

      const date = new Date();
      app.get("/fyh", (req, res) => {
        res.send({ fyh: date.toLocaleString() });
      });
      
      
const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})

server.on('error', error => console.log(`Erropr en el server: ${error}`));
