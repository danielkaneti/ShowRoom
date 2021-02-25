const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const server = http.createServer(app);

//require('custom-env').env(process.env.NODE_ENV, './config');

const connectionString = "mongodb+srv://ShowRoom:<password>@cluster0.a1mdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});


var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.listen(process.env.PORT);

console.log(process.env.PORT);

server.listen(2222);