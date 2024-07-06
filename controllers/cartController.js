// controllers/cartController.js
const Cart = require('../models/cart');
const Product = require('../models/product');



exports.addToCart = async (req, res) => {
    try {
      const { productId } = req.body;
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      const cart = await Cart.findOne({ userId: req.session.userId });
      if (!cart) {
        const newCart = new Cart({ userId: req.session.userId, items: [{ productId: product._id, quantity: 1 }] });
        await newCart.save();
      } else {
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
          cart.items[itemIndex].quantity += 1;
        } else {
          cart.items.push({ productId: product._id, quantity: 1 });
        }
        await cart.save();
      }
  
      res.status(200).json({ message: 'Product added to cart' });
    } catch (err) {
      console.error('Error adding to cart:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  exports.updateQuantity = async (req, res) => {
    try {
      const { itemId, change } = req.body;
      const cart = await Cart.findOne({ userId: req.session.userId });
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
  
      const item = cart.items.id(itemId);
      if (!item) return res.status(404).json({ message: 'Item not found' });
  
      item.quantity += change;
      if (item.quantity <= 0) item.remove();
  
      await cart.save();
      res.json({ success: true });
    } catch (err) {
      console.error('Error updating quantity:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  exports.buyItem = async (req, res) => {
    try {
      const { itemId, name, address, creditCard } = req.body;
      const userId = req.session.userId;
  
      if (!userId) return res.status(401).json({ message: 'User not authenticated' });
  
      const cart = await Cart.findOne({ userId });
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
  
      const item = cart.items.id(itemId);
      if (!item) return res.status(404).json({ message: 'Item not found in cart' });
  
      // Remove the item from the cart
      item.remove();
      await cart.save();
  
      res.json({ success: true, message: 'Purchase successful!' });
    } catch (err) {
      console.error('Error processing purchase:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  exports.getCart = async (req, res) => {
    try {
      const userId = req.session.userId;
      if (!userId) {
        return res.status(401).redirect('/login');
      }
  
      const cart = await Cart.findOne({ userId }).populate('items.productId');
      if (!cart) {
        return res.status(404).sendFile(path.join(__dirname, '../public/cart.html'));
      }
  
      res.json(cart);
    } catch (error) {
      console.error('Error fetching cart data:', error);
      res.status(500).send('Failed to load cart data');
    }
  };
  
  
  exports.updateQuantity = async (req, res) => {
    try {
      const { itemId, change } = req.body;
      const cart = await Cart.findOne({ userId: req.session.userId });
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      const item = cart.items.id(itemId);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      item.quantity += change;
  
      if (item.quantity <= 0) {
        item.remove();
      }
  
      await cart.save();
      res.json({ success: true });
    } catch (err) {
      console.error('Error updating quantity:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
