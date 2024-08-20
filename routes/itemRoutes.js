import express from 'express';
import {
    createItem,
    searchItem,
    getAllItems,
    getItemById,
    getItemsByCategory,
    getItemsBySubCategory,
    updateItem
} from '../controllers/itemController.js';

const router = express.Router();

// Route to create a new item
router.post('/', createItem);

// Route to search for items by name
router.get('/search', searchItem);

// Route to get all items
router.get('/', getAllItems);

// Route to get an item by its ID
router.get('/:id', getItemById);

// Route to get all items under a specific category
router.get('/category/:categoryId', getItemsByCategory);

// Route to get all items under a specific subcategory
router.get('/subcategory/:subCategoryId', getItemsBySubCategory);

// Route to update an item by its ID
router.put('/:id', updateItem);

export default router;
