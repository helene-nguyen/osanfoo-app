//~import modules
import { Router } from 'express';
const router = Router();

import { fetchAllUsers, fetchOneUser, createNewUser, deleteOneUser } from '../controllers/userController.js';

//~routes
router.get('/users', fetchAllUsers);
router.get('/users/:id', fetchOneUser);
router.post('/users', createNewUser);

router.delete('/users/:id', deleteOneUser)

export { router };