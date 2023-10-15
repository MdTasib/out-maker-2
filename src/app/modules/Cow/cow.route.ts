import  express  from "express";
import { CowController } from "./cow.controller";

const router = express.Router()


router
.post('/', CowController.createCow)
.get('/:id',CowController.getSingleCow)
.get('/',CowController.getAllCow)
.patch('/:id',CowController.updateCow)
.delete('/:id',CowController.deleteCow)


export const CowRoutes = router; 