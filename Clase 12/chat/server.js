const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

const messages = [
    { author: 'Alejandro', text: 'Bienvenido al chat' },
    { author: 'Facundo', text: 'Gracias' },
    { author: 'Juan', text: 'que onda!!' },
];


io.on('connection', socket => {
    console.log('Nuevo cliente conectado!'); 
    //Este evento carga el historial de mensajes cuando el nuevo cliente se conecta
    socket.emit('messages', messages);

    socket.on('new-message', data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});



httpServer.listen(8080, () => {
    console.log('Servidor inicializado');
});


