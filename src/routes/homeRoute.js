const express = require('express');
const app = express();
const router = express.Router();

// ---------------------------------------------- //
// GET
// ---------------------------------------------- //
router.get('/', (req, res) => {
        res.render('home.html');
});

// ---------------------------------------------- //
// POST
// ---------------------------------------------- //
router.post('/', (req,res) => {
    res.setHeader('Content-type','text/plain');
    res.status(200).send('Received a POST!');
});

module.exports = router;
