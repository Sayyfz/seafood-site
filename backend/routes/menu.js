import express from 'express';
import { createMenuCategory, deleteCategoryById, deleteMenuItemById, editMenuItemById, getMenuItems } from '../controllers/menuController.js';

const menuRouter = express.Router(); 

menuRouter.get('/', getMenuItems);
menuRouter.post('/', createMenuCategory);
menuRouter.post('/:id', editMenuItemById);
menuRouter.delete('/item/:id', deleteMenuItemById);
menuRouter.delete('/:id', deleteCategoryById);

export default menuRouter;
