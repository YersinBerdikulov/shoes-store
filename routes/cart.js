// routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/cart'); // Adjust the path as necessary

router.get('/cart-data', async (req, res) => {
  try {
    const userId = req.session.userId;
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch cart data' });
  }
});
router.post('/buy-item', async (req, res) => {
    const { itemId, name, address, creditCard } = req.body;
    try {
      // Process the purchase logic here
      // For example, save the purchase details in a database or a file
  
      // Remove the item from the cart
      await Cart.findByIdAndUpdate(req.session.cartId, {
        $pull: { items: { _id: itemId } }
      });
  
      res.status(200).json({ message: 'Purchase successful!' });
    } catch (error) {
      console.error('Error processing purchase:', error);
      res.status(500).json({ message: 'Failed to process purchase' });
    }
  });

module.exports = router;
