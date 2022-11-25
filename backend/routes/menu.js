import express from 'express';
import { createMenuCategory, deleteMenuItemById, editMenuItemById, getMenuItems } from '../controllers/menuController.js';

const menuRouter = express.Router(); 

menuRouter.get('/', getMenuItems);
menuRouter.post('/', createMenuCategory);
menuRouter.post('/:id', editMenuItemById);
menuRouter.delete('/:id', deleteMenuItemById);

export default menuRouter;
