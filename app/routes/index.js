//~import modules
import { Router } from "express";
const router = Router();

//~routes
//main
import { router as mainRouter } from './main.js';
router.use(mainRouter);

export { router };