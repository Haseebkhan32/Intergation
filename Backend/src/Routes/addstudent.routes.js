import {Router} from 'express'
import authController from '../controllers/addstudent.controller.js'
const route = Router();

route.post("/add-student" , authController.addStudent)
route.get("/all-studentlist", authController.allstudentlist )
route.delete("/delete-student/:id" , authController.deleteStudent)

export default route