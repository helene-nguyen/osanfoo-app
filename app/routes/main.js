//~import modules
import { Router } from 'express';
const router = Router();

import { renderHomePage } from '../controllers/mainController.js';

//~routes
router.get('/', renderHomePage);

export { router };