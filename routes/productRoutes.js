// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const Category = require('../models/Category');
const router = express.Router();

// Get products by category
router.get('/category/:categoryId', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.categoryId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Add product
router.get('/add', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.categoryId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/add', async (req, res) => {
  try {
    console.log("wo-1");
      const { name, price, description, category } = req.body;
      console.log("wo-2"+category+"<");
      // Validate if the category exists
      const existingCategory = await Category.findById(category);
      console.log("wo-3");
      if (!existingCategory) {
        console.log("wo-4");
          return res.status(400).json({ error: 'Category not found.' });
      }
      console.log("wo-5");
      const newProduct = new Product({
          name,
          price,
          description,
          category, // Save the category as ObjectId
          imageUrl:'/img'

      });
      console.log("wo-6");
      await newProduct.save();
      console.log("wo-7");
      res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.log("wo-8");
    console.log(error);
      res.status(500).json({ error: 'Failed to add product' });
  }
});

module.exports = router;