const fs = require('fs');

fs.promises.readFile('info.txt', 'utf8')
    .then(contenido => {
        const info = JSON.parse(contenido);
        console.log(info);
        const packageJsonObj = info.contenidoObj; 
        packageJsonObj.author = 'CoderHouse';
       
        fs.promises.writeFile('package.json.coder', JSON.stringify(packageJsonObj, null, 2))
            .then(() => console.log('escritura exitosa'))
            .catch(error => {
                console.error(error);
            })
    })
    .catch(error => {
        console.error(error);
    
    })