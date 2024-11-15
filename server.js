// server.js
const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce');

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});