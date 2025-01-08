const Category = require('../models/categoryModel'); // Path to your category model

const addCategory = async (req, res) => {
    const { name, description } = req.body;
    // Validate request body
    if (!name) {
        return res.status(400).json({ message: 'Category name is required.' });
    }
    try {
        // Check if the category already exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(409).json({ message: 'Category already exists.' });
        }
        // Create a new category
        const newCategory = new Category({
            name,
            description,
        });
        // Save to the database
        const savedCategory = await newCategory.save();
        // Respond with the saved category
        res.status(201).json({
            message: 'Category added successfully!',
            category: savedCategory,
        });
    } catch (error) {
        console.error('Error adding category:', error.message);
        res.status(500).json({ message: 'Server error. Unable to add category.' });
    }
};

const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        // Find and delete the category
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found.' });
        }
        res.status(200).json({ message: 'Category deleted successfully!' });
    } catch (error) {
        console.error('Error deleting category:', error.message);
        res.status(500).json({ message: 'Server error. Unable to delete category.' });
    }
}

module.exports = { addCategory, deleteCategory };
