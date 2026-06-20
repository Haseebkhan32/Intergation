// import express from 'express';
import { Router } from 'express';
import authController from '../controllers/auth.controller.js'

const route = Router(); 

route.post("/Sign-Account", authController.registerUser)

route.post("/login-Account" , authController.loginUser)


export default route; 