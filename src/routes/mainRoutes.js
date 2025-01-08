const express = require('express');
const { addCategory, deleteCategory } = require('../controllers/categoryController');
const { addProduct } = require('../controllers/productController');

const router = express.Router();

router.post('/category', addCategory);
router.post('/addproduct', addProduct);
router.delete('/delete-category/:id', deleteCategory)

module.exports = router;
