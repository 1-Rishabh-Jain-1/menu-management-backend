import Category from "../models/Category.js";

// Controller to create a new category
export const createCategory = async (req, res) => {
    try {
        // Create a new category instance from the request body
        const category = new Category(req.body);
        // Save the category to the database
        await category.save();
        // Respond with the created category
        res.status(201).json(category);
    } catch (err) {
        // Handle any errors that occur during the save operation
        res.status(400).json({ error: err.message });
    }
};

// Controller to get all categories
export const getAllCategories = async (_, res) => {
    try {
        // Fetch all categories from the database
        const categories = await Category.find();
        // Respond with the fetched categories
        res.status(200).json(categories);
    } catch (err) {
        // Handle any errors that occur during the fetch operation
        res.status(500).json({ error: err.message });
    }
};

// Controller to get a specific category by its ID
export const getCategoryById = async (req, res) => {
    try {
        // Find a category by its ID
        const category = await Category.findById(req.params.id);
        if (!category) {
            // If no category is found, respond with a 404 error
            return res.status(404).json({ error: 'Category not found' });
        } else {
            // Respond with the found category
            return res.status(200).json(category);
        }
    } catch (err) {
        // Handle any errors that occur during the find operation
        return res.status(500).json({ error: err.message });
    }
};

// Controller to update a category by its ID
export const updateCategory = async (req, res) => {
    try {
        // Find a category by its ID and update it with the new data from the request body
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            // If no category is found, respond with a 404 error
            return res.status(404).json({ error: 'Category not found' });
        } else {
            // Respond with the updated category
            return res.status(200).json(category);
        }
    } catch (err) {
        // Handle any errors that occur during the update operation
        return res.status(500).json({ error: err.message });
    }
};
