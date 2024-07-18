const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //check email exist
    const userExists = await User.findByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    //hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    //create user in database
    const userId = await User.create(username, email, hashedPassword);
    //respond success message
    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  const userId = req.userId; //authentication middleware
  try {
    const rows = await User.findById(userId);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAboutMe = async (req, res) => {
  const userId = req.userId; //authentication middleware
  const { aboutMe } = req.body;
  try {
    const result = await User.updateAboutMe(userId, aboutMe);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'About Me section updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
