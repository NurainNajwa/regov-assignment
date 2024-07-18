const User = require('../models/user');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await User.create(username, email, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const rows = await User.findByEmailAndPassword(email, password);
    if (rows.length > 0) {
      res.status(200).json({ message: 'Login successful', user: rows[0] });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
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
