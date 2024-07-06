const User = require('../models/user'); // Import the User model

// Controller to get current user information
exports.getCurrentUser = async (req, res) => {
  try {
    // Assuming you store user ID in session or a similar mechanism
    const userId = req.session.userId; // Or however you store user identification
    
    if (!userId) {
      return res.status(401).json({ message: 'No user logged in' });
    }

    const user = await User.findById(userId).exec();
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ email: user.email });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
