import {Router} from 'express'
import authController from '../controllers/addstudent.controller.js'
const route = Router();

route.post("/add-student" , authController.addStudent)

export default route