import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import menuRouter from './routes/menu.js';
import homeRouter from './routes/home.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/home', homeRouter);
app.use('/api/menu', menuRouter);

// Mongo Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        });
    })
    .catch(error => console.log(error));
