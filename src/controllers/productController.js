const Product = require('../models/productModel'); // Path to your product model

const addProduct = async (req, res) => {
    const { color, brand, price, category } = req.body;

    // Validate request body
    if (!color || !brand || !price || !category) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        // Create a new product
        const newProduct = new Product({
            color,
            brand,
            price,
            category,
        });
        // Save to the database
        const savedProduct = await newProduct.save();
        // Respond with the saved product
        res.status(201).json({
            message: 'Product added successfully!',
            product: savedProduct,
        });
    } catch (error) {
        console.error('Error adding product:', error.message);
        res.status(500).json({ message: 'Server error. Unable to add product.' });
    }
};

module.exports = { addProduct };
