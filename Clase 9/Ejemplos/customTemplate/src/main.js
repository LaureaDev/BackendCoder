const express = require('express');
const { promise: fs } = require('fs');

const app = express();
app.engine('ntl', async(filePath, options, callback) => { 
    try {
        const content = await fs.readFile(filePath);
        const rendered = content.toString().replace('#title', '' + options.title). replace('#message#', '' + options.message);
        return callback(null, rendered);
    } catch (err){
        return callback(new Error(err));
    }
} );

app.set('view', './views');

app.set('view engine', 'ntl');

app.get('/', (req, res) => {
    const datos = {
        title: 'Custom template',
        message: 'Custom template message'
        };
        
    res.render('index', datos);
    });

    app.listen(8080);