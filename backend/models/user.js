const db = require('../config');

const User = {
  create: async (username, email, password) => {
    try {
      const [result] = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  findByEmailAndPassword: async (email, password) => {
    try {
      const [rows] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  findById: async (id) => {
    try {
      const [rows] = await db.query('SELECT username, email, aboutMe FROM users WHERE id = ?', [id]);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  updateAboutMe: async (id, aboutMe) => {
    try {
      const [result] = await db.query('UPDATE users SET aboutMe = ? WHERE id = ?', [aboutMe, id]);
      return result;
    } catch (err) {
      throw err;
    }
  }
};

module.exports = User;
