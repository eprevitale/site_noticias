const express = require('node:express');
const app = express();
const router = express.Router();

router.get('/', () => {
    return 'Received a GET!';
});

router.post('/', (req,res) => {
    res.setHeader('Content-type','text/plain');
    res.status(200).send('Received a POST!');
});


