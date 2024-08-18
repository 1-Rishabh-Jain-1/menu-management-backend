import express from 'express';
import {
    createSubCategory,
    getAllSubCategories,
    getSubCategoryById,
    getSubCategoriesByCategory,
    updateSubCategory
} from '../controllers/subcategoryController.js';

const router = express.Router();

router.post('/', createSubCategory);
router.get('/', getAllSubCategories);
router.get('/:id', getSubCategoryById);
router.get('/category/:categoryId', getSubCategoriesByCategory);
router.put('/:id', updateSubCategory);

export default router;
