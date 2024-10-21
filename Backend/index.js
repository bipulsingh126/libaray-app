import express from 'express';
import cors from 'cors';

import connectDB from './config/db.js';
import 'dotenv/config'
import { userRouter } from './routes/userRoute.js';
import { signUp } from './controllers/userController.js';


const app = express();

const port = process.env.PORT || 5000

// database connection
connectDB();


// Routes
app.use("/api/v1" , userRouter)




//middleware
app.use(cors());
app.use(express.json());




app.listen(port, () => {
    console.log(`app listening on ${port}`);

})

