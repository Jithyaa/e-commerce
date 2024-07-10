import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connect from './database/connect.js';

dotenv.config()
const app=express()

app.use(cors());
app.use(express.json())


const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("jjjjjjjjjj");
});

app.listen(port,()=>{
    connect();
    console.log(`Server is running on port ${port}`)
})
