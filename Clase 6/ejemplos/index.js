

app.put('/api/palabras/:pos', (req, res) => {
    const { palabra } = req.body;
    const { pos } = req.params;

    const palabraAnterior = palabras[parseInt(pos) - 1];
    palabras[parseInt(pos) - 1] = palabra;
    res.send({actualizada: palabra, anterior: palabraAnterior});
})


app.delete('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    const palabra = palabras[parseInt(pos) - 1];
    palabras.splice(parseInt(pos) - 1, 1);
    res.send({eliminada: palabra});
});

app.listen (8080);
