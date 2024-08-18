import SubCategory from '../models/SubCategory.js';
import Category from '../models/Category.js';

export const createSubCategory = async (req, res) => {
    try {
        const subCategory = new SubCategory(req.body);
        await subCategory.save();
        res.status(201).json(subCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllSubCategories = async (_, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).json(subCategories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getSubCategoryById = async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id);
        if (!subCategory) {
            return res.status(404).json({ error: 'Sub Category not found' });
        } else {
            return res.status(200).json(subCategory);
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const getSubCategoriesByCategory = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({ category: req.params.categoryId });
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subCategory) {
            return res.status(404).json({ error: 'Sub Category not found' });
        } else {
            return res.status(200).json(subCategory);
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};