import express from 'express';
import {
    createItem,
    getAllItems,
    getItemById,
    getItemsByCategory,
    getItemsBySubCategory,
    updateItem
} from '../controllers/itemController.js';

const router = express.Router();

router.post('/', createItem);
router.get('/', getAllItems);
router.get('/:id', getItemById);
router.get('/category/:categoryId', getItemsByCategory);
router.get('/subcategory/:subCategoryId', getItemsBySubCategory);
router.put('/:id', updateItem);

export default router;
