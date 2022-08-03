const express = require('express');
const app = express();
const port = 8080;

const products = [
    {id: 1, name: 'Product 1', stock:10, price: 100},
    {id: 2, name: 'Product 2', stock:20, price: 200},
    {id: 3, name: 'Product 3', stock:30, price: 300},
    {id: 4, name: 'Product 4', stock:40, price: 400},
    {id: 5, name: 'Product 5', stock:50 ,price: 500},
];


app.get ('/', (req, res) => {
    res.send(products);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});