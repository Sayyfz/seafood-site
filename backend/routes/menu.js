import express from 'express';
import { createMenuCategory, createMenuItem, deleteCategoryById, deleteMenuItemById, editCategoryById, editMenuItemById, getMenuItems } from '../controllers/menuController.js';

const menuRouter = express.Router(); 

menuRouter.get('/', getMenuItems);
menuRouter.post('/', createMenuCategory);
menuRouter.post('/item/:id', createMenuItem);
menuRouter.delete('/item/:id', deleteMenuItemById);
menuRouter.delete('/:id', deleteCategoryById);
menuRouter.post('/edit/item/:id', editMenuItemById);
menuRouter.post('/edit/:id', editCategoryById);

export default menuRouter;
