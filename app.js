const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const expressLayout = require('express-ejs-layouts');
const db = require( './server/config/db');
app.use(express.static('public'));
app.use(expressLayout)
app.set('layout','./layouts/main')


app.set('view engine', 'ejs')


app.use('/',require('./server/routes/main'))





app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))