import express  from "express";
import { OrderController } from "./order.controller";
const router = express.Router()

router
.post('/',OrderController.createOrder)
.get('/',OrderController.getAllOrder)


export const OrderRoutes =router