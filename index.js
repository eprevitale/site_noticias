//import { fileURLToPath } from 'url';
const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const app = express();

//------------------------------------------------------------------//
// Libs config
//------------------------------------------------------------------//

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/src/public', express.static(path.join(__dirname, 'src/public')));
app.set('views', path.join(__dirname, '/src/views'));
//const __filename = fileURLToPath(import.meta.url);


//------------------------------------------------------------------//
// Importing routes
//------------------------------------------------------------------//

const home = require('./src/routes/homeRoute');


//------------------------------------------------------------------//
// Routes
//------------------------------------------------------------------//

app.use('/', home);


//------------------------------------------------------------------//
// Server start
//------------------------------------------------------------------//

app.listen(8000, ()=>{
    console.log('Server running...')
})
