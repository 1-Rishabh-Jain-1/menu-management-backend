import express from 'express';
import {
    createSubCategory,
    getAllSubCategories,
    getSubCategoryById,
    getSubCategoriesByCategory,
    updateSubCategory
} from '../controllers/subcategoryController.js';

const router = express.Router();

// Route to create a new subcategory
router.post('/', createSubCategory);

// Route to get all subcategories
router.get('/', getAllSubCategories);

// Route to get a subcategory by its ID
router.get('/:id', getSubCategoryById);

// Route to get all subcategories under a specific category
router.get('/category/:categoryId', getSubCategoriesByCategory);

// Route to update a subcategory by its ID
router.put('/:id', updateSubCategory);

export default router;
