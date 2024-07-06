// routes/shop.js
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
const userController = require('../controllers/userController');

// Route to get current user
router.get('/current-user', userController.getCurrentUser);

// Route to get index page
router.get('/', shopController.getIndex);

// Route to get cart page
router.get('/cart', shopController.getCart);

// Route to post to cart
router.post('/cart', shopController.postCart);

module.exports = router;
