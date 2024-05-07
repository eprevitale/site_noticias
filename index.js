import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 9393;


//------------------------------------------------------------------//
// Libs config
//------------------------------------------------------------------//

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/src/views'));



//------------------------------------------------------------------//
// Importing routes
//------------------------------------------------------------------//

import homeRoute from './src/routes/homeRoute.js';


//------------------------------------------------------------------//
// Routes
//------------------------------------------------------------------//

app.use('/', homeRoute);


//------------------------------------------------------------------//
// Server start
//------------------------------------------------------------------//

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
});
