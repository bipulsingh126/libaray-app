import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config'


const app = express();

const port = process.env.PORT || 5000 

// database connection
connectDB();


//middleware
app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log(`app listening on ${port}`);
    
})


app.post ('/upload-book', async(req ,res) =>{
    const data = req.body
    
})