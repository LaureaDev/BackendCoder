const http = require('http');
const getMensaje = () => {
    const hora = new Date().getHours();
    let mensaje = '';
    if (hora > 6 && hora < 12) {
        mensaje = 'Buenos días';
    } else if (hora >= 12 && hora < 18) {
        mensaje = 'Buenas tardes';
    } else {
        mensaje = 'Buenas noches';
    }
    return mensaje;
}


const server = http.createServer((req, res) => {
    res.end('Hola mundo');
});

const connectdServer = server.listen(8080, () => {
    console.log(`Server running at http://localhost:${connectdServer.address().port}`);
});

