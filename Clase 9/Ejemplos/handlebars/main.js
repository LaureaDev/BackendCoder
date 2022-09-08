const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
    })
);

app.set('view engine', 'hbs');
app.set('views', './views');

fakeApi = () => [
    {name :'Katerina', lane: 'midlaner' },
    {name :'Jayce', lane: 'midlaner' },
    {name :'Azir', lane: 'midlaner' },
    {name :'Cleo', lane: 'midlaner' }
]

app.get('/', (req, res) => {
    res.render('main', { suggestedChamps: fakeApi(), listExists: true });
});

app.listen(8080);