// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://ermacareer:ersultan12@cluster0.d6yz9xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


// Routes
const authRoutes = require('./routes/auth');
const shopRoutes = require('./routes/shop');

const cartRoutes = require('./routes/cart'); // Adjust the path as necessary



app.use(authRoutes);
app.use(shopRoutes);
app.use(cartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
