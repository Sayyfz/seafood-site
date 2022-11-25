import express from 'express';
import { getHomeContent } from '../controllers/homeController.js';

const homeRouter = express.Router(); 

homeRouter.get('/', getHomeContent);

export default homeRouter;