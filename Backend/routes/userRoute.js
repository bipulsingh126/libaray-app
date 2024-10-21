import express from 'express';
import { signUp } from '../controllers/userController.js';



const userRouter = express.Router();

//sign up 
userRouter.post('/signup', signUp );


export { userRouter };