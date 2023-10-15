import express from "express"
import { SignupController } from "./signUp.controller";
const router =express.Router()

router.post('/signup',SignupController.createUser)

export const SignupRoutes =router;


