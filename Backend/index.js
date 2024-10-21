import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config'


const app = express();

const port = process.env.PORT || 5000

// database connection
connectDB();


// Routes
// user routes 
app.post('/api/users/register', (req, res) => {
    res.send('User Registered');
})

//loguin
app.post('/api/users/login', (req, res) => {
    res.send('User Logged in');
})

//update
app.put('/api/users/update', (req, res) => {
    res.send(`User update`);
})

//delete
app.delete('/api/users/:id', (req, res) => {
    res.send(`User deleted`);
})

// fetch users

app.get('/api/users', (req, res) => {
    res.send(`All Users`);
})




//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`app listening on ${port}`);

})

