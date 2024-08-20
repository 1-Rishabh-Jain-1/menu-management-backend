import SubCategory from '../models/SubCategory.js';

// Controller to create a new subcategory
export const createSubCategory = async (req, res) => {
    try {
        // Create a new subcategory instance from the request body
        const subCategory = new SubCategory(req.body);
        // Save the subcategory to the database
        await subCategory.save();
        // Respond with the created subcategory
        res.status(201).json(subCategory);
    } catch (err) {
        // Handle any errors that occur during the save operation
        res.status(400).json({ error: err.message });
    }
};

// Controller to get all subcategories
export const getAllSubCategories = async (_, res) => {
    try {
        // Fetch all subcategories from the database
        const subCategories = await SubCategory.find();
        // Respond with the fetched subcategories
        res.status(200).json(subCategories);
    } catch (err) {
        // Handle any errors that occur during the fetch operation
        res.status(500).json({ error: err.message });
    }
};

// Controller to get a specific subcategory by its ID
export const getSubCategoryById = async (req, res) => {
    try {
        // Find a subcategory by its ID
        const subCategory = await SubCategory.findById(req.params.id);
        if (!subCategory) {
            // If no subcategory is found, respond with a 404 error
            return res.status(404).json({ error: 'Sub Category not found' });
        } else {
            // Respond with the found subcategory
            return res.status(200).json(subCategory);
        }
    } catch (err) {
        // Handle any errors that occur during the find operation
        return res.status(500).json({ error: err.message });
    }
};

// Controller to get all subcategories under a specific category
export const getSubCategoriesByCategory = async (req, res) => {
    try {
        // Find all subcategories associated with a specific category ID
        const subCategories = await SubCategory.find({ category: req.params.categoryId });
        // Respond with the fetched subcategories
        res.status(200).json(subCategories);
    } catch (error) {
        // Handle any errors that occur during the find operation
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a subcategory by its ID
export const updateSubCategory = async (req, res) => {
    try {
        // Find a subcategory by its ID and update it with the new data from the request body
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subCategory) {
            // If no subcategory is found, respond with a 404 error
            return res.status(404).json({ error: 'Sub Category not found' });
        } else {
            // Respond with the updated subcategory
            return res.status(200).json(subCategory);
        }
    } catch (err) {
        // Handle any errors that occur during the update operation
        return res.status(500).json({ error: err.message });
    }
};
