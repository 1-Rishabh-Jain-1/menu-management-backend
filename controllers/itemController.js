import Category from "../models/Category";
import SubCategory from "../models/SubCategory";
import Item from "../models/Item";

export const createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getItemsByCategory = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({ category: req.params.categoryId });
        const items = await Item.find({ subCategory: { $in: subCategories.map(sc => sc._id) } });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getItemsBySubCategory = async (req, res) => {
    try {
        const items = await Item.find({ subCategory: req.params.subCategoryId });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};