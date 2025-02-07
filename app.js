const express = require('express');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const dbtest = require('./config/database');
//test db
dbtest.authenticate()
 .then(() => console.log('DB Connected...'))
 .catch(err => console.log('DB Connection Error: ', err));


const app = express();

app.get('/', (req, res) => res.send('index'));

app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));