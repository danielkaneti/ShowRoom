const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

const Users = require('./models/users');
const Products = require('./models/products');
const Reviews = require('./models/reviews');

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

// Users
app.post('/users', async (req, res) => {
  const allUsers = await Users.find({});
  res.send(allUsers);
});

app.post('/users/login', async (req, res) => {
  const requestBody = req.body;
  const email = requestBody.email;
  const password = requestBody.password;

  const user = await Users.findOne({'email': email, 'password': password});

  res.send(user);
});

// Products
app.get('/products', async (req, res) => {
  const allProducts = await Products.find({});

  res.send(allProducts);
});

// Reviews
app.get('/reviews', async (req, res) => {
  const allReviews = await Reviews.find({});
  
  res.send(allReviews);
});

const httpClient = http.createServer(app);
httpClient.listen(2222);

