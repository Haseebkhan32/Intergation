import express, { json } from 'express';
import authRoutes from './Routes/auth.routes.js'
import addstudentroutes from './Routes/addstudent.routes.js'
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use('/api/auth', authRoutes)
app.use('/api/auth', addstudentroutes)


export default app;
