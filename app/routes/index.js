//~import modules
import { Router } from "express";
const router = Router();

//~routes
//main
import { router as user } from "./user.js";
router.use(user);

export { router };
