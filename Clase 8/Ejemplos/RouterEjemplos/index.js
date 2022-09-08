const express = require('express');
const { Router } = require('express');

const app = express();

const router = Router();

router.get('/recurso', (req, res) => {
    res.send('get ok!');
});

router.post('/recurso', (req, res) => {
    res.send('post ok!');
});
