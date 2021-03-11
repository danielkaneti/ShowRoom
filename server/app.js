const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const reviewsRoute = require('./routes/reviews');

const connectionString = "mongodb+srv://ShowRoom:Aa123456@cluster0.a1mdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origins: ["http://localhost:4200", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: false
  }
});

const count = 0;
io.on('connection', (socket) => {
  if (socket.handshake.headers.origin === "http://localhost:3000") {
    count++;
    socket.broadcast.emit('count', count);
   

    socket.on('disconnect', () => {
      count--;
      socket.broadcast.emit('count', count);

    });
  }

  
});

app.get('/', (req, res) => {
    res.send('Welcome to our API!');
});

app.use('/reviews', reviewsRoute);
app.use('/users', usersRoute);
app.use('/products', productsRoute);

const httpClient = http.createServer(app);
httpClient.listen(2222);

