const express = require('node:express');
var bodyParser = require('node:body-parser');
const path = require('node:path');
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
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

//------------------------------------------------------------------//
// Routes
//------------------------------------------------------------------//
app.use();

//------------------------------------------------------------------//
// Server start
//------------------------------------------------------------------//
app.listen(8000, ()=>{
    console.log('Server running...')
})
