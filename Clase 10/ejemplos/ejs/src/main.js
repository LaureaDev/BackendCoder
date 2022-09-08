const express = require('express');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const pets = [
        {name: 'Samy', organization: 'Google', brith_year: '2022'},
        {name: 'Tux', organization: 'Linux', brith_year: '2022'},
        {name: 'Moby', organization: 'Amazon', brith_year: '2022'},
    ]

    const tangline = "Ningun consepto de programación es bueno sin mascota";

    res.render ('pages/index', {pets, tangline});
});

app.get('/about', (req, res) => {
    res.render ('pages/about');
} );

app.listen(8080);