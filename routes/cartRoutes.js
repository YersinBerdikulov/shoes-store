// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

router.get('/cart', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.session.userId }).populate('items.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
