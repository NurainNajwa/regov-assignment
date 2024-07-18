const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const db = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/routes/userRoutes', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // Test database connection
  db.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connected!');
      connection.release();
    }
  });
});