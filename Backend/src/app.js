import express from "express"
import cors from "cors"
import { studentRoutes } from "./Routes/student.js";

const app = express();
app.use(express.json())
app.use(cors())



app.use( "/student", studentRoutes);

export default app