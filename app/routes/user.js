//~import modules
import { Router } from 'express';
const router = Router();

import { fetchAllUsers, fetchOneUser, createNewUser } from '../controllers/userController.js';

//~routes
router.get('/users', fetchAllUsers);
router.get('/users/:id', fetchOneUser);
router.post('/users', createNewUser);

export { router };