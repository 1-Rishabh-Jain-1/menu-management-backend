import SubCategory from "../models/SubCategory.js";
import Item from "../models/Item.js";

// Controller to create a new item
export const createItem = async (req, res) => {
    try {
        // Create a new item instance from the request body
        const item = new Item(req.body);
        // Save the item to the database
        await item.save();
        // Respond with the created item
        res.status(201).json(item);
    } catch (err) {
        // Handle any errors that occur during the save operation
        res.status(400).json({ error: err.message });
    }
};

// Controller to search for items by name (case-insensitive)
export const searchItem = async (req, res) => {
    try {
        // Extract the search term from the query parameters
        const itemName = req.query.name || '';

        // Find items where the name matches the search term (case-insensitive)
        const items = await Item.find({
            name: { $regex: itemName, $options: 'i' }
        });

        // Respond with the matching items
        res.status(200).json(items);
    } catch (error) {
        // Handle any errors that occur during the search operation
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all items
export const getAllItems = async (req, res) => {
    try {
        // Fetch all items from the database
        const items = await Item.find();
        // Respond with the fetched items
        res.status(200).json(items);
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a specific item by its ID
export const getItemById = async (req, res) => {
    try {
        // Find an item by its ID
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        // Respond with the found item
        res.status(200).json(item);
    } catch (error) {
        // Handle any errors that occur during the find operation
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all items under a specific category
export const getItemsByCategory = async (req, res) => {
    try {
        // Find all subcategories associated with a specific category ID
        const subCategories = await SubCategory.find({ category: req.params.categoryId });
        // Find all items associated with these subcategories
        const items = await Item.find({ subCategory: { $in: subCategories.map(sc => sc._id) } });
        // Respond with the fetched items
        res.status(200).json(items);
    } catch (error) {
        // Handle any errors that occur during the find operation
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all items under a specific subcategory
export const getItemsBySubCategory = async (req, res) => {
    try {
        // Find all items associated with a specific subcategory ID
        const items = await Item.find({ subCategory: req.params.subCategoryId });
        // Respond with the fetched items
        res.status(200).json(items);
    } catch (error) {
        // Handle any errors that occur during the find operation
        res.status(500).json({ error: error.message });
    }
};

// Controller to update an item by its ID
export const updateItem = async (req, res) => {
    try {
        // Find an item by its ID and update it with the new data from the request body
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        // Respond with the updated item
        res.status(200).json(item);
    } catch (error) {
        // Handle any errors that occur during the update operation
        res.status(400).json({ error: error.message });
    }
};
