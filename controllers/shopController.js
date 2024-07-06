const Product = require('../models/product');
const Cart = require('../models/cart');
const path = require('path');

exports.getIndex = async (req, res) => {
  try {
    const products = await Product.find();
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Server Error');
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

    res.sendFile(path.join(__dirname, '../public/cart.html'));
  } catch (error) {
    console.error('Error fetching cart data:', error);
    res.status(500).send('Failed to load cart data');
  }
};

exports.postCart = async (req, res) => {
  const { productId } = req.body;
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).send('User not logged in');
  }

  if (!productId) {
    return res.status(400).send('Product ID is required');
  }

  try {
    // Try to find the product using the numeric ID
    let product = await Product.findOne({ id: productId });

    // If not found, try to find using ObjectId
    if (!product) {
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).send('Invalid Product ID');
      }
      product = await Product.findById(productId);
    }

    if (!product) {
      return res.status(404).send('Product not found');
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.productId.toString() === product._id.toString());

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ productId: product._id, quantity: 1 });
    }

    await cart.save();
    res.redirect('/');
  } catch (err) {
    console.error('Error adding product to cart:', err);
    res.status(500).send('Server Error');
  }
};
