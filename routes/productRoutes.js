// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get products by category
router.get('/category/:categoryId', async (req, res) => {
  try {
    console.log('1111111'+req.params.categoryId );
    const products = await Product.find({ category: req.params.categoryId });
    console.log('2222222'+products );
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;