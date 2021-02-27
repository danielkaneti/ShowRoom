const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const users = require('./routes/users');

//require('custom-env').env(process.env.NODE_ENV, './config');

const connectionString = "mongodb+srv://ShowRoom:Aa123456@cluster0.a1mdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});


var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to our API!');
});
app.use('/users', users);
app.listen(2222, () => {
    console.log('Hithabarnu!@!#@!#@@!#')
});

//const server = http.createServer(app);
//server.listen(2222);